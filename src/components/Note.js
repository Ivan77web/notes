import React, {useState} from "react";

export default function Note({toggleMyNotes, addNotes}){

    const [tittle, setTittle] = useState("");
    const [desc, setDesc] = useState("");

    const onChangeTittle = (e) => setTittle(e.target.value);
    const onChangeDesc = (e) => setDesc(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(desc){
            addNotes(tittle, desc);
            
            setTittle("");
            setDesc("");
            
            toggleMyNotes(); //delete class "active"
        }
    }
    
    
    
    
    
    return(
        <form onSubmit={handleSubmit} className="note">
            <div className="noteTittle">
                <p className="tittle"><i>Tittle:</i></p>
                <input value={tittle} onChange={onChangeTittle} className="inputTittle"/>
            </div>

            <div className="noteDesc">
                <p className="desc"><i>Discription:</i></p>
                <textarea placeholder="Обязательно" value={desc} onChange={onChangeDesc} className="inputDesc"/>
            </div>

            <button>Save</button>
        </form>
    )
}