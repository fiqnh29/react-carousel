import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import  { logout } from '../redux/action'
import { Navbar, Nav, NavItem, 
    NavLink, UncontrolledDropdown, 
    DropdownToggle, DropdownMenu, 
    DropdownItem,
    NavbarToggler, Collapse
} from 'reactstrap';


class Header extends React.Component{
    state = {
        isOpen: false
      };
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render(){
        return(
            <div>
                <Navbar color="dark" dark expand="md">
                    <Link to='/Home'>
                        <h1 style={{color: 'white'}}>Home</h1>
                    </Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        <NavLink href="/components/">Inactive Link</NavLink>
                        </NavItem>
                        <UncontrolledDropdown setActiveFromChild>
                        <DropdownToggle tag="a" className="nav-link" caret>
                            {/* Dropdown */}
                            {
                                this.props.username
                                ?
                                this.props.username
                                :
                                'Login'
                            }

                        </DropdownToggle>
                        {
                            this.props.role
                            ? 
                            <DropdownMenu right>
                            <Link to='/belajarRedux'>
                                <DropdownItem>
                                    Belajar
                                </DropdownItem>
                            </Link>
                            <DropdownItem  onClick={this.props.logout}>
                                Log Out
                            </DropdownItem>
                            </DropdownMenu>
                            :
                            <DropdownMenu>
                                <Link to='/sign_in'>
                                    <DropdownItem>
                                        Login                          
                                    </DropdownItem>
                                </Link>
                                <DropdownItem>Register</DropdownItem>
                            </DropdownMenu>
                        }
                        </UncontrolledDropdown>
                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
// export default Header;

const mapStatetoProps = (state) => {
    return{
      username: state.user.username,
      role: state.user.role
    }
  }
  
  export default connect(mapStatetoProps, {logout})(Header);