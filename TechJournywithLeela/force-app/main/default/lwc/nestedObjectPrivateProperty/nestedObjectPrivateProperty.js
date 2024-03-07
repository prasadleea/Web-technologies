import { LightningElement,track } from 'lwc';
export default class NestedObjectPrivateProperty extends LightningElement {
@track myDetails={fname:"Amit",lname:"Jain"};
@track  myTask=["Office","Meeting","Conference"];

clickHandler(event)
{
    this.myDetails.fname="Ankit";
}
taskHandler(event){
    this.myTask.push("Self Study");

}
 RefreshHandler(event){
    this.myDetails={fname:"Nama",lname:"Thiru"};// do not need track decorator when we change total object
    this.myTask=[...this.myTask,"Combined Study"]//do not need track decorator when we change total array
 }
}