interface IPostProps {
  params: {
    username: string,
    slug: string
  }
}

export default async function Post({params}: IPostProps) {
  const [username, slug] = [params.username, params.slug]

  const res = await fetch(`${process.env.BASE_URL_TABNEWS}/contents/${username}/${slug}`)
  const post = await res.json()

  // console.log(post)

  return (
    <div>aaaaaaaaaa</div>
  )
}