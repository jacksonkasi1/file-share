import { UserButton, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignInButton />
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}