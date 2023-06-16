import client from './contentful';

export async function getContentfulData(
  contentType: string,
  page: number,
  itemsPerPage: number
) {
  const alreadyFetched = (page - 1) * itemsPerPage; //pages start at 1
  const entries = await client.getEntries({
    content_type: contentType,
    skip: alreadyFetched,
    limit: itemsPerPage
  });

  return entries.items;
}

export default getContentfulData;
