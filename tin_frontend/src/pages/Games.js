import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Pagination from "../components/Pagination";

export default function Games() {
    const [game, setGame] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [gamePerPage, setGamePerPage] = useState(5);

    useEffect(() => {
        axios.get('http://localhost:3001/game')
            .then(res => setGame(res.data))
            .catch(err => console.log)
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:3001/game/delete/'+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    const indexOfLastGame = currentPage * gamePerPage;
    const indexOfFirstGame = indexOfLastGame - gamePerPage;
    const currentGames = game.slice(indexOfFirstGame, indexOfLastGame);

    const totalPages = Math.ceil(game.length / gamePerPage);

    const handleRowsPerPageChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setGamePerPage(value > 0 ? value : 1);
        setCurrentPage(1);
    };

    return (
        <div className="mains">
            <button>
                {<Link to="/games/add">Dodaj gre</Link>}
            </button>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Tytuł</th>
                    <th>Cena</th>
                    <th>Typ</th>
                    <th>Limit wieku</th>
                    <th></th>
                    </thead>
                <tbody>
                {currentGames.map((d,i)=>(
                    <tr key={i}>
                        <td>{d.gameID}</td>
                        <td>{d.title}</td>
                        <td>{d.price}</td>
                        <td>{d.type}</td>
                        <td>{d.age_limit}</td>
                        <td>
                            <button>
                                {<Link to={`/games/update/${d.gameID}`}>Edytuj</Link>}
                            </button>
                            <button onClick={e => handleDelete(d.gameID)}>X</button>
                            <button>
                                {<Link to={`/games/details/${d.gameID}`}>Szczegóły</Link>}
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="pagination">
                <label>
                    Wiersze:
                    <input
                        type="number"
                        value={gamePerPage}
                        onChange={handleRowsPerPageChange}
                        min="1"
                    />
                </label>
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                />
            </div>
        </div>

    );
}