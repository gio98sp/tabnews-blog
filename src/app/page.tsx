import Link from "next/link";

import { IPosts } from "@/types/posts";

import { Text } from "@thonlabs/ui";

import { format } from "date-fns";
import { PostsListItem } from "@/components/Posts-list-item";

export default async function Home() {
  const postsResponse = await fetch(`${process.env.BASE_URL_TABNEWS}/contents`);
  const homePosts = (await postsResponse.json()) as IPosts[];

  return (
    <article className="h-[calc(100%-3.563rem)]">
      <header>
        <Text as="h1" variant="3xl lg:4xl" className="mb-7">
          Blog
        </Text>
      </header>

      <ul aria-label="Posts" className="w-full lg:w-[42rem]">
        {homePosts.map((post, index) => (
          <li key={index}>
            <PostsListItem post={post} />
          </li>
        ))}
      </ul>
    </article>
  );
}

{
  /* <Link href={`/${post.owner_username}/${post.slug}`}>

<div className="space-x-4">
  <Text variant="sm" className="text-gray-500">
    {post.owner_username}
  </Text>

  <Text variant="sm" className="text-gray-500">
    {`Postado em: ${format(
      new Date(post.published_at),
      "dd.MM.yyyy",
    )}`}
  </Text>
</div>

<Text as="h2" variant="2xl" className="mb-4">
  {post.title}
</Text>

</Link> */
}
