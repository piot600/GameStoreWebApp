import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

function UserDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/user/'+id)
            .then(res => setUser(res.data))
            .catch(err => console.log)
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:3001/user/delete/'+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="mains">
            <div className="mainss">
                <h1>Szczegóły</h1>
                {user.map((d, i) => (
                    <form key={i}>
                        <label htmlFor="">ID</label>
                        <input type="text" value={d.userID} readOnly/><br/>

                        <label htmlFor="">Imie</label>
                        <input type="text" value={d.name} readOnly/><br/>

                        <label htmlFor="">Nazwisko</label>
                        <input type="text" value={d.surname} readOnly/><br/>

                        <label htmlFor="">E-mail</label>
                        <input type="text" value={d.email} readOnly/><br/>

                        <label htmlFor="">Login</label>
                        <input type="text" value={d.login} readOnly/><br/>

                        <label htmlFor="">Hasło</label>
                        <input type="text" value={d.password} readOnly/><br/>

                        <label htmlFor="">Uprawnienia</label>
                        <input type="text" value={d.permission} readOnly/><br/>
                    </form>
                ))}
                <button>
                    {<Link to={`/users`}>Wyjdź</Link>}
                </button>
            </div>

        </div>

    );
}

export default UserDetails;