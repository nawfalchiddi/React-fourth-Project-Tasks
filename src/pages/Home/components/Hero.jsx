import { useEffect, useRef, useState } from 'react';
import Timer from './Timerwatch.jsx';
import ControlButtons from './Buttonscontrol.jsx';
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
const [level,setLevel] = useState('medium')

const [namefrt,setNamefrt] = useState('')
const [levelfrt,setLevelfrt] = useState('')

const [change, setChange] = useState(null);
const [number,setNumber] = useState(0);
const [isChecked,setIschecked] = useState(false);
const [isFlex,setIsflex] = useState(false)

const [alltask,setAlltask] = useState('all');


//* the methode of the watch>>>>>>
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const startTimeRef = useRef(0);
  const elapsedBeforeStartRef = useRef(0);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setElapsed(
        elapsedBeforeStartRef.current +
          performance.now() - startTimeRef.current
      );
    }, 10);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    elapsedBeforeStartRef.current = 0;
    startTimeRef.current = performance.now();
    setElapsed(0);
    setHasStarted(true);
    setIsRunning(true);
  };

  const handlePauseResume = () => {
    if (isRunning) {
      const currentElapsed =
        elapsedBeforeStartRef.current +
        performance.now() - startTimeRef.current;

      elapsedBeforeStartRef.current = currentElapsed;
      setElapsed(currentElapsed);
      setIsRunning(false);
    } else {
      startTimeRef.current = performance.now();
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setHasStarted(false);
    setElapsed(0);
    elapsedBeforeStartRef.current = 0;
    startTimeRef.current = 0;
  };
//* the end of the watch methode>>>>>>
  



// ! the code for the timer starts from 0>>>>>>>>>
//  const [timer,setTimer] = useState(0);
// const [intervalTime,setTimeInterval] = useState(null);


// const startTimer = ()=> {
//     setTimeInterval(setInterval(()=>{
//         setTimer(prev=> prev + 1)
//     },1000))
// }


// const pauseTimer = ()=>{
//     clearInterval(intervalTime)
// }

// const resetTimer = ()=>{
//     setTimer(0)
//     clearInterval(intervalTime)
// }
//  !the end the code for the timer starts from 0>>>>>>>


const displayProducts = Products.filter((item)=>{
    // show the completed tasks
   if (alltask === 'completed') {
    if (item.isChecked === true) {
        return true;
    }else{
        return false
    }
    // show the uncompleted tasks
   } else if (alltask === 'uncompleted') {
    if (item.isChecked === false) {
        return true;
    }else{
        return false;
    }
   }
// show all
   return true
  
})


useEffect(()=>{
    const Productsneeded = localStorage.getItem('studentinfo')
    if (Productsneeded) {
        setProduct(JSON.parse(Productsneeded))
    }
},[])


    useEffect(()=>{
    const count = setInterval(() => {
        setNumber(prev=>prev + 1) 
    }, 1000);
   return ()=> clearInterval(count)
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
    function Addfrt(e){
        e.preventDefault()
//          const inptname = document.querySelector('.thename').value;
// const inptAge = document.querySelector('.price').value;
// const inptcity = document.querySelector('.quatity').value;

setProduct([...Products,{id:crypto.randomUUID(), name:namefrt,level:levelfrt,isChecked:false}]);  

setNamefrt('');
setLevelfrt('');
console.log('please');
        
    }





function Save() {
    // const theformS = document.querySelector('.conta2BOxscnd');

    //    theformS.style.display = 'none'
   setProduct(Products.map(item=>
    item.id === change ? {...item,name,level} : item
   ));

   setChange(null)
    setName('')
    setLevel('medium')
}

function Edit(item) {
//    isFlex === true ? theformS.style.display = 'flex' : theformS


            setName(item.name);            
            setLevel(item.level);      
            setChange(item.id);  
  
               
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


  function Completed(id) {
    setProduct(prev=>prev.map(x=> x.id === id ?{...x, isChecked: !x.isChecked}  : x ))
    
   }

   const forminfo = {
    Completed:Completed,
    formName : name,
    formLevel : level,
    change:change,
    setName:setName,
    setLevel : setLevel,
    setChange:setChange,
    isFlex : isFlex,
    add:Add,
    save:Save

    
   }
    
 

    return(
        <section className='thebigconta'>

            
               <form action="" className="theform" onSubmit={Addfrt}>
          <h1>Add a Task now</h1>

          <input className="thename" type="text" placeholder="name" value={namefrt} onChange={event=> setNamefrt(event.target.value)} required />


<select name="" id="theslctLvl" value={levelfrt} onChange={event=>setLevelfrt(event.target.value)}>
    <option value="medium">Medium</option>
    <option value="hard">Hard</option>
    <option value="extrem">Extrem</option>
</select>

          <button  type="submit"  className="btnform" >Add</button> 
          {/* <button className='btnform' onClick={SaveEdit}>save</button> */}
          {/* {change !== null && (<button className='btnform' type="button" onClick={Save}> Save Edit </button>)} */}
        </form>


<div className='divTotal'>
       <h1>The Task </h1>
      <p>Total : {Total()}</p>
     <button  className='filters'  onClick={() => setAlltask('all')}>All</button>
  <button  className='filters' onClick={() => setAlltask('completed')}>Completed</button>
  <button className='filters'  onClick={() => setAlltask('uncompleted')}>Active</button>
      {/* <button onClick={Completed}>Completed</button> */}
</div>
<div className='thecard'>
  {displayProducts.map(item => (
    <ProductCard 
      key={item.id} 
      {...item} 
      {...forminfo}
      total={Total}
      rm={() => Delete(item.id)}
      edit={() => Edit(item)}
    />
  ))}
</div>



            <div className='timer box'>
 <Timer time={elapsed} />
      <ControlButtons
        hasStarted={hasStarted}
        isRunning={isRunning}
        onStart={handleStart}
        onPauseResume={handlePauseResume}
        onReset={handleReset}
      />
            </div>
        </section>
    )
}

export default Hero