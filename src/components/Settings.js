import React from "react";

export default function Settings(){

    const nightTheme = () => {
        const mainPlace = document.querySelector(".mainPlace");
        mainPlace.classList.add("nightTheme");

        alert(mainPlace.classList)
    }




    return(
        <div className="settings active">
            <button onClick={nightTheme}>Night theme</button>
        </div>
    )
}