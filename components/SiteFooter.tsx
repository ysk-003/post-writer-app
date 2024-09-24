import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="container py-10 md:py-0 md:h-20">
        <p className="text-center text-sm">
          Build by {""}
          <Link
            href={siteConfig.links.github}
            className="underline underline-offset-4 font-medium"
            target="_blank"
            rel="noreferrer"
          >
            ysk-003
          </Link>
          . Hosted on {""}
          <Link
            href={"https://vercel.com"}
            className="underline underline-offset-4 font-medium"
            target="_blank"
            rel="noreferrer"
          >
            Vercel
          </Link>
        </p>
      </div>
    </footer>
  );
}