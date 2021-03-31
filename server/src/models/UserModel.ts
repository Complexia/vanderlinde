import { User } from '../entities/User'
import * as argon2 from 'argon2'

export const UserModel = (): any => {
    
    const sayHello = () => {
        console.log("Hello workd");
    }

    const login = async (email: string, password: string) => {
        
        const user = await User.findOne({ email: email })
        
        if (!user) {
            return {
                error: {
                    field: "Email",
                    message: "User doesn't exist"
                }
            }
        }
        let match = await argon2.verify(user.password, password)
        
        if (!match) {
            return {
                error: {
                    field: "Password",
                    message: "Password is incorrect"
                }
            }
        }
        
        return { user }
    }

    //todo: pass an object as a parameter from resolvers instead of individual variables
    const register = async (email: string, clearPassword: string, firstName: string, lastName:string, username:string) => {
        
        let password = await argon2.hash(clearPassword)
        const user = User.create({
            email,
            password,
            firstName,
            lastName,
            username
        })

        if (!user) {
            return {
                error: {
                    field: "Registration",
                    message: "Something went wrong"
                }
            }
        }
        //user.password = hashedPassword
        await user.save()
        
        return { user }
        
    }

    return {
        sayHello: sayHello,
        login: login,
        register: register

    }
}