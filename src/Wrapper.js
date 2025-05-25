import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';
import Card from './Card';
import './Card.css'

 function Wrapper() {

    const [data,setData]= useState([]);
    const [loading ,setLoading]= useState(true);
    const [err,setError]= useState(null);

     useEffect(()=>{
         
        axios.get("https://dummyjson.com/products?limit=194&skip=0")
        .then(res=>{
            setData(res.data.products);
            setLoading(false);

        })
        .catch((err)=>{
            
             setError(err);
             setLoading(false);
        })

        

     },[])

     if(loading) return <div>Loading...</div>
     if(err) return <div> Error: {err}</div>
   
  return (
    <div >
      
     <Card data={data}/>

    </div>
  );
}

export default Wrapper;
