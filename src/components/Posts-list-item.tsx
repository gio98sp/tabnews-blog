import Link from "next/link";

import { IPosts } from "@/types/posts";

import { Text } from "@thonlabs/ui";

import { format } from "date-fns";

interface IPostsListItem {
  post: IPosts;
}

export const PostsListItem = ({ post }: IPostsListItem) => {
  return (
    <div className="rounded-xl border-l-[1px] border-gray-500 pl-3">
      <Link href={`/${post.owner_username}/${post.slug}`}>
        <div className="space-x-4">
          <Text variant="sm" className="text-gray-500">
            {post.owner_username}
          </Text>

          <Text variant="sm" className="text-gray-500">
            {`Postado em: ${format(new Date(post.published_at), "dd.MM.yyyy")}`}
          </Text>
        </div>

        <Text as="h2" variant="xl">
          {post.title}
        </Text>
      </Link>
    </div>
  );
};
