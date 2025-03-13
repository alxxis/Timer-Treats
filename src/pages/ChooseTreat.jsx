import TreatOption from "../components/TreatOption"
import ConfirmChoice from "../components/ConfirmChoice"
import {useState} from 'react';
import {Link} from 'react-router-dom'

export default function ChooseTreat(){
    const[isPopped, setIsPopped] = useState(false);
    const[time, setTime] = useState(15);
    const[treat, setTreat] = useState("Sesame Bun");
    const[description, setDescription] = useState("Soft bread topped with sesame seeds, often filled with beans, or sweet pastes");
    
    return(
        <div>
            <Link to="/">&lt;</Link>
            <h2>Choose your treat!</h2>
            <div className="treat-option-container">
                <div className="row">
                    <TreatOption setIsPopped={setIsPopped} setTime={setTime}/>
                    <TreatOption time={20} treat={"Turtle Melon Bread"} description={"turtle melon desc"} setIsPopped={setIsPopped} setTime={setTime} setTreat={setTreat} setDescription={setDescription}/>
                </div>
                <div className="row">
                    <TreatOption time={30} treat={"Ube Cookie"} setIsPopped={setIsPopped} setTime={setTime} setTreat={setTreat}/>
                    <TreatOption time={45} treat={"Thai Tea Tiramisu"} setIsPopped={setIsPopped} setTime={setTime} setTreat={setTreat}/>
                </div>
                <div className="row">
                    <TreatOption time={1} unit="hr" treat={"Strawberry Swiss Roll"} setIsPopped={setIsPopped} setTime={setTime} setTreat={setTreat}/>
                    <TreatOption time={2} unit="hr" treat={"Matcha Crepe Cake"} setIsPopped={setIsPopped} setTime={setTime} setTreat={setTreat}/>
                </div>
                <p>{description}</p>
            </div>
            <ConfirmChoice time={time} treat={treat} description={description} trigger={isPopped} setTrigger={setIsPopped}/>
        </div>
    );
}


