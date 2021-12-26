"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const typeorm_1 = require("typeorm");
let Customer = class Customer {
    constructor() {
        this.id = "";
        this.name = "";
        this.lastName = "";
        this.age = -1;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid", {
        name: "CustomerID",
    })
], Customer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "CustomerName",
        type: "nvarchar",
    })
], Customer.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "CustomerLastName",
        type: "nvarchar"
    })
], Customer.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "CustomerAge",
        type: "int"
    })
], Customer.prototype, "age", void 0);
Customer = __decorate([
    (0, typeorm_1.Entity)('Customer')
], Customer);
exports.Customer = Customer;
