import logo from '../images/pixer-logo.svg';

const Navbar = () => {
    return (
        <header>
            <div className="container">
        <nav className="navbar">
            <div className="logo">
            <a href="/" ><h1>Fast Sniper Bot</h1></a>
            </div>
            <ul>
            <li><a href="/">Sniper Bot</a></li>
            <li><a href="/services">Private Node</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact us</a></li>
            {/* <li><a href="/blog">Blog</a></li> */}
            {/* <li><a href="/kontaktlar">Kontaktlar</a></li> */}
            {/* <li><button className="btn btn-primary">+998 90 921 37 11</button></li> */}
            </ul> 
        </nav>
        </div>
        </header>
    )
}

export default Navbar
