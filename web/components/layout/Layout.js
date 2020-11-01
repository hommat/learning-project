import Link from 'next/link'

import Nav from './Nav';

export default function Layout({ children }) {
    return (
        <div>
            <header>
                <Link href="/">Micro</Link>
                <Nav />
            </header>
            <div>
                { children }
            </div>
            <footer>
                <small>footer</small>
            </footer>
        </div>
    )
}
