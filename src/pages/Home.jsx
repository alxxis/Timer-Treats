import './styles.css'
import {Link} from 'react-router-dom'
export default function Home(){
    return(
        <div>
            <link href="https://fonts.cdnfonts.com/css/bogart-trial" rel="stylesheet"/>
            <h2>Timer Treats</h2>
            <h1>Bake a sweet treat & focus</h1>
            <h4>Work using our Asian dessert inspired <bold>focus timer.</bold></h4>
            <h4>If you end the focus session, your treat will <bold>burn</bold>!</h4>
            <Link to="/ChooseTreat">Start focusing</Link>
        </div>
    );
}