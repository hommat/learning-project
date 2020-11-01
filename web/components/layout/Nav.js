import NavItem from './NavItem';

export default function Nav() {
    return (
        <nav>
            <ul>
                <NavItem href="/books">Books</NavItem>
                <NavItem href="/articles">Articles</NavItem>
            </ul>
        </nav>
    )
}
