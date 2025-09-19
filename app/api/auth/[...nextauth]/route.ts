// NextAuth route - currently using custom AuthContext
// This file is kept for future NextAuth integration

export async function GET() {
  return new Response('NextAuth not configured', { status: 501 })
}

export async function POST() {
  return new Response('NextAuth not configured', { status: 501 })
}
