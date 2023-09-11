import { IPosts } from "@/types/posts";

import { RenderMarkdown, Text } from "@thonlabs/ui";

import { format } from "date-fns";
import NotFound from "../not-found";
import Link from "next/link";

interface IPostDetailsProps {
  params: {
    slug: [string, string];
  };
}

export default async function PostDetails({ params }: IPostDetailsProps) {
  const [username, slug] = params.slug;

  const res = await fetch(
    `${process.env.BLOG_BASE_URL}/contents/${username}/${slug}`,
  );
  const post = (await res.json()) as IPosts;

  return (
    <>
      {res.status == 200 ? (
        <div>
          <div className="flex items-center gap-6 justify-between">
            <Link
              href="/"
              className="rounded-md bg-gray-200 px-2 py-1 font-semibold hover:bg-gray-300"
            >
              Voltar
            </Link>

            <span className="space-x-4 flex flex-wrap">
              <Text variant="sm" className="text-gray-500">
                {post.owner_username}
              </Text>
              <Text variant="sm" className="text-gray-500">
                {`Postado em: ${format(
                  new Date(post.published_at),
                  "dd.MM.yyyy",
                )}`}
              </Text>
            </span>
          </div>

          <Text as="h1" variant="2xl" className="my-6">
            {post.title}
          </Text>

          <section>
            <RenderMarkdown value={post.body || ""} />
          </section>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
