import { Component } from "./component";

export class Button extends Component {
    async click() {
        await this.root.click();
    }
}
