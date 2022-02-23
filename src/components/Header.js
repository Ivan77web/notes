import React from "react";

export default function Header({toggleAdd, toggleMyNotes, toggleSettings}) {



    return(
        <div className="header">
            <div className="logo">
                <p>Notes</p>
            </div>
            <div className="headerButtons">
                <p onClick={toggleAdd} className="buttonAdd">Add</p>
                <p onClick={toggleMyNotes} className="buttonMyNotes">My notes</p>
                <p onClick={toggleSettings} className="buttonSettings">Settings</p>
            </div>
        </div>
    )
}