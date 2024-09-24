import DashboardNav from "@/components/DashboardNav";
import MainNav from "@/components/MainNav";
import SiteFooter from "@/components/SiteFooter";
import { dashboardItems } from "@/config/dashboard";
import { ReactNode } from "react";

export default function EditorLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto grid items-center gap-10 py-8">
      {children}
    </div>
  );
}
