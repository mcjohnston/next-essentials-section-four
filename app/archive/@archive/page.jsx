import { getAvailableNewsYears } from "@/lib/getNews";
import Link from "next/link";

const ArchivePage = () => {
  const yearLinks = getAvailableNewsYears();
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {yearLinks.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default ArchivePage;
