import React, {useState} from "react";
import Add from "./Add";
import MyNotes from "./MyNotes";
import Settings from "./Settings";

export default function MainBlock({toggleMyNotes, toggleAdd}) {

    const [notes, setNotes] = useState([])

    const addNotes = (tittle, desc) => {
        if(desc){
            const newItem = {
                id: Math.random().toString(36).substring(2,9),
                tittle: tittle || "Not named",
                task: desc
            }

            setNotes([...notes, newItem]);

            console.log(notes);

        }
    }

    return(
        <div className="mainBlock">
            <Add toggleMyNotes={toggleMyNotes} addNotes={addNotes}/>
            <MyNotes toggleAdd={toggleAdd} notes = {notes}/>
            <Settings/>
        </div>
    )
}