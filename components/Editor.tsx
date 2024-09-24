"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import TextareaAutosize from "react-textarea-autosize";
import EditorJS from "@editorjs/editorjs";
import { useCallback, useEffect, useRef, useState } from "react";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Checklist from "@editorjs/checklist";
import Quote from "@editorjs/quote";
import ImageTool from "@editorjs/image";
import LinkTool from "@editorjs/link";
import Code from "@editorjs/code";
import { Post } from "@prisma/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postPatchSchema, postPatchSchemaType } from "@/lib/validations/post";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Icons } from "./Icons";

interface EditorProps {
  post: Pick<Post, "id" | "title" | "content" | "published">;
}

export default function Editor({ post }: EditorProps) {
  const ref = useRef<EditorJS>();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const initializeEditor = useCallback(async () => {
    const body = postPatchSchema.parse(post);

    const editor = new EditorJS({
      holder: "editor",
      onReady() {
        ref.current = editor;
      },
      placeholder: "ここに記事を書く",
      inlineToolbar: true,
      data: body.content,
      tools: {
        header: Header,
        list: List,
        checkList: Checklist,
        quote: Quote,
        image: ImageTool,
        link: LinkTool,
        code: Code,
      },
    });
  }, [post]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      initializeEditor();
    }

    return () => {
      ref.current?.destroy();
      ref.current = undefined;
    };
  }, [isMounted, initializeEditor]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<postPatchSchemaType>({
    resolver: zodResolver(postPatchSchema),
  });

  const onSubmit = async (data: postPatchSchemaType) => {
    setIsSaving(true);
    const blocks = await ref.current?.save();

    const response = await fetch(`/api/posts/${post.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        content: blocks,
      }),
    });

    setIsSaving(false);

    if (!response.ok) {
      return toast({
        title: "問題が発生しました。",
        description:
          "正常に記事が保存されませんでした。しばらくしてからもう一度お試しください。",
        variant: "destructive",
      });
    }

    router.refresh();

    return toast({
      description: "記事が正常に保存されました。",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-10 w-full">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link href={"/dashboard"} className={cn(buttonVariants())}>
              戻る
            </Link>
            <p className="text-sm text-muted-foreground">公開</p>
          </div>
          <button className={ cn( buttonVariants() ) } type="submit">
            {isSaving && <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />}
            <span>保存</span>
          </button>
        </div>
        <div className="w-[800px] mx-auto">
          <TextareaAutosize
            id="title"
            defaultValue={post.title}
            placeholder="Post Title"
            autoFocus
            className="w-full resize-none overflow-hidden bg-transparent text-3xl focus:outline-none font-bold"
            {...register("title")}
          />
        </div>
        <div id="editor" className="min-h-[500px]" />
        <p className="text-sm text-gray-500">
          Use
          <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
            tab
          </kbd>
          to open the command menu
        </p>
      </div>
    </form>
  );
}
