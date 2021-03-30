import Button from 'react-bootstrap/esm/Button';
import Navbar from 'react-bootstrap/Navbar';
import '../stylesheets/navbar.css'

function NavigationBar() {
    

    return (
        <Navbar className="navbar-transparent">
            <Navbar.Brand href="#home"><h1 className="brand">vanderlinde</h1></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
  
                <Navbar.Text className="buttons">
                    
                    <Button className="navbarButton">Login</Button>
 
                    <Button className="navbarButton">Register</Button>
                    
                </Navbar.Text>

            </Navbar.Collapse>
        </Navbar>
        
        
    )
}

export default NavigationBar