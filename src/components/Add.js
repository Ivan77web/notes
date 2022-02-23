import React,{useState} from "react";
import Note from "./Note";

export default function Add({toggleMyNotes ,addNotes}) {

    return(
        <div className="add active">
            <Note toggleMyNotes={toggleMyNotes} addNotes={addNotes}/>
        </div>
    )
}