import {useState, useEffect} from 'react';







export default function Hello() {
    console.clear();


    const [name, SetName] = useState({});


    console.log('name: >>>',name);


    useEffect(() => {
        async function getData() {
            
            let response = await fetch('api/hello');
            let data = await response.json();
            console.log('data: >>>> ',data);
        }



        getData();
    },[]);





    return (<div>

<h1>Hello Wolrd</h1>



    </div>)
}