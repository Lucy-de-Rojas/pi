
import {useState, useEffect} from 'react';
const api = 'api/pi';



export default function PI() {

    console.log('getting data fro pi');

    const [data, setData] = useState([]);

    useEffect(() => {


        async function getData() {
            console.log('inside get data func');
            let response = await fetch(api);
            let data = await response.json();
            console.log(data);
            setData(data);
        }


        getData();





    },[]);


    return (<div>
        <h1>Pi</h1>

        {data.map((item, index) => {
            return <p key={index}>{item.name}</p>
        })}









    </div>)
}
