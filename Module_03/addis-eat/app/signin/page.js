import { signIn } from "./actions";

export default async function SignInPage({ searchParams }) {
  const { next } = await searchParams;

  return (
    <main>
      <h1>Sign In</h1>
      <form action={signIn}>
        {/* Hidden input to carry the destination through the sign-in process */}
        <input type="hidden" name="next" value={next || ""} />
        
        <div>
          <label>Email (use staff@addis.com for staff access):</label>
          <input type="email" name="email" defaultValue="customer@addis.com" required />
        </div>
        
        <button type="submit" style={{ marginTop: "10px" }}>Sign In</button>
      </form>
    </main>
  );
}