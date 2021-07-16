type PostAuthor = {
  id: number
  name: string
  createdBy: number
  updatedBy: number
  createdAt: string
  updatedAt: string
}

type PostCategory = {
  id: number
  name: string
  createdBy: number
  updatedBy: number
  createdAt: string
  updatedAt: string
}

type PostCreatedBy = {
  id: number
  firstname: string
  lastname: string
  username: null
}

type PostCoverFormat = {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path?: null
  size: number
  width: number
  height: number
  provider_metadata: {
    public_id: string
    resource_type: string
  }
}

type PostCover = PostCoverFormat & {
  id: number
  alternativeText: string
  caption: string
  previewUrl: null
  provider: string
  createdBy: string
  updatedBy: string
  createdAt: string
  updatedAt: string
  formats: {
    thumbnail: PostCoverFormat
    small: PostCoverFormat
    medium: PostCoverFormat
    large: PostCoverFormat
  }
}

export type PostData = {
  id: number
  title: string
  content: string
  slug: string
  author: PostAuthor
  category: PostCategory
  cover: PostCover
  createdBy: PostCreatedBy
  updatedBy: PostCreatedBy
  createdAt: string
  updatedAt: string
}
