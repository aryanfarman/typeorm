import {createConnection} from "typeorm"
import {Customer} from "./entitySets/Person";

async function main (){
    try {
        await createConnection({
            type: 'mssql',
            host: 'localhost',
            port: 1433,
            username: 'user10',
            password: '123',
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