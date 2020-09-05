import React from "react"
import Header from "./Reacht";
import './Style.css'
import List from "./list";


const App = () => {
    return (
        <div id="myDIV" className="header">
            <Header/>
            <List/>
        </div>
    )
}

export default App;