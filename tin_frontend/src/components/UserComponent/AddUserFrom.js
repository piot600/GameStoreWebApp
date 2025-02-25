import {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import { validateNotEmpty, validateEmail, validatePasswordLength } from '../Validate'; // Import funkcji walidacyjnych

function AddUserForm() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [permission, setPermission] = useState('')
    const[errors,setErrors] = useState({})

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();

        const nameError = validateNotEmpty(name);
        const surnameError = validateNotEmpty(surname);
        const emailError = validateEmail(email);
        const loginError = validateNotEmpty(login);
        const passwordError = validatePasswordLength(password);

        if(nameError||surnameError||emailError||loginError||passwordError){
            setErrors({name:nameError, surname:surnameError, email:emailError, login:loginError, password:passwordError});
            return;
        }


        axios.post('http://localhost:3001/useradd',{name, surname, email, login, password, permission})
            .then(res => {
                console.log(res);
                navigate('/users');
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="mainss">
            <h2>Dodawanie użytkownika</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor=''>Imie</label>
                    <input type="text" placeholder="Wpisz imie"
                           onChange={e => setName(e.target.value)}
                    />
                    {errors.name&&<p style={{ color: 'red' }}>{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor=''>Nazwisko</label>
                    <input type="text" placeholder="Wpisz nazwisko"
                           onChange={e => setSurname(e.target.value)}
                    />
                    {errors.surname && <p style={{ color: 'red' }}>{errors.surname}</p>}
                </div>
                <div>
                    <label htmlFor=''>E-mail</label>
                    <input type="text" placeholder="Wpisz e-mail"
                           onChange={e => setEmail(e.target.value)}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor=''>Login</label>
                    <input type="text" placeholder="Wpisz login"
                           onChange={e => setLogin(e.target.value)}
                    />
                    {errors.login && <p style={{ color: 'red' }}>{errors.login}</p>}
                </div>
                <div>
                    <label htmlFor=''>Hasło</label>
                    <input type="text" placeholder="Wpisz haslo"
                           onChange={e => setPassword(e.target.value)}
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>
                <button>Dodaj</button>
            </form>
            <button>
                {<Link to={`/users`}>Cofnij</Link>}
            </button>
        </div>
    );
}

export default AddUserForm;