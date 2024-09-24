"use client";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Icons } from "./Icons";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function UserAuthForm() {
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);

  return (
    <div className="grid gap-6">
      <form>
        <div className="grid gap-2">
          <div className="grid gap-3">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" placeholder="name@example.com" type="email" />
          </div>
          <button className={cn(buttonVariants())}>
            メールアドレスでログイン
          </button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="border-t w-full" />
        </div>
        <div className="relative flex justify-center items-center">
          <span className="text-muted-foreground bg-background px-2">
            または
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          className={cn(buttonVariants())}
          onClick={() => {
            setIsGithubLoading(true);
            signIn("github");
          }}
        >
          {isGithubLoading ? (
            <Icons.spinner className="mr-2 animate-spin" />
          ) : (
            <Icons.github className="mr-2" />
          )}
          Githubでログイン
        </button>

        <button
          className={cn(buttonVariants())}
          onClick={() => {
            setIsGoogleLoading(true);
            signIn("google");
          }}
        >
          {isGoogleLoading ? (
            <Icons.spinner className="mr-2 animate-spin" />
          ) : (
            <Icons.google className="mr-2" />
          )}
          Googleでログイン
        </button>
      </div>
    </div>
  );
}
