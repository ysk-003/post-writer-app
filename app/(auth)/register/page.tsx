import { buttonVariants } from "@/components/ui/button";
import UserAuthForm from "@/components/User-auth-form";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Register() {
  return (
    <div className="container grid lg:grid-cols-2 h-screen w-screen lg:max-w-none lg:px-0">
      <Link
        href={"/login"}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-0 top-2"
        )}
      >
        ログイン
      </Link>
      <div className="h-full bg-muted lg:block hidden" />

      <div className="mx-auto w-full sm:w-[350px] flex flex-col justify-center space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            アカウントの作成
          </h1>
          <p className="text-sm text-muted-foreground">
            メールアドレスを入力してアカウントを作成してください。
          </p>
        </div>

        <UserAuthForm />

        <p className="text-muted-foreground px-8 text-center text-sm">
          続けてクリックすれば、私たちの
          <Link href={"/terms"} className="underline underline-offset-4">
            利用規約
          </Link>
          と
          <Link href={"/privacy"} className="underline underline-offset-4">
            プライバシポリシー
          </Link>
          に同意したこととなります。
        </p>
      </div>
    </div>
  );
}
