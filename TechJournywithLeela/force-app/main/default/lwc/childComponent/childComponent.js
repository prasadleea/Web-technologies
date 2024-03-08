import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
   @api        display;//small
   @api displayGreeting;//camelCase
   //@api           user;
   @api   isUserAvilable=false;//boolean
   displayuser;

   //setter is function that execute a logic each time a property is set
   set user(value)
   {
      let cloneuser={...value};
      this.displayuser=cloneuser.channel.toUpperCase();
   }
   //getter is a function that compute a value for a property
   @api
   get user(){
      return this.displayuser;
   }
}