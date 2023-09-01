import React, { useEffect, useState } from 'react'

const Fetching = () => {
    useEffect(()=>{
        getData();
    },[]);

    let [object,setObject] = useState("");
    let [error,setError] = useState(false)

    const getData = ()=>{
        fetch('https://dummyjson.com/products')
        .then((response)=>response.text())
        .then((data)=>setObject(data))
        .catch(error=>setError(error))
    }

    return (
        <div>
            <div>
                {
                    !object && <h1>loading..</h1>
                }
            </div>
            
            {
                
                object && 
                <div>
                    <h1>Data Fetched from API</h1>
                    <pre>{object}</pre>
                </div>
            }
        </div>
    )
}

export default Fetching