import { LightningElement,track } from 'lwc';
export default class NestedObjectPrivateProperty extends LightningElement {
@track myDetails={fname:"Amit",lname:"Jain"};

clickHandler(event)
{
    this.myDetails.fname="Ankit";
}

}