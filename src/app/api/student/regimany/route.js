import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//Insert

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    let reqBody = await req.json();
    //console.log(reqBody);
    let result = await prisma.students.createMany({ data: reqBody });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
