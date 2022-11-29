
import {useState, useEffect} from 'react';
const api = 'api/contact';



export default function Contact() {


    const [data, setData] = useState([]);


    useEffect(() => {




        async function getData() {
            let response = await fetch(api);
            let data = await response.json();
            console.log('data: >>>', data);
            setData(data);
        }



        getData();
    },[]);



    return (<div>

<h1>Contact</h1>



<p>{data.map((item, index) => {

    return <p>{item.name}</p>



})}</p>






    </div>)
}