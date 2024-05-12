import { generateHash } from "@/app/utils/hasing";
import { findUserByEmail, registerUser } from "@/backend/queries/auth"
interface IUserData {
    fname: string;
    lname: string;
    email: string;
    password: string;
}

interface response {
    user?: any;
    error?: string;
    code?: number;
}


export const registerController = async (userData:IUserData): Promise<response> =>{
    try {
        const {fname, lname, email, password} = userData;

        const userExists = await findUserByEmail(email);

        if(userExists){
            return { error : "User already exists", code : 409};
        }

        const hashedPassword = await generateHash(password);

        const newUser = {
            name : `${fname} ${lname}`,
            email,
            password : hashedPassword
        }

        const res = await registerUser(newUser);
        return { user : res }

    } catch (err) {
        return { error : "Failed to register user", code : 500};
    }
}