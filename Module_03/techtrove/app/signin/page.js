import { signIn } from "./actions";

export const metadata = { title: "Sign In" };

export default async function SignInPage({ searchParams }) {
  const { next } = await searchParams;

  return (
    <main>
      <h1>Sign In</h1>
      <form action={signIn}>
        <input type="hidden" name="next" value={next || ""} />
        <div>
          <label>Email (use admin@techtrove.com for admin access):</label>
          <input type="email" name="email" defaultValue="customer@techtrove.com" required />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Sign In</button>
      </form>
    </main>
  );
}