import '../style.css';
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div>
            <main>
                <div className="mains">
                    <h1>HOME PAGE</h1>
                    <p id="logged">Jesteś zalogowany</p>
                    <span id="info">Witamy w naszym sklepie. Jest to platforma online, umożliwiająca bezpieczny zakup kont współdzielonych z grami Xbox X/S. Pełna satysfakcja grania w najnowsze tytuły offline za ułamek ich wartości.</span>
                </div>
                <button>
                    <Link to="/games">Wyświetl wszystkie gry</Link>
                </button>
            </main>
        </div>
    );
};



export default Home;


