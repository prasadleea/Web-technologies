import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
   @api        display;//small
   @api displayGreeting;//camelCase
   @api           user;
   @api   isUserAvilable=false;//boolean
}