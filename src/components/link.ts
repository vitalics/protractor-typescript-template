import { Component } from "./component";

export class Link extends Component {
    async getHref() {
        return this.root.getAttribute('href');
    }
    async getText() {
        return this.root.getText();
    }
}
