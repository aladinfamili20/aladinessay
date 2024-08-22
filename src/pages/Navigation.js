import React from 'react'
import '../style/Navigation.css'
const Navigation = () => {
  return (
    <div>
        <headers>
<nav className='navbar'>
{/* Logo */}
<div className='logoHolder'>
<a href='/'>
{/* <img src={require('../images/ArthubLogoblackBac.png')} width={'100%'}  height={50} alt='Art-Hub Logo' /> */}
 </a>
</div>

<div>
{/* navigation menu */}
<ul className='nav-links'>
{/* uising checkbox hack */}
<input type='checkbox' id='checkbox_toggle'/>
<label for='checkbox_toggle' className='hamburger'>&#9776;</label>
{/* navigation menu */}
<div className='menu'>
<li><a href='/' className='navName' id="active1">Home</a></li>
<li className='services'>
<a href='/books' className='navName'>Books</a> 
</li>
<li className='services' id='navDrop'>
<a href='/stories' className='navName'>Stories</a>        
</li>

{/* <li className="logbutton"><a href="/login">Login</a></li> */}
   </div>  
</ul>

</div>
</nav>
</headers>
    </div>
  )
}

export default Navigation