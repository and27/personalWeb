import client from './contentful';

interface IGetRelatedPosts {
  maxItems: number;
  currentPost: string;
}

interface IGetPosts {
  page: number;
  itemsPerPage: number;
}

export async function getRelatedPosts({ maxItems, currentPost }: IGetRelatedPosts) {
  const entries = await client.getEntries({
    'fields.slug[ne]': currentPost,
    'fields.date[lte]': new Date(),
    content_type: 'blogPost',
    limit: maxItems
  });

  return entries.items;
}

async function getPosts({ page, itemsPerPage }: IGetPosts) {
  const alreadyFetched = (page - 1) * itemsPerPage; //pages start at 1
  const entries = await client.getEntries({
    'fields.date[lte]': new Date(),
    content_type: 'blogPost',
    skip: alreadyFetched,
    limit: itemsPerPage
  });

  return entries.items;
}

export async function getBlogPostBySlug(slug: string) {
  const response = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug
  });
  return response.items[0];
}

export default getPosts;
