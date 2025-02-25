import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

function GameDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [game, setGame] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/game/'+id)
            .then(res => setGame(res.data))
            .catch(err => console.log)
    }, []);


    return (
        <div className="mains">
            <div className="mainss">
                <h1>Szczegóły</h1>
                {game.map((d, i) => (
                    <form key={i}>
                        <label htmlFor="">Tytuł</label>
                        <input type="text" value={d.title} readOnly/><br/>

                        <label htmlFor="">ID</label>
                        <input type="text" value={d.gameID} readOnly/><br/>

                        <label htmlFor="">Cena</label>
                        <input type="text" value={d.price} readOnly/><br/>

                        <label htmlFor="">Typ</label>
                        <input type="text" value={d.type} readOnly/><br/>

                        <label htmlFor="">Limit wieku</label>
                        <input type="text" value={d.age_limit} readOnly/><br/>

                        <label htmlFor="">Data premiery</label>
                        <input type="text" value={new Date(d.release_date).toLocaleDateString()} readOnly/><br/>

                        <label htmlFor="">Opis</label>
                        <input type="text" value={d.descr} readOnly/><br/>
                    </form>
                ))}
                <button>
                    {<Link to={`/games`}>Wyjdź</Link>}
                </button>
            </div>
        </div>
    );
}

export default GameDetails;