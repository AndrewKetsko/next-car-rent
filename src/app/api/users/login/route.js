import User from "@/models/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (email === "" || password === "") {
      throw new Error("Bad user data");
    }
    const user = await User.findOne({ email });
    if (!user) throw new Error("Bad user data");
    const hasRightPass = await bcrypt.compare(password, user.password);
    if (!hasRightPass) throw new Error("Bad user data");
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
