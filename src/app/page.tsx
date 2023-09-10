import { Text } from "@thonlabs/ui";

import { PostsListItem } from "@/components/Posts-list-item";

import { IPosts } from "@/types/posts";
import NotFound from "./not-found";
import Link from "next/link";

export default async function Home() {
  const res = await fetch(`${process.env.BLOG_BASE_URL}/contents`);
  const homePosts = (await res.json()) as IPosts[];

  return (
    <article className="h-[calc(100%-3.563rem)]">
      <header>
        <Text as="h1" variant="3xl lg:4xl" className="mb-8 w-full">
          <Link href='/'>Blog</Link>
        </Text>
      </header>

      <ul aria-label="Posts" className="w-full space-y-6 lg:max-w-[42rem]">
        {res.status == 200 ? (
          homePosts.map((post, index) => (
            <li key={index}>
              <PostsListItem post={post} />
            </li>
          ))
        ) : (
          <NotFound />
        )}
      </ul>
    </article>
  );
}
