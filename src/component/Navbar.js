import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, NavItem, 
    NavLink, UncontrolledDropdown, 
    DropdownToggle, DropdownMenu, 
    DropdownItem 
} from 'reactstrap';


class Header extends React.Component{
    render(){
        return(
            <div>
                <Navbar color="dark" dark expand="md">
                    <Link to='/Home'>
                        <h1 style={{color: 'white'}}>Navbar</h1>
                    </Link>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        <NavLink href="/components/">Inactive Link</NavLink>
                        </NavItem>
                        <UncontrolledDropdown setActiveFromChild>
                        <DropdownToggle tag="a" className="nav-link" caret>
                            Dropdown
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <Link to='/sign_in'>
                                Login
                                </Link>
                               
                            </DropdownItem>
                            <DropdownItem>Register</DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
export default Header;