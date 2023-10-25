import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {


    return(
        <div className="navbar">
               <NavLink className="test" to="/">Home</NavLink> 
               <NavLink to="/about">About</NavLink>
               <NavLink to="/contact">Contact</NavLink>
               <NavLink to="/blog">Blog</NavLink>     
        </div>
    )
}

export default Navbar;



{/* <a href="/">Home</a>
<a href="/about">About</a>
<a href="/contact">Contact</a>
<a href="/blog">Blog</a> */}