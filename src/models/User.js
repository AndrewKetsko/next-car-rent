import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const emailRegexp =
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "UserName is required"],
  },

  email: {
    type: String,
    match: emailRegexp,
    required: [true, "Email is required"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Set password for user"],
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
