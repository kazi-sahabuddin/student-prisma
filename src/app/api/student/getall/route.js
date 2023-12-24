import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//show all data of student

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();

    let result = await prisma.students.findMany();

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
