import NavigationBar from "../components/NavigationBar";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { gql, useMutation } from '@apollo/client';
import '../stylesheets/forms.css'
import { useState } from "react";
import { useHistory } from "react-router";
function Register() {


    const registerUser = gql`
        mutation login($email: String!, $password: String!, $firstName: String!, $lastName: String!, $username: String!) {
            register(email: $email, password: $password, firstName: $firstName, lastName: $lastName, username: $username) {
                user {
                    email
                }
                error {
                    field
                    message
                }
            }
        }
    `;
    
    const [register, { data }] = useMutation(registerUser);
    const [userData, setUserData] = useState<any>("")
    const history = useHistory();

    
    //calls the GraphQL registration mutation
    const returnUser = async (email: string, password: string, firstName: string, lastName: string, username: string) => {
        try {
            const returnedUser = await register({ variables: {
                 email: email, password: password, firstName: firstName, lastName: lastName, username: username } })
            return returnedUser
        }
        catch {
            //return a more sensible error if connection to server fails
            return "error"
        }
        
        
    }



    const handleRegister = async(e: any) => {
    
        let email = e.target.email.value
        let password = e.target.password.value
        let firstName = e.target.firstName.value
        let lastName = e.target.lastName.value
        let username = e.target.username.value
        let returnedUser = await returnUser(email, password, firstName, lastName, username)
        let jsonUser = JSON.stringify(returnedUser)   
        let jUser = JSON.parse(jsonUser)
        console.log(jUser)

        if(jUser.data.register.user) {
            
            setUserData(jUser.data.register.user)
            history.push('/')
        }
        else {
            //logs the error, next step to display it
            console.log(jUser.data.register.error.field)
        }
        
    }



    return (
        <div className="background">
            <NavigationBar />

            <div className="container form-container">

            
                <Form onSubmit = { event => { 
                    event.preventDefault();
                    handleRegister(event)
                } }>

                    <Form.Group>
                        <Form.Label className="formTag">Email: </Form.Label>
                        <Form.Control name="email" placeholder="Enter username: " />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="formTag">Password: </Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter password: " />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="formTag">First name: </Form.Label>
                        <Form.Control type="text" name="firstName" placeholder="First name:" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="formTag">Last name: </Form.Label>
                        <Form.Control type="text" name="lastName" placeholder="Last name: " />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="formTag">Username: </Form.Label>
                        <Form.Control type="text" name="username" placeholder="Username: " />
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