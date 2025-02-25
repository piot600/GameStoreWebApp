import { Outlet, Link } from "react-router-dom";
import '../style.css';

const Layout = () => {
    return (
        <>
            <nav>
                <header>
                    <div className="menu">
                        <ul>
                            <li>
                                <Link to="/">Strona Główna</Link>
                            </li>
                            <li>
                                <Link to="/users">Klienci</Link>
                            </li>
                            <li>
                                <Link to="/orders">Zamowienia</Link>
                            </li>
                            <li>
                                <Link to="/games">Gry</Link>
                            </li>
                            <li>
                                <Link to="/games">Wyloguj</Link>
                            </li>
                        </ul>
                    </div>
                </header>
            </nav>
            <Outlet />
        </>
    )
};


export default Layout;