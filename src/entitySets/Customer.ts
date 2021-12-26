import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('Customer')
export class Customer{
    @PrimaryGeneratedColumn("uuid",{
        name:"CustomerID",
    })id: string =""
    @Column({
        name:"CustomerName",
        type:"nvarchar",
    })name : string = ""
    @Column({
        name:"CustomerLastName",
        type:"nvarchar"
    })lastName: string=""
    @Column({
        name:"CustomerAge",
        type:"int"
    })age:number=-1

}