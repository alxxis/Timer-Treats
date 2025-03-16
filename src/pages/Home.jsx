import './styles.css'
import {Link} from 'react-router-dom'
export default function Home(){
    return(
        <div>
            <link href="https://fonts.cdnfonts.com/css/bogart-trial" rel="stylesheet"/>
            <h3 className="timer-treats-title">Timer <i>Treats</i></h3>
            <h1 className="bake-title">Bake a sweet treat & focus</h1>
            <img className="matcha-image-on-bake" src="/matcha-cake.png" width={60} height={60}/>
            <img className="sesame-image-on-bake" src="/sesame-bun.png" width={60} height={50}/>
            <img className="thai-image-on-bake" src="/Thai-Tea-Tiramisu.png" width={60} height={50}/>
            <h4 className="home-desc">Work using our Asian dessert inspired <strong style={{color:"black"}}>focus timer.</strong></h4>
            <h4 className="home-desc" style={{paddingLeft:"60px", paddingRight:"60px"}}>If you end the focus session, your treat will <strong style={{color:"black"}}>burn</strong>!</h4>
            {/* <div className="start-focusing-button">
            <Link to="/ChooseTreat">Start focusing</Link>
            </div> */}
            <div style={{textAlign:"center", marginTop:"50px"}}>
                <Link className="start-focusing-button" to="/ChooseTreat">Start focusing &rarr;</Link>
            </div>
        </div>
    );
}