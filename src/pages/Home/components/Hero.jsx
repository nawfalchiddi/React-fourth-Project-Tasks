import { useState ,useEffect } from 'react';
import React from 'react';
import './Hero.css';
import imgs from '../../../assets/intermediate-swimming.jpg'
// import Form from './Form';
import iMgfb from '../../../assets/footbal.jpg';
// import { IoBagAddOutline } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa";
// import { TheEffect } from './Effect';
import ProductCard from '../components/ProductCard';
import homepic from '../../../assets/Gemini_Generated_Image_6fzx506fzx506fzx.jfif'
function Hero() {
const [Products,setProduct] = useState([])
const [name,setName] = useState('')
const [level,setLevel] = useState('')
const [change, setChange] = useState(null);
const [number,setNumber] = useState(0);
const [isChecked,setIschecked] = useState(false);

useEffect(()=>{
    const Productsneeded = localStorage.getItem('studentinfo')
    if (Productsneeded) {
        setProduct(JSON.parse(Productsneeded))
    }
},[])


    useEffect(()=>{
    const count = setInterval(() => {
        setNumber(prev=>prev += 1) 
    }, 1000);
   return ()=> clearInterval(count)
})




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
    localStorage.setItem('studentinfo', JSON.stringify(Products))
},[Products])


    function Add(e){
        e.preventDefault()
//          const inptname = document.querySelector('.thename').value;
// const inptAge = document.querySelector('.price').value;
// const inptcity = document.querySelector('.quatity').value;

setProduct([...Products,{id:crypto.randomUUID(), name:name,level:level}]);  

setName('');
setLevel('');
console.log('please');
        
    }





function Save() {
    const theformS = document.querySelector('.conta2BOxscnd');

       theformS.style.display = 'none'
   setProduct(Products.map(item=>
    item.id === change ? {...item,name,level} : item
   ));

   setChange(null)
    setName('')
    setLevel('')
}

function Edit(itm) {
        const theformS = document.querySelector('.conta2BOxscnd');
theformS.style.display = 'flex'
            setName(itm.name)        
            
                  
            setLevel(itm.Level)   
            setChange(itm.id)  
            console.log(itm.id);
               
            console.log(change);
            
    }



    function Delete(id){
       setProduct(Products.filter(item=>item.id !== id)) 
    }
    
    function Total(){
    
        let count = 0;
        for (let i = 0; i < Products.length; i++) {
            count++;
        }
        return count 
    }


   
    

    return(
        <section className='thebigconta'>

            
               <form action="" className="theform" onSubmit={Add}>
          <h1>Add a product now</h1>

          <input className="thename" type="text" placeholder="name" value={name} onChange={event=> setName(event.target.value)} required />


<select name="" id="theslctLvl" value={level} onChange={event=>setLevel(event.target.value)}>
    <option value="medium">Medium</option>
    <option value="hard">Hard</option>
    <option value="extrem">Extrem</option>
</select>

          <button  type="submit"  className="btnform" >Add</button> 
          {/* <button className='btnform' onClick={SaveEdit}>save</button> */}
          {change !== null && (<button className='btnform' type="button" onClick={Save}> Save Edit </button>)}
        </form>


<div className='divTotal'>
       <h1>The Task </h1>
      <p>Total : {Total()}</p>
</div>
          <div className='thecard'>
            {Products.map(item=> (<ProductCard key={item.id} name={item.name}  city={item.level}
            total={Total}
            rm={()=>Delete(item.id)
            }
            edit={()=>Edit(item.id)}
            
            />
        )
    )
    
}
{/* {console.log()} */}
            </div>  



            <div className='timer box'>
                <p>The timer needed :</p>
                <h1>the count : {number}</h1>
                <button className='thepause'>Pause</button><br /><br />
                <button className='thereset'>Reset</button>
            </div>
        </section>
    )
}

export default Hero