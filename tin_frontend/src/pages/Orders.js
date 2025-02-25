import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Pagination from "../components/Pagination";

export default function Orders() {
    const [order, setOrder] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [orderPerPage, setOrderPerPage] = useState(5);

    useEffect(() => {
        axios.get('http://localhost:3001/orders')
            .then(res => setOrder(res.data))
            .catch(err => console.log)
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:3001/orders/delete/'+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    const indexOfLastOrder = currentPage * orderPerPage;
    const indexOfFirstOrder = indexOfLastOrder - orderPerPage;
    const currentOrder = order.slice(indexOfFirstOrder, indexOfLastOrder);

    const totalPages = Math.ceil(order.length / orderPerPage);

    const handleRowsPerPageChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setOrderPerPage(value > 0 ? value : 1);
        setCurrentPage(1);
    };

    
    return (
        <div className="mains">
            <button>
                {<Link to="/orders/add">Dodaj zamówienie</Link>}
            </button>
            <table>
                <thead>
                <th>ID</th>
                <th>Data zamówienia</th>
                <th>ID user</th>
                <th>ID gry</th>
                <th></th>
                </thead>
                <tbody>
                {currentOrder.map((d,i)=>(
                    <tr key={i}>
                        <td>{d.orderID}</td>
                        <td>{new Date(d.order_date).toLocaleDateString()}</td>
                        <td>{d.userID}</td>
                        <td>{d.gameID}</td>
                        <td>
                            <button>
                                {<Link to={`/orders/update/${d.orderID}`}>Edytuj</Link>}
                            </button>
                            <button onClick={e => handleDelete(d.orderID)}>X</button>
                            <button>
                                {<Link to={`/orders/details/${d.orderID}`}>Szczegóły</Link>}
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
                        value={orderPerPage}
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