import mysql from 'mysql2/promise';

const ourIP = '109.156.76.246';
const piIP = '192.168.1.111';

export default async function handler (req, res) {



    const connection = await mysql.createConnection({
        host: piIP,
        database: 'naphill',
        port: 3306,
        user: 'lucyderojas',
        password: 'Filipo13',
    });
    
    
    let values = [];
    let queryRead = 'select * from name';
    let result = await connection.execute(queryRead, values);
    result = await result[0];


    console.log('result>>> ',result);

    




    res.json(result);
}
