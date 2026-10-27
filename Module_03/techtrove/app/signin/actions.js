"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn(formData) {
  const email = formData.get("email");
  const user = email === "admin@techtrove.com"
    ? { id: "usr_admin", name: "Admin", role: "admin" }
    : { id: "usr_1", name: "Customer", role: "customer" };

  const token = Buffer.from(JSON.stringify(user)).toString("base64");
  const cookieStore = await cookies();
  
  cookieStore.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });

  const next = formData.get("next");
  if (next && typeof next === "string" && next.startsWith("/")) redirect(next);
  redirect("/");
}