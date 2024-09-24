import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link
            href={siteConfig.links.x}
            className="bg-muted px-4 y-1.5 rounded-2xl font-medium text-sm"
          >
            Xをフォローする
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Post Writer
          </h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            このアプリケーションは、Next.js にて作成されています。
            <br />
            ユーザーは自由にポストを投稿できます。
          </p>
          <div className="space-x-4">
            <Link
              href={"/login"}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              はじめる
            </Link>
            <Link
              href={siteConfig.links.github}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container py-8 md:py-12 lg:py-24 bg-slate-50 space-y-8"
      >
        <div className="text-center space-y-6 max-w-[58rem] mx-auto">
          <h2 className="font-extrabold text-3xl md:text-6xl">
            サービスの特徴
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            このプロジェクトは、モダンな技術スタックを使用して作られています。
            <br />
            Next.js App Routerや contetlayer
            を利用して、マークダウン形式でブログ投稿が可能です。
          </p>
        </div>

        <div className="mx-auto grid grid-cols sm:grid-cols-2  md:grid-cols-3 gap-4 max-w-[54rem]">
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
              >
                <path
                  fill="currentColor"
                  d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096a64 64 0 0 0 .111-.096"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter / Layouts / APIRoutes の技術を使用{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
              >
                <path
                  fill="currentColor"
                  d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096a64 64 0 0 0 .111-.096"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter / Layouts / APIRoutes の技術を使用{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
              >
                <path
                  fill="currentColor"
                  d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096a64 64 0 0 0 .111-.096"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter / Layouts / APIRoutes の技術を使用{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
              >
                <path
                  fill="currentColor"
                  d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096a64 64 0 0 0 .111-.096"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter / Layouts / APIRoutes の技術を使用{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
              >
                <path
                  fill="currentColor"
                  d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096a64 64 0 0 0 .111-.096"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter / Layouts / APIRoutes の技術を使用{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
              >
                <path
                  fill="currentColor"
                  d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096a64 64 0 0 0 .111-.096"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter / Layouts / APIRoutes の技術を使用{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:max-w-[58rem] mx-auto text-center">
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            Post Writerは、ログイン後、ブログ投稿ができるようになります。
          </p>
        </div>
      </section>

      <section id="contact" className="container py-8 md:py-12 lg:py-24">
        <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4">
          <h2 className="font-extrabold text-3xl md:text-6xl">Contact Me</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            このWebサービスが気に入った方は、こちらからご連絡ください。
            <br />
            お仕事のご連絡お待ちしております。
          </p>
          <Link
            href={siteConfig.links.x}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            お仕事の依頼はこちらまで
          </Link>
        </div>
      </section>
    </>
  );
}
