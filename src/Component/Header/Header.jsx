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
                <a href="#">Saas</a>
            </li>
            <li>
                <a href="#">Saas</a>
            </li>
            <li>
                <a href="#">Saas</a>
            </li>
        </ul>
    </div>

</nav>
)
}

export default Header;