import Image from "next/image";
import LogoImage from "@/assets/logo.jpg";
import Link from "next/link";
import NavLink from "./NavLink";

export default function MainHeader() {
  return (
    <>
      <header id="main-header">
        <div id="logo">
          <Link href={"/"}>
            <Image
              src={LogoImage}
              width={LogoImage.width}
              alt="main logo image"
              priority
            />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <NavLink href="/news">News</NavLink>
            </li>
            <li>
              <NavLink href="/archive">Archives</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
