import React from "react";
import Header from "./Header";
import MainBlock from "./MainBlock";
import Settings from "./Settings";

export default function MainPlace() {

    const toggleAdd = () => {
        const add = document.querySelector(".add");
        const myNotes = document.querySelector(".myNotes");
        const settings = document.querySelector(".settings");

        add.classList.toggle("active");
        myNotes.classList.add("active");
        settings.classList.add("active");

        if( add.classList.contains("active") && myNotes.classList.contains("active") && settings.classList.contains("active")  ){
            myNotes.classList.remove("active")  
        }
    }

    const toggleMyNotes = () => {
        const add = document.querySelector(".add");
        const myNotes = document.querySelector(".myNotes");
        const settings = document.querySelector(".settings")

        settings.classList.add("active");
        add.classList.add("active");
        myNotes.classList.toggle("active");

        if( add.classList.contains("active") && myNotes.classList.contains("active") && settings.classList.contains("active")  ){
            myNotes.classList.remove("active")  
        }
    }

    const toggleSettings = () => {
        const add = document.querySelector(".add");
        const myNotes = document.querySelector(".myNotes");
        const settings = document.querySelector(".settings")

        myNotes.classList.add("active");
        add.classList.add("active");
        settings.classList.toggle("active");

        if( add.classList.contains("active") && myNotes.classList.contains("active") && settings.classList.contains("active")  ){
            myNotes.classList.remove("active")  
        }
    }

    return(
        <div className="mainPlace">
            <Header toggleMyNotes={toggleMyNotes} toggleAdd={toggleAdd} toggleSettings={toggleSettings}/>
            <MainBlock toggleAdd={toggleAdd} toggleMyNotes={toggleMyNotes}/>
        </div>
    )
}