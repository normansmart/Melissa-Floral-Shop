import "../css/Navigation.css";
import { Link } from "react-router";


function Navigation() {
    return (
        <>
            <div className="nav-container">
                <nav className="nav-bar">

                    <ul className="nav-links" >
                        <Link className="link" to='/'> <li> Home</li> </Link>
                        <Link className="link" to='/Services'> <li> Services </li></Link>
                        <Link className="link" to='/Portfolio'> <li> Portfolio </li> </Link>
                        <Link className="link" to='/About'> <li> About </li> </Link>
                        <Link className="link" to='/Contact'> <li> Contact </li> </Link>
                    </ul>

                </nav>

            </div>


        </>
    )
}

export default Navigation