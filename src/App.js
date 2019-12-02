import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import sign_In from './pages/sign_In';
import Home from './pages/Home';
import Buah from './component/Buah';

class App extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Route path='/Home' component={Home}/>
                <Route path='/sign_In' component={sign_In} />
                <Route path='/Buah' component={Buah}/>
            </div>
        )
    }
}

export default App;