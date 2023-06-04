import Link from "next/link"
import styles from './Footer.module.css'

interface navLink {
    to: string
    label: string
}

type ILinks = Array<navLink>

const links:ILinks = [
    {
        to: '/',
        label: 'Home'
    },
    {
        to: '#experience',
        label: 'What I do'
    },
    {
        to: '#projects',
        label: 'Projects'
    },
    {
        to: '/blog',
        label: 'Blog'
    },
    {
        to: '#contact',
        label: 'Contact'
    },
]

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <nav>
                <ul className={styles.menu}>
                    {links.map(({to, label}) => (
                    <li className={styles.menu__item}>
                        <Link href={to} className={styles.menu__link}>{label}</Link>
                    </li>
                    ))}
                </ul>
            </nav>
            <div className={styles.footer__copy}>
                <p>© 2021. All rights reserved.</p>
            </div>
        </footer>
    )
}