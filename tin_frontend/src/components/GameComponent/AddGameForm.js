import {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {validateNotEmpty, validateNumber} from "../Validate";

function AddGameForm() {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [release_date, setRelease_date] = useState('')
    const [type, setType] = useState('')
    const [age_limit, setAge_limit] = useState('')
    const [descr, setDescr] = useState('')
    const[errors,setErrors] = useState({})

    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();

        const titleError = validateNotEmpty(title);
        const priceError = validateNumber(price);
        const release_dateError = validateNotEmpty(release_date)
        const typeError = validateNotEmpty(type);
        const age_limitError = validateNumber(age_limit);

        if(titleError||priceError||release_dateError||typeError||age_limitError){
            setErrors({title:titleError, price:priceError, release_dateError:release_dateError ,type:typeError, age_limit:age_limitError});
            return;
        }

        axios.post('http://localhost:3001/gameadd',{title, price, release_date, type, age_limit, descr})
            .then(res => {
                console.log(res);
                navigate('/games');
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="mainss">
            <h2>Dodaj gre</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor=''>Tytuł</label>
                    <input type="text" placeholder="Wpisz tytuł"
                           onChange={e => setTitle(e.target.value)}
                    />
                    {errors.title&&<p style={{ color: 'red' }}>{errors.title}</p>}
                </div>
                <div>
                    <label htmlFor=''>Cena</label>
                    <input type="number" placeholder="Wpisz cene"
                           onChange={e => setPrice(e.target.value)}
                    />
                    {errors.price&&<p style={{ color: 'red' }}>{errors.price}</p>}
                </div>
                <div>
                    <label htmlFor=''>Data premiery</label>
                    <input type="date" placeholder="Wpisz date premiery"
                           onChange={e => setRelease_date(e.target.value)}
                    />
                    {errors.release_dateError&&<p style={{ color: 'red' }}>{errors.release_dateError}</p>}
                </div>
                <div>
                    <label htmlFor=''>Typ</label>
                    <input type="text" placeholder="Wpisz typ"
                           onChange={e => setType(e.target.value)}
                    />
                    {errors.type&&<p style={{ color: 'red' }}>{errors.type}</p>}
                </div>

                <div>
                    <label htmlFor=''>Limit wieku</label>
                    <input type="number" placeholder="Wpisz limit wieku"
                           onChange={e => setAge_limit(e.target.value)}
                    />
                    {errors.age_limit&&<p style={{ color: 'red' }}>{errors.age_limit}</p>}
                </div>
                <div>
                    <label htmlFor=''>Opis</label>
                    <input type="text" placeholder="Wpisz opis"
                           onChange={e => setDescr(e.target.value)}
                    />
                </div>
                <button>Dodaj</button>
            </form>
            <button>
                {<Link to={`/games`}>Cofnij</Link>}
            </button>
        </div>
    );
}

export default AddGameForm;