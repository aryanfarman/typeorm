import {createConnection} from "typeorm"
import {Customer} from "./entitySets/Customer";
import {config} from "dotenv";
config()

async function main (){
    try {
        await createConnection({
            type: 'mssql',
            host: process.env.DB_HOST,
            port: 1433,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            extra : {
                trustServerCertificate : true,
            },
            database : 'typeorm',
            synchronize : true,
            entities : [Customer],

        });

        console.log("connected to database . ")
    }catch (e :  Error | any){
        console.error(e)

    }

}

main();