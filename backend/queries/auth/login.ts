import { dbConnect } from "@/backend/db/connectDb";
import { UserModel } from "@/backend/models/user-model";

export const findUserByEmail = async (email: string) => {
  await dbConnect();
  try {
    const user = await UserModel.findOne({ email: email });
    return user;
  } catch (err) {
    throw new Error((err as Error).toString());
  }
};


export type IUser = {
    id: string;
    name: string;
    email: string;
    image?: string;
}

export const getUser = async (email: string) : Promise<IUser> =>{

  if (!email) {
    throw new Error("Email is required");
  }

  try {
    let user = await findUserByEmail(email);

    const res : IUser = {
      id: user?._id.toString(),
      name: user?.name,
      email: user?.email,
      image: user?.image || "",
    };

    return res;
  } catch (err) {
    throw new Error((err as Error).toString());
  }
};
