import SignInForm from "./SignInForm";

export const metadata = { title: "Sign In" };

export default async function SignInPage({ searchParams }) {
  const { next } = await searchParams;

  return (
    <main>
      <h1>Sign In</h1>
      <SignInForm next={next} />
    </main>
  );
}