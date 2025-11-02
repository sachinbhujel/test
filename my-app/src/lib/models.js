import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        text: String,
        date: Number,
        token: String,
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
