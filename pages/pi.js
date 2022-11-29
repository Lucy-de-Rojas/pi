
import {useState, useEffect} from 'react';
const api = 'api/pi';



export default function PI() {

    const [data, setData] = useState([]);

    useEffect(() => {


        async function getData() {
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
            return <p>{item.name}</p>
        })}









    </div>)
}
