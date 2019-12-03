import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { logout, contoh } from '../redux/action'
import {
    Button
}
from 'reactstrap'

class belajarRedux extends Component{
    state = {
        username:''
    }
    render(){
        console.log(this.props.username)
        return(
            <div>
                <h1>
                    {
                        this.props.username
                        ?
                        this.props.username
                        :
                        'belum login'
                    }
                </h1>
                <Button onClick={this.props.logout}>Logout</Button>
                <Button color="primary" onClick={this.props.contoh}>Click Me</Button>


            </div>
        )
    }
}

const MapStatetoProps = (state) =>{
    return{
        username: state.user.username
    }
}

export default connect(MapStatetoProps,{logout, contoh})(belajarRedux)