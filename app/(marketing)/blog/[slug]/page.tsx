import { allPosts } from "@/.contentlayer/generated";
import Mdx from "@/components/Mdx-component";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getPostFromSlug(slug: string) {
  const detailPost = allPosts.find((post) => post.slugAsParams === slug);

  return detailPost;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) : Promise<Metadata> {
  const page = await getPostFromSlug( params.slug );
  
  if ( !page ) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      type: "article",
      locale: "ja",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [`${siteConfig.url}/og.jpg`],
      creator: "@ysk-003",
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const detailPost = await getPostFromSlug(slug);

  if (!detailPost) {
    notFound();
  }

  return (
    <article className="container max-w-3xl py-6 lg:py-10">
      <div>
        {detailPost.date && (
          <time>published on {format(detailPost.date, "yyyy/MM/dd")}</time>
        )}
        <h1 className="mt-2 font-extrabold text-4xl lg:text-5xl leading-tight">
          {detailPost.title}
        </h1>
      </div>
      {detailPost.image && (
        <Image
          src={detailPost.image}
          alt={detailPost.title}
          width={720}
          height={405}
          className="border rounded-md bg-muted my-8"
        />
      )}
      <Mdx code={detailPost.body.code} />
      <hr className="mt-12" />
      <div className="py-6 text-center lg:py-10">
        <Link
          href={"/blog"}
          className={cn(buttonVariants({ variant: "default" }))}
        >
          全ての記事を見る
        </Link>
      </div>
    </article>
  );
}
