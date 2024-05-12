import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import Logout from "./auth/Logout";

interface NavbarProps {
  sideMenu: boolean;
}

const Navbar = async ({ sideMenu = true }: NavbarProps) => {
  const session = await auth();
  return (
    <nav>
      <Link href="/">
        <Image
          src="/stayswift.svg"
          alt="Stay Swift Logo"
          width={200}
          height={200}
        />
      </Link>
      <ul>
        <li>
          <Link href="#">About Us</Link>
        </li>

        <li>
          <Link href="#">Contact us</Link>
        </li>

        {sideMenu && (
          <>
            <li>
              <Link href="#">Recommended Places</Link>
            </li>

            <li>
              <Link href="/bookings">Bookings</Link>
            </li>

            <li>
              {session && session?.user ? (
                <div>
                  <span className="mx-1"> {session?.user?.name} </span>
                  <span> | </span>
                  <Logout />
                </div>
              ) : (
                <Link href="/login" className="login">
                  Login
                </Link>
              )}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
