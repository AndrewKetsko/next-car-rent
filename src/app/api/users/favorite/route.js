import User from "@/models/User";
import { getServerSession } from "next-auth";
import { nextConfig } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  try {
    const { id } = await req.json();
    const { user } = await getServerSession(nextConfig);

    const { favorite } = await User.findOne({ email: user.email });

    if (favorite.includes(id)) {
      favorite.splice(favorite.indexOf(id), 1);
    } else {
      favorite.push(id);
    }

    await User.findOneAndUpdate({ email: user.email }, { $set: { favorite } });
    return NextResponse.json({ message: "Favorites changed" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { user } = await getServerSession(nextConfig);

    const { favorite } = await User.findOne({ email: user.email });

    return NextResponse.json({ favorite }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
