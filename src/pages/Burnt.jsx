import {Link} from 'react-router-dom'

export default function Burnt({treat = "Sesame Bun"}){
    return(
        <div>
            <h1>Oh no!</h1>
            <p>You lost focus and burnt your</p>
            <div>{treat}</div>
            <Link to="/Timer">Restart Timer</Link>
            <br></br>
            <Link to="/ChooseTreat">Bake Another Treat</Link>
        </div>
    );
}