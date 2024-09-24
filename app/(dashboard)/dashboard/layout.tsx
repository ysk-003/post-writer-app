import DashboardNav from "@/components/DashboardNav";
import MainNav from "@/components/MainNav";
import SiteFooter from "@/components/SiteFooter";
import { dashboardItems } from "@/config/dashboard";
import { ReactNode } from "react";

export default function DashBoardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container flex flex-col min-h-screen space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="flex items-center justify-between py-6 h-20">
          <MainNav items={dashboardItems.mainNav} />
        </div>
      </header>
      <div className="grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden md:flex flex-col w-[200px]">
          <DashboardNav items={dashboardItems.sidebarNav} />
        </aside>
        <main className="flex flex-col flex-1 w-full overflow-hidden">
          {children}
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
