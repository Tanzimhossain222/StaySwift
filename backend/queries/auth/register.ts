import { dbConnect } from "@/backend/db/connectDb";
import { UserModel } from "@/backend/models/user-model";

interface IUserData {
    name: string;
    email: string;
    password: string;
}

export const registerUser = async (userData : IUserData)=>{
    try {
        await dbConnect();

       const user = await UserModel.create(userData);
         return user;
        
    } catch (err) {
        return err;
    }
}