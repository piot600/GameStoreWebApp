import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {validateNotEmpty, validateNumber} from "../Validate";

function AddOrderForm() {
    const [user, setUser] = useState([]);
    const [game, setGame] = useState([]);

    const [order_date, setOrder_date] = useState('')
    const [userID, setUserID] = useState('')
    const [gameID, setGameID] = useState('')
    const[errors,setErrors] = useState({})

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/user")
            .then((res) => {
            setUser(res.data);
        });

        // Pobierz istniejące gry
        axios.get("http://localhost:3001/game")
            .then((res) => {
            setGame(res.data);
        });
    }, []);


    function handleSubmit(event){
        event.preventDefault();

        const order_dateError = validateNotEmpty(order_date);
        const userIDError = validateNotEmpty(userID);
        const gameIDError = validateNotEmpty(gameID);

        if(order_dateError||userIDError||gameIDError){
            setErrors({order_date:order_dateError, userID:userIDError, gameID:gameIDError});
            return;
        }

        axios.post('http://localhost:3001/ordersadd',{order_date, userID, gameID})
            .then(res => {
                console.log(res);
                navigate('/orders');
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="mainss">
            <h2>Dodaj zamówienie</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor=''>Data zamówienia</label>
                        <input type="date" value={order_date}
                               onChange={e => setOrder_date(e.target.value)}
                        />
                        {errors.order_date&&<p style={{ color: 'red' }}>{errors.order_date}</p>}
                    </div>
                    <label htmlFor=''>ID Użytkownika</label>
                    <select value={userID} onChange={(e) => setUserID(e.target.value)}>
                        <option value="">Wybierz użytkownika</option>
                        {user.map((user) => (
                            <option key={user.userID} value={user.userID}>
                                {user.userID} - {user.name} {user.surname}
                            </option>
                        ))}
                    </select>
                    {errors.userID&&<p style={{ color: 'red' }}>{errors.userID}</p>}
                </div>
                <div>
                    <label htmlFor=''>ID gry</label>
                    <select value={gameID} onChange={(e) => setGameID(e.target.value)}>
                        <option value="">Wybierz Gre</option>
                        {game.map((game) => (
                            <option key={game.userID} value={game.gameID}>
                                {game.gameID} - {game.title}
                            </option>
                        ))}
                    </select>
                    {errors.gameID&&<p style={{ color: 'red' }}>{errors.gameID}</p>}
                </div>
                <button>Dodaj</button>
            </form>
            <button>
                {<Link to={`/orders`}>Cofnij</Link>}
            </button>
        </div>
    );
}

export default AddOrderForm;