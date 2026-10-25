import { cookies } from "next/headers";

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;
  
  if (!token) return null;
  
  try {
    // In production, you would verify a JWT signature here.
    // For this exercise, we decode a Base64 string.
    return JSON.parse(Buffer.from(token, "base64").toString("utf-8"));
  } catch (error) {
    return null;
  }
}