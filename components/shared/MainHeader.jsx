import Image from "next/image";
import LogoImage from "@/assets/logo.jpg";
import Link from "next/link";

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
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
