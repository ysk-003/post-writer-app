"use client";

import { Post } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Icons } from "./Icons";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

async function deletePost(postId: string) {
  try {
    const response = await fetch(`/api/posts/${postId}`, { method: "DELETE" });

    if (!response.ok) {
      throw new Error("Failed");
    }

    return true;
  } catch (err) {
    toast({
      title: "問題が発生しました。",
      description:
        "記事の削除ができませんでした。しばらく経ってから、もう一度お試しください。",
      variant: "destructive",
    });
  }
}

interface PostOperationsProps {
  post: Pick<Post, "id" | "title">;
}

export default function PostOperations({ post }: PostOperationsProps) {
  const router = useRouter();
  const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Icons.ellipsis className="w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href={"/editor/ ${post.id}"} className="w-full">
              編集
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer text-destructive focus:text-destructive"
            onClick={() => setShowDeleteAlert(true)}
          >
            削除
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              本当にこの記事を削除してよろしいですか？
            </AlertDialogTitle>
            <AlertDialogDescription>
              この操作は後から取り消しができません。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>キャンセル</AlertDialogCancel>
            <AlertDialogAction
              onClick={async (e) => {
                e.preventDefault();
                setIsDeleteLoading(true);
                const deleted = await deletePost(post.id);

                if (deleted) {
                  setShowDeleteAlert(false);
                  setIsDeleteLoading(false);
                  router.refresh();
                }
              }}
              className="bg-red-600 focus:ring-red-600"
            >
              {isDeleteLoading ? (
                <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Icons.delete className="w-4 h-4 mr-2" />
              )}
              削除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
