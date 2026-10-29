import { useState , useEffect } from "react";


export function TheEffect() {
    const [number,setNumber] = useState(0)
   useEffect(()=>{

    const productssave = localStorage.getItem('ProductsNeeded')
    if (productssave) {
        setProducts(JSON.parse(productssave))
    }
   },[])
//    useEffect(()=>{
//     setInterval(() => {
//         console.log("hello");
        
//     }, 1000);
//    })

// both are right :
// function Stter(){
//     setNumber(number + 1)
// }

// function Stter(){

//     setNumber((prev)=>prev+1)
// }







// useEffect(()=>{
//     const timer = setInterval(() => {
        
//     }, 1000);

//    return ()=> clearInterval(timer)
// })

   useEffect(()=>{
     
    localStorage.setItem('productsneeded', JSON.stringify(Products))
   },[Products])
}