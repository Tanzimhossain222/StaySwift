import { dbConnect } from "@/backend/db/connectDb";
import { UserModel } from "@/backend/models/user-model";

export const findUserByEmail = async (email: string) => {
    await  dbConnect();
    try {
        const user = await UserModel.findOne({ email: email });
        return user;
    } catch (err) {
        throw new Error((err as Error).toString());
    }
}