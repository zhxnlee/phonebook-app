import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css"


function Navigation(){
    return (
    <header className= {classes.header}>
        <nav className = {classes.nav}>
            <ul className = {classes.list}>
                <li>
                <NavLink to = "/phonebook-app"
                end
                className ={({isActive}) => isActive ? classes.activeCC : undefined 
            }
                >Create Contacts</NavLink>
                    
                </li>

                <li>
                <NavLink to = "/phonebook-app/contact-listings"
                className ={({isActive}) => isActive ? classes.activeCL : undefined 
            }
                >Contact Listings</NavLink>
                </li>
            </ul>
        </nav>

    </header>
    )

}

export default Navigation;