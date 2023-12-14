import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { data: string } }
) {
  const searchQuery = { question: params.data };
  const req = await fetch("http://127.0.0.1:5000/api/search", {
    method: "post",
    body: JSON.stringify(searchQuery),
    headers: { "Content-Type": "application/json" },
  });

  console.log(searchQuery);

  const res = await req.json();

  return NextResponse.json(res, { status: 200 });
}
