import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//Insert

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    let reqBody = await req.json();
    let result = await prisma.students.create({ data: reqBody });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

//Delete

export async function DELETE(req, res) {
  try {
    const prisma = new PrismaClient();
    let sid = await req.nextUrl.searchParams.get("id");
    //console.log(Number(sid));
    let result = await prisma.students.delete({
      where: {
        id: Number(sid),
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

//UPDATE

export async function PUT(req, res) {
  try {
    const prisma = new PrismaClient();
    let reqBody = await req.json();
    let result = await prisma.students.update({
      where: {
        id: reqBody.id,
      },
      data: {
        grade: reqBody.grade,
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

//show data of student

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    let sid = await req.nextUrl.searchParams.get("id");
    //console.log(sid);
    let result = await prisma.students.findUnique({
      where: {
        id: Number(sid),
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
