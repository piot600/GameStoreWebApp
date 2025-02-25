import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Pagination from "../components/Pagination";

export default function Users() {
    const [user, setUser] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [userPerPage, setUserPerPage] = useState(5);

    const indexOfLastUser = currentPage * userPerPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage;
    const currentUsers = user.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(user.length / userPerPage);


    useEffect(() => {
        axios.get('http://localhost:3001/user')
            .then(res => setUser(res.data))
            .catch(err => console.log)
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:3001/user/delete/'+id)
            /*setUser(user.filter(user => user.userID !== id));*/
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }



    const handleRowsPerPageChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setUserPerPage(value > 0 ? value : 1);
        setCurrentPage(1);
    };


    return (
        <div className="mains">
            <button>
                {<Link to="/users/add">Dodaj użytkownika</Link>}
            </button>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Imie</th>
                    <th>Nazwisko</th>
                    <th>E-mail</th>
                    <th>Uprawnienia</th>
                    <th></th>
                </thead>
                <tbody>
                {currentUsers.map((d,i)=>(
                    <tr key={i}>
                        <td>{d.userID}</td>
                        <td>{d.name}</td>
                        <td>{d.surname}</td>
                        <td>{d.email}</td>
                        <td>{d.permission}</td>
                        <td>
                            <button>
                                {<Link to={`/users/update/${d.userID}`}>Edytuj</Link>}
                            </button>
                            <button onClick={e => handleDelete(d.userID)}>X</button>
                            <button>
                                {<Link to={`/users/details/${d.userID}`}>Szczegóły</Link>}
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
                        value={userPerPage}
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