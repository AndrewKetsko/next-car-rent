import mongoose, { Schema, mongo } from "mongoose";

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;
const currentDate = new Date(Date.now());

const carSchema = new Schema({
  year: {
    type: Number,
    required: [true, "Year is required"],
    min: 1990,
    max: Number(currentDate.getFullYear()),
  },
  make: {
    type: String,
    required: [true, "Make is required"],
  },
  model: {
    type: String,
    required: [true, "Model is required"],
  },
  type: {
    type: String,
    required: [true, "Type is required"],
  },
  img: {
    type: String,
    required: [true, "Image link is required"],
  },
  description: {
    type: String,
    required: [true, "Some description is required"],
  },
  fuelConsumption: {
    type: Number,
  },
  engineSize: {
    type: String,
  },
  accessories: {
    type: Array,
  },
  functionalities: {
    type: Array,
  },
  rentalPrice: {
    type: String,
    required: [true, "Price in $ is required"],
  },
  rentalCompany: {
    type: String,
    required: [true, "Company name is required"],
  },
  address: {
    type: String,
  },
  rentalConditions: {
    type: String,
    default:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
  },
  mileage: {
    type: Number,
  },
});

const Car = mongoose.models.Car || mongoose.model("Car", carSchema);
export default Car;
