import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import "../Validate";

function UpdateOrderForm() {
    const [user, setUser] = useState([]);
    const [game, setGame] = useState([]);

    const [order_date, setOrder_date] = useState('')
    const [userID, setUserID] = useState('')
    const [gameID, setGameID] = useState('')

    const[errors,setErrors] = useState({})

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        axios.get("http://localhost:3001/user").then((res) => {
            setUser(res.data);
        });

        // Pobierz istniejące gry
        axios.get("http://localhost:3001/game").then((res) => {
            setGame(res.data);
        });

        axios.get(`http://localhost:3001/orders/${id}`)
            .then(res => {
                const orderData=res.data[0];
                if(orderData){
                    setUserID(orderData.userID)
                    setGameID(orderData.gameID)
                    setOrder_date(orderData.order_date)
                }
            })
            .catch(err => console.log(err))
    }, []);

    function handleSubmit(event){
        event.preventDefault();

        axios.put('http://localhost:3001/ordersupdate/'+id,{userID, gameID, order_date})
            .then(res => {
                console.log(res);
                navigate('/orders');
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="mainss">
            <h2>Aktualizacja Zamówienia</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor=''>Data zamówienia</label>
                        <input type="date" value={order_date}
                               onChange={e => setOrder_date(e.target.value)}
                        />
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
                </div>
                <button>Aktualizuj</button>
            </form>
            <button>
                {<Link to={`/orders`}>Cofnij</Link>}
            </button>
        </div>
    );
};

export default UpdateOrderForm;