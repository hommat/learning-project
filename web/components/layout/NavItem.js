import Link from 'next/link'

export default function NavLink({ href, children }) {
    return (
        <li>
            <Link href={ href }>{ children }</Link>
        </li>
    )
}
