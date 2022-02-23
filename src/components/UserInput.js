import React, {useState} from "react";

export default function UserInput({addNotes}) {

    const [userInput, setUserInput] = useState("")

    const handleChange = (e) => {
        setUserInput( () => e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNotes(userInput)
        setUserInput("")
    }

    return(
        <div>
            <form className="userInput" onSubmit={handleSubmit}> 
                <input onChange={handleChange} value={userInput} />
                <button>+</button>
            </form>
        </div>
    )
}