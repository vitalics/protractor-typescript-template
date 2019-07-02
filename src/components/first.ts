import { $$ } from "protractor";
import { Component } from "./component";
import { Collection } from "./collection";

export class Reason extends Component {
    async getHeader() {
        return this.root.$('.text-display-1').getText();
    }
    async getBody() {
        return this.root.$('.text-body').getText();
    }
}

export class Reasons extends Collection<Reason> {
    public constructor() {
        super($$('.about-container .span4'), Reason);
    }

}