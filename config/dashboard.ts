import { DashboardConfig } from "@/types";

export const dashboardItems: DashboardConfig = {
  mainNav: [
    {
      title: "ドキュメント",
      href: "/docs",
    },
    {
      title: "サポート",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "記事投稿",
      href: "/dashboard",
      icon: "postAdd",
    },
    {
      title: "お支払い",
      href: "/dashboard/payment",
      icon: "payment",
    },
    {
      title: "設定",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ]
};
