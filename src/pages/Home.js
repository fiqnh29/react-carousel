import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Buah from '../component/Buah';

import {
    Alert,Button
} from 'reactstrap'

class Home extends Component{
    render(){
        return(
            <div>
                {/* <Alert color="primary">
                    Ini Home!
                </Alert> */}
                <Buah/>
                {/* <Button color="warning">
                    <Link to='/Buah'>
                        Klik Untuk Belanja
                    </Link>
                </Button> */}
                
            </div>
        )
    }
}

export default Home