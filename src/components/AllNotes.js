import React from "react";

export default function AllNotes({note}){

    return(
        <div key={note.id} className="allNotes">
            <div className="OneNoteTittle">{note.tittle}</div>
            <div className="OneNoteTask">{note.task}</div>
        </div>
    )
}