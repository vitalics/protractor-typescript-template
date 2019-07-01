import { ElementFinder, Locator } from "protractor";

export class TextComponent {
    public constructor(protected readonly root: ElementFinder) { }

    async getText() {
        return this.root.getText();
    }
}

export class Component extends TextComponent {
    $(locator: Locator) {
        this.root.element(locator);
    }
    $$(locator: Locator) {
        this.root.all(locator);
    }
    find(locator: Locator) {
        this.$(locator);
    }
    findAll(locator: Locator) {
        this.$$(locator);
    }
}
