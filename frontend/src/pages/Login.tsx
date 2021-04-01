import NavigationBar from "../components/NavigationBar";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../stylesheets/forms.css'
import { ApolloClient, InMemoryCache, gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { useState } from "react";


function Login() {

    let uriLocal = "http://localhost:4000/graphql"
            const client = new ApolloClient({
                uri: uriLocal,
                cache: new InMemoryCache()
            });

    const loginUser = gql`
        mutation login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
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

    const [login, { data }] = useMutation(loginUser);
    const [userData, setUserData] = useState<any>("")
    const history = useHistory();

    //calls the GraphQL login mutation
    const returnUser = async (email: string, password: string) => {
        try {
            const returnedUser = await login({ variables: { email: email, password: password } })
            return returnedUser
        }
        catch {
            //return a more sensible error if connection to server fails
            return "error"
        }
        
        
    }

    

    //sets user data to state userData and redirects to homepage if login is successful
    //else logs the error to the console
    const handleLogin = async(e: any) => {
        
        let email = e.target.email.value
        let password = e.target.password.value
        
        
        const returnedUser = await returnUser(email, password)
        
        let jsonUser = JSON.stringify(returnedUser)
        
        let jUser = JSON.parse(jsonUser)

        if(jUser.data.login.user) {
            
            setUserData(jUser.data.login.user)
            history.push('/')
        }
        else {
            //logs the error, next step to display it
            console.log(jUser.data.login.error.field)
        }
        
        

        
    }

    
    return (
        <div className="background">
            <NavigationBar />

            <div className="container form-container">

            
                <Form onSubmit = { event => { 
                    event.preventDefault();
                    handleLogin(event)
                } }>

                    <Form.Group>
                        <Form.Label className="formTag">Username: </Form.Label>
                        <Form.Control name="email" placeholder="Enter email: " />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="formTag">Password: </Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter password: " />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>

            </div>

        </div>
    )
}

export default Login