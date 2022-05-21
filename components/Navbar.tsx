import Link from "next/link"
import ActiveLink  from "./ActiveLink"
import styles from './Navbar.module.css'


const menuItems = [
    {
        text:'Home',
        href:'/'
    },
    {
        text:'Contact',
        href:'/contact'
    },
    {
        text:'About',
        href:'/about'
    },{
        text:'Pricing',
        href:'/pricing'
    }
]

export default function Navbar() {
    return (
        <nav className={styles['menu-container']}>
            {
                menuItems.map(
                    (item) => <ActiveLink key={item.text} text={item.text} href={item.href} />
                )
            }
        </nav>
    )
}