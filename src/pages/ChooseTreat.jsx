import TreatOption from "../components/TreatOption"
import './styles.css'
import ConfirmChoice from "../components/ConfirmChoice"
import {useState} from 'react';
import {Link} from 'react-router-dom'

export default function ChooseTreat(){
    const[isPopped, setIsPopped] = useState(false);
    const[time, setTime] = useState(15);
    const[treat, setTreat] = useState("Sesame Bun");
    const[description, setDescription] = useState("Soft bread topped with sesame seeds, often filled with beans, or sweet pastes");
    
    return(
        <div className="choose-treats-page-container">
            <link href="https://fonts.cdnfonts.com/css/bogart-trial" rel="stylesheet"/>
            <Link style={{textDecoration:"none", color:"black", paddingLeft:"20px", fontSize:"30px"}}to="/">&lt;</Link>
            <h1 className="choose-your-treat-title">Choose your treat!</h1>
            <div className="treat-option-container">
                <div className="row">
                    <TreatOption setIsPopped={setIsPopped} setTime={setTime}/>
                    <TreatOption time={20} treat={"Turtle Melon Bread"} description={"turtle melon desc"} setIsPopped={setIsPopped} setTime={setTime} setTreat={setTreat} setDescription={setDescription}/>
                </div>
                <div className="row">
                    <TreatOption time={30} treat={"Ube Cookie"} description={"ube cookie desc"} setIsPopped={setIsPopped} setTime={setTime} setTreat={setTreat} setDescription={setDescription}/>
                    <TreatOption time={45} treat={"Thai Tea Tiramisu"} description={"thai tea tiramisu desc"} setIsPopped={setIsPopped} setTime={setTime} setTreat={setTreat} setDescription={setDescription}/>
                </div>
                <div className="row">
                    <TreatOption time={60} unit="hr" treat={"Strawberry Swiss Roll"} description={"strawberry swiss roll desc"} setIsPopped={setIsPopped} setTime={setTime} setTreat={setTreat} setDescription={setDescription}/>
                    <TreatOption time={120} unit="hr" treat={"Matcha Crepe Cake"} description={"matcha crepe cake desc"} setIsPopped={setIsPopped} setTime={setTime} setTreat={setTreat} setDescription={setDescription}/>
                </div>
            </div>
            <ConfirmChoice time={time} treat={treat} description={description} trigger={isPopped} setTrigger={setIsPopped}/>
        </div>
    );
}


