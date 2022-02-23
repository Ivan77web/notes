import React,{useState} from "react";
import AllNotes from "./AllNotes";
import Add from "./Add";

export default function MyNotes( {notes, toggleAdd}) {



    if(notes.length == 0){
        return(
            <div className="myNotes">
    
                <h3>My notes: {notes.length}</h3>
                
                <div style={ {margin: "200px", fontSize: "20px", color: "darkgrey" } }>
                    Write a note
                </div>

                <div className="iconPlus" onClick={toggleAdd}>
                    +
                </div>
    
            </div>     
        )
    }else{
        return(
            <div className="myNotes">
    
                <h3>My notes: {notes.length}</h3>
                
                <div className="overflow">
                    {notes.map( (note) => {
                        return( 
                            <AllNotes
                                note = {note}
                                key = {note.id}/>
                        )
                    })}
                </div>

                <div className="iconPlus" onClick={toggleAdd}>
                    +
                </div>
    
            </div>
        )
    }
}




































// import React,{useState} from "react";
// import AllNotes from "./AllNotes";
// import UserInput from "./UserInput";

// export default function Add() {

//     const [notes, setNotes] = useState([])

//     const addNotes = (userInput) => {
//         if(userInput){
//             const newItem = {
//                 id: Math.random().toString(36).substring(2,9),
//                 task: userInput
//             }

//             setNotes([...notes, newItem])
//         }
//     }



//     return(
//         <div className="myNotes">
//             <div>My notes: {notes.length}</div>
            
//             {notes.map( (note) => {
//                 return( 
//                     <AllNotes
//                         note = {note}
//                         key = {note.id}/>
//                 )
//             })}


//             <UserInput addNotes={addNotes}/>
//         </div>
//     )
// }