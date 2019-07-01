import { TextComponent } from "./component";
import { ElementArrayFinder, ElementFinder, $ } from "protractor";

export class Collection<C extends TextComponent = TextComponent> implements AsyncIterable<C>{
    public constructor(
        public readonly root: ElementArrayFinder,
        protected readonly component: (new (el: ElementFinder) => C) | typeof TextComponent = TextComponent
    ) { }
    [Symbol.asyncIterator](): AsyncIterator<C> {
        let index = 0;
        const instance = this;
        return {
            async next(): Promise<IteratorResult<C>> {
                const value = await instance.get(index);
                const length = await instance.getLength();
                if (index >= length) {
                    return Promise.resolve<IteratorResult<C>>({ done: true, value: undefined })
                }
                index++;
                return Promise.resolve<IteratorResult<C>>({ done: false, value, })
            }
        };
    }
    public async getLength() {
        return await this.root.count();
    }

    public get(index: number): C {
        return new this.component(this.root.get(index)) as C;
    }

    public first(): C {
        return new this.component(this.root.first()) as C;
    }
    public last(): C {
        return new this.component(this.root.last()) as C;
    }

    toArrayFinder() {
        return this.root;
    }
}
