import { ElementFinder, Locator } from "protractor";

export class PureComponent {
    public constructor(protected readonly root: ElementFinder) { }

    public async getText() {
        return this.root.getText();
    }
    public static isPureComponent(textCompLike: any): textCompLike is PureComponent {
        return textCompLike instanceof PureComponent;
    }
}

export class Component {
    public constructor(public readonly root: ElementFinder) { }

    async getText() {
        return this.root.getText();
    }
    $(locator: Locator) {
        return this.root.element(locator);
    }
    $$(locator: Locator) {
        return this.root.all(locator);
    }
    find(locator: Locator) {
        return this.$(locator);
    }
    findAll(locator: Locator) {
        return this.$$(locator);
    }

    static isComponent(componentLike: any): componentLike is Component {
        return componentLike instanceof Component;
    }
}
