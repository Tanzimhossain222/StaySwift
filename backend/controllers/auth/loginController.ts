import { modifyObjData } from "@/app/utils/data-utils";
import { hashMatched } from "@/app/utils/hasing";
import { findUserByEmail } from "@/backend/queries/auth";


type ICredentials = {
    email: string;
    password: string;
}

export const loginController = async (credentials :ICredentials)=>{
    try {
        const user = await findUserByEmail(credentials.email);
        
        if (user) {
            const isMatch =  await hashMatched(credentials.password, user.password);
            
            if (isMatch) {
                return modifyObjData(user._doc);
            } else {
                throw new Error("Invalid credentials");
            }
        } else {
            throw new Error("No user found");
        }
    } catch (err) {  
        throw  new Error(err as string);
    }
    
}