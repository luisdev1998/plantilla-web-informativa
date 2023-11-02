import './Navbar.css'
import Button from "../../components/Button/Button"

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="logo">LOGO</a>
                <input type="checkbox" id="toggler"></input>
                <label htmlFor="toggler" id="menu"><i className="fa-solid fa-bars"></i></label>
                <div className="navbar-links">
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/nosotros">Nosotros</a></li>
                        <Button className="button button-primary">Ejemplo</Button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}