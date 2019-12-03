import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login} from '../redux/action';
import {Redirect} from 'react-router-dom';
import {
    Button, Input, Alert,
    Form, FormGroup, Label, Col
} from 'reactstrap';
import Axios from 'axios';
import { stat } from 'fs';

class sign_In extends Component{
    loginUser = () => {
        var username = this.text.value;
        var password = this.pass.value
        if(username === ''|| password === ''){
            alert('Masukan Username & Password')
        }else{
            Axios.get(`http://localhost:2000/login?username=${username}&password=${password}`,{
                username,
                password 
            })
            .then((res)=>{
                if(res.data.length === 0){
                    return alert('username atau password salah')
                }else{
                    console.log(res.data)
                    this.props.login(res.data[0])
                    return alert('welcome')      
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }

    render(){
        console.log(this.props.username)
        if(this.props.username !==''){
            return(
                
                <Redirect to='/Home'>
                </Redirect>
            )
        }
        return(
            <div>
                <div>
                    {/* <Col xs="6" sm="4"><Input type='text' innerRef={(text)=> this.text = text}/></Col>
                    <Col xs="6" sm="4"><Input type='password' innerRef={(pass)=> this.pass = pass}/></Col>
                    <Col xs="6" sm="4"><Button onClick={this.loginUser}>Login</Button></Col> */}
                    <div>
                        <Form inline>
                            <FormGroup>
                                <Label for="exampleEmail" hidden>Username</Label>
                                <Input type="text" placeholder="Username" innerRef={(text)=> this.text = text} />
                            </FormGroup>
                            {' '}
                            <FormGroup>
                                <Label for="examplePassword" hidden>Password</Label>
                                <Input type="password" placeholder="Password" innerRef={(pass)=> this.pass = pass} />
                            </FormGroup>
                            {' '}
                            <Button color="primary" onClick={this.loginUser}>Login</Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        username: state.user.username,
        role: state.user.role
    }
}

export default connect(mapStatetoProps, {login})(sign_In)