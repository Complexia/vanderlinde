import Button from 'react-bootstrap/esm/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css'

function NavigationBar() {
    

    return (
        <Navbar className="navbar-transparent">
            <Navbar.Brand href="/"><h1 className="brand">vanderlinde</h1></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
  
                <Navbar.Text className="buttons">
                    
                    <Link to="/login">
                        <Button className="navbarButton">Login</Button>
                    </Link>
                    
 
                    <Link to="/register">
                        <Button className="navbarButton">Register</Button>
                    </Link>
                    
                </Navbar.Text>

            </Navbar.Collapse>
        </Navbar>
        
        
    )
}

export default NavigationBar