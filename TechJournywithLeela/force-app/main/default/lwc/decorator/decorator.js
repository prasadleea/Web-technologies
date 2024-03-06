import { LightningElement,track } from 'lwc';

export default class Decorator extends LightningElement {
    greeting="Hello";
    @track welcome ="Tech Journy with Ankith";

    clickHandler(event)
    {
        this.greeting="Namaste";
        this.welcome="Today is day 19";
    }
}