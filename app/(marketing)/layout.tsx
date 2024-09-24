import MainNav from "@/components/MainNav";
import SiteFooter from "@/components/SiteFooter";
import { buttonVariants } from "@/components/ui/button";
import { marketingItems } from "@/config/marketing";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="sticky top-0 container z-40 bg-background">
        <div className="h-20 py-6 flex items-center justify-between">
          <MainNav items={marketingItems.mainNav} />
          <nav>
            <Link
              href={"/login"}
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              ログイン
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
