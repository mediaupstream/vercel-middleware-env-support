import { NextResponse } from 'next/server'

export default function (req) {
  console.log({ API_URL: process.env.API_URL })
  return NextResponse.next();
}
