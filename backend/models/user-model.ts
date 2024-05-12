import mongoose, {Schema} from "mongoose";

interface IUser{
  name: string;
  email: string;
  password: string;
  image?: string;
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
        minlength:[3, 'Name must be at least 3 characters long']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v: string) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: true,
        minlength:[6, 'Password must be at least 6 characters long']
    },
    image: {
        type: String,
        required: false
    }
})


export const UserModel = mongoose.models.users || mongoose.model<IUser>("users", userSchema);

