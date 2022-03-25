import "./Header.css";

const Header = () =>{
return(
<nav>
    <div className="nav-wrapper 
    header-nav">
        <a href="#" className="brand-logo">
            React Movies
        </a>
        <ul className="right hide-on-med-and-down">
            <li>
                <a href="#">Movies</a>
            </li>
            <li>
                <a href="#">Serials</a>
            </li>
            <li>
                <a href="#">Cartoon</a>
            </li>
        </ul>
    </div>

</nav>
)
}

export default Header;