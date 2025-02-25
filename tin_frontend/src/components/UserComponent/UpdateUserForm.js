import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import {validateEmail, validateNotEmpty, validatePasswordLength} from "../Validate";

function UpdateUserForm() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const[errors,setErrors] = useState({})
    const [permission, setPermission] = useState('')

    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:3001/user/${id}`)
            .then ( res => {
                const userData = res.data[0]
                if(userData){
                    setName(userData.name)
                    setSurname(userData.surname)
                    setEmail(userData.email)
                    setLogin(userData.login)
                    setPassword(userData.password)
                    setPermission(userData.permission)
                }
            })
            .catch(err => console.log(err))
    }, []);
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

        axios.put('http://localhost:3001/userupdate/'+id,{name, surname, email, login, password, permission})
            .then(res => {
                console.log(res);
                navigate('/users');
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="mainss">
            <h2>Aktualizacja użytkownika</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor=''>Imie</label>
                    <input type="text" value={name}
                           onChange={e => setName(e.target.value)}
                    />
                    {errors.name&&<p style={{ color: 'red' }}>{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor=''>Nazwisko</label>
                    <input type="text" value={surname}
                           onChange={e => setSurname(e.target.value)}
                    />
                    {errors.surname && <p style={{ color: 'red' }}>{errors.surname}</p>}
                </div>
                <div>
                    <label htmlFor=''>E-mail</label>
                    <input type="text" value={email}
                           onChange={e => setEmail(e.target.value)}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor=''>Login</label>
                    <input type="text" value={login}
                           onChange={e => setLogin(e.target.value)}
                    />
                    {errors.login && <p style={{ color: 'red' }}>{errors.login}</p>}
                </div>
                <div>
                    <label htmlFor=''>Hasło</label>
                    <input type="text" value={password}
                           onChange={e => setPassword(e.target.value)}
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>
                <div>
                    <label htmlFor=''>Uprawnienia</label>
                    <input type="text" value={permission}
                           onChange={e => setPermission(e.target.value)}
                    />
                </div>
                <button>Uaktualnij</button>
            </form>
            <button>
                {<Link to={`/users`}>Cofnij</Link>}
            </button>
        </div>
    );
};

export default UpdateUserForm;