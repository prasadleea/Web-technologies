import { LightningElement } from 'lwc';

export default class FullNameGenerator extends LightningElement {
    fname="";
    lname="";
    fullname="";

    changeHandler(event){
        let {label,value}=event.target;
        if(label==="First Name"){
            this.fname=value;
        }
        else if(label==="Last Name"){
            this.lname=value;
        }
    }
    generateHandler(event){
    this.fullname=this.fname +" "+this.lname;    
      this.fullname=this.fullname.toUpperCase();

    }

}
