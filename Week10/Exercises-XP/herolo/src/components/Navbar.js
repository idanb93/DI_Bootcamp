import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id='navbar'>
            <Link className="navbar-brand text-white text-lg brand-text" to="/"> Herolo Weather Task </Link>
            <div>
                <Link className="navbar-brand text-white text-lg brand-text" to="/"> Weather </Link>
                <Link className="navbar-brand text-white text-lg brand-text" to="/favorites"> Favorites </Link>
            </div>
        </nav>
    )
}

export default Navbar;