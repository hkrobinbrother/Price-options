import { useState } from "react";
import Link from "../LInk/Link";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About Us' },
        { id: 3, path: '/contact', name: 'Contact Us' },
        { id: 4, path: '/services', name: 'Services' },
        { id: 5, path: '/products', name: 'Products' },
     
      ];
      
      
      
    return (
        <nav className="text-black bg-yellow-200 p-6">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoMdClose></IoMdClose>:
                     <IoMdMenu className="text-2xl "></IoMdMenu>
                }
            
            </div>
            <ul className={`md:flex duration-1000 absolute md:static px-6  ${open ? 'top-16': "-top-60"} bg-yellow-200 `}>
            {
                routes.map(route => <Link key={route.id}route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;