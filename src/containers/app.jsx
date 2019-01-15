import React from 'react'

import {BrowserRouter as Router} from "react-router-dom"
import RouterView from "router"

class App extends React.Component{
    render(){
        return <div className="wrap">
                    <Router>
                        <RouterView/>
                    </Router>
               </div>
    }
}

export default App;