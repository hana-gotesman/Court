export class Case {
  userId!:number
  statusId!:StatusEnum
  numCase!:string
  topic!:string
  type!:string
  entitlement!:string
  dateCreate!:string
  nextDiscussion!:string
  submitsExcitation!:string
  chairmanCommitte!:string
  publicRepresentative!:string
 }

 export enum StatusEnum {
  Active,
  Close
 }

