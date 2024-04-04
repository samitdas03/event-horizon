import Link from "next/link";
import Image from "next/image";
import {SignedIn, SignedOut, SignIn, UserButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import NavItems from "@/components/shared/NavItems";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg" width={128}
            height={38}
            alt="EventHorizon logo"
          />
        </Link>

        <SignedIn>
          <nav className="flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}
export default Header
