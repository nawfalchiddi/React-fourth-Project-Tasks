import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
return(
    <header className='header'>
        <div className='titleBtn'>
<h1 className='theMaintitle'>PORTFOLIO</h1><ul className='ulreact'>
     <Link to="/">Home</Link>
  <Link to="/about">About</Link>

</ul><button className='btn'>Explore more</button>


        </div>
        
        <nav className='nav'>
    


                
           
         
        </nav>
        
    </header>
)    
}

export default Header