import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

function OrderDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/orders/'+id)
            .then(res => setOrder(res.data))
            .catch(err => console.log)
    }, []);


    return (
        <div className="mains">
            <div className="mainss">
                <h1>Szczegóły</h1>
                {order.map((d, i) => (
                    <form key={i}>
                        <label htmlFor="">Zamówienie ID</label>
                        <input type="text" value={d.orderID} readOnly/><br/>

                        <label htmlFor="">Data Zamówienia</label>
                        <input type="text" value={new Date(d.order_date).toLocaleDateString()} readOnly/><br/>

                        <label htmlFor="">User ID</label>
                        <input type="text" value={d.userID} readOnly/><br/>

                        <label htmlFor="">Login</label>
                        <input type="text" value={d.login} readOnly/><br/>

                        <label htmlFor="">E-mail</label>
                        <input type="text" value={d.email} readOnly/><br/>

                        <label htmlFor="">Gra ID</label>
                        <input type="text" value={d.gameID} readOnly/><br/>

                        <label htmlFor="">Tytuł</label>
                        <input type="text" value={d.title} readOnly/><br/>

                        <label htmlFor="">Cena</label>
                        <input type="text" value={d.price} readOnly/><br/>
                    </form>
                ))}
                <button>
                    {<Link to={`/orders`}>Wyjdź</Link>}
                </button>
            </div>
        </div>
    );
}

export default OrderDetails;