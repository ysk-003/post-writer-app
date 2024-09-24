import { siteConfig } from "@/config/site";
import { NavItem } from "@/types";
import Link from "next/link";

interface MobileNavProps {
  items: NavItem[];
}

export default function MobileNav({ items }: MobileNavProps) {
  return (
    <div className="fixed top-16 right-0 bottom-0 left-0 z-50 p-3 shadow-md md:hidden animate-in slide-in-from-left-80">
      <div className="grid gap-6 bg-white p-12 text-popover-foreground">
        <Link href={"/"} className="font-bold">
          {siteConfig.name}
        </Link>
        <nav className="text-sm flex flex-col gap-4">
          {items?.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
