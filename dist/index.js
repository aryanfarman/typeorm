"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Customer_1 = require("./entitySets/Customer");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, typeorm_1.createConnection)({
                type: 'mssql',
                host: process.env.DB_HOST,
                port: 1433,
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                extra: {
                    trustServerCertificate: true,
                },
                database: 'typeorm',
                synchronize: true,
                entities: [Customer_1.Customer],
            });
            console.log("connected to database . ");
        }
        catch (e) {
            console.error(e);
        }
    });
}
main();
