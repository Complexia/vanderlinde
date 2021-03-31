import NavigationBar from "../components/NavigationBar";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../stylesheets/forms.css'
function Register() {

    return (
        <div className="background">
            <NavigationBar />

            <div className="container form-container">

            
                <Form onSubmit = { event => { 
                    event.preventDefault();
                    //handleSearch(event)
                } }>

                    <Form.Group>
                        <Form.Label className="formTag">Username: </Form.Label>
                        <Form.Control name="username" placeholder="Enter username: " />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="formTag">Password: </Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter password: " />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Create account
                    </Button>
                </Form>

            </div>

        </div>
    )
}

export default Register