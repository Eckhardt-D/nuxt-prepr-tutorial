  import { type GqlGetBlogs } from '#gql'

  type Blogs = NonNullable<(Awaited<ReturnType<typeof GqlGetBlogs>>)['Blogs']>
  type Items = NonNullable<Blogs['items']>

  export type Blog = Items[number]
