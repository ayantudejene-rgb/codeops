"use client";

import { useFormStatus } from "react-dom";
import { signIn } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Signing in..." : "Sign In"}
    </button>
  );
}

export default function SignInForm({ next }) {
  return (
    <form action={signIn}>
      <input type="hidden" name="next" value={next || ""} />
      <div>
        <label>Email (use staff@addis.com for staff access):</label>
        <input type="email" name="email" defaultValue="customer@addis.com" required />
      </div>
      <SubmitButton />
    </form>
  );
}