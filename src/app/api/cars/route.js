import Car from "@/models/Car";
import { NextResponse } from "next/server";

export async function GET() {
  try {
      const cars = await Car.find();

    return NextResponse.json({ cars }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
