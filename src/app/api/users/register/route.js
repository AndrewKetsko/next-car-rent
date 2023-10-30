import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { name, email, password, avatar = "" } = await req.json();
    if (name === "" || email === "" || password === "") {
      throw new Error("Bad user data");
    }
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ message: "Already created" }, { status: 200 });
    }
    const hashedPass = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPass, avatar, favorite:[] });
    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
