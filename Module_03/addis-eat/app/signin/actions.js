"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn(formData) {
  const email = formData.get("email");
  
  // Mock authentication: just assign a user based on the email
  const user = email === "staff@addis.com" 
    ? { id: "usr_2", name: "Staff Member", role: "staff" }
    : { id: "usr_1", name: "Almaz", role: "customer" };

  // Create a mock token (Base64 JSON)
  const token = Buffer.from(JSON.stringify(user)).toString("base64");

  const cookieStore = await cookies();
  cookieStore.set("session", token, {
    httpOnly: true, // Prevents JS access
    secure: process.env.NODE_ENV === "production", // HTTPS only in production
    sameSite: "lax", // CSRF protection
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  // Handle the "next" parameter securely
  const next = formData.get("next");
  
  // SECURITY CHECK: Reject absolute URLs (Open Redirect prevention)
  if (next && typeof next === "string" && next.startsWith("/")) {
    redirect(next);
  }
  
  redirect("/");
}