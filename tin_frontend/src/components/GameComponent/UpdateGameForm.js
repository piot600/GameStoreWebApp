import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import {validateNotEmpty, validateNumber} from "../Validate";

function UpdateGameForm() {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [release_date, setRelease_date] = useState('')
    const [type, setType] = useState('')
    const [age_limit, setAge_limit] = useState('')
    const [descr, setDescr] = useState('')

    const[errors,setErrors] = useState({})

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/game/${id}`)
            .then(res => {
                const gameData =res.data[0];
                if (gameData) {
                    setTitle(gameData.title);
                    setPrice(gameData.price);
                    setRelease_date(gameData.release_date);
                    setType(gameData.type);
                    setAge_limit(gameData.age_limit);
                    setDescr(gameData.descr);
                }
            })
            .catch(err => console.log(err));
    }, []);


    function handleSubmit(event){
        event.preventDefault();


        axios.put('http://localhost:3001/gameupdate/'+id,{title, price, release_date, type, age_limit, descr})
            .then(res => {
                console.log(res);
                navigate('/games');
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="mainss">
            <h2>Aktualizacja Gry</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor=''>Tytuł</label>
                    <input type="text" value={title}
                           onChange={e => setTitle(e.target.value)}
                    />

                </div>
                <div>
                    <label htmlFor=''>Cena</label>
                    <input type="number" value={price}
                           onChange={e => setPrice(e.target.value)}
                    />

                </div>
                <div>
                    <label htmlFor=''>Data premiery</label>
                    <input type="date" value={release_date}
                           onChange={e => setRelease_date(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor=''>Typ</label>
                    <input type="text" value={type}
                           onChange={e => setType(e.target.value)}
                    />

                </div>
                <div>
                    <label htmlFor=''>Limit wieku</label>
                    <input type="number" value={age_limit}
                           onChange={e => setAge_limit(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor=''>Opis</label>
                    <input type="text" value={descr}
                           onChange={e => setDescr(e.target.value)}
                    />
                </div>
                <button>Aktualizuj</button>
            </form>
            <button>
                {<Link to={`/games`}>Cofnij</Link>}
            </button>
        </div>
    );
};

export default UpdateGameForm;