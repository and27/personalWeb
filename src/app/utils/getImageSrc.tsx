const getImageDataFromBlogPost = (blogPost: any) => {
  const img = blogPost?.fields?.image.fields.file;
  const imgWidth = img.details.image.width;
  const imgHeight = img.details.image.width;
  const imgSrc = `https:${img.url}`;
  const imgDescription = img.description;

  return {
    width: imgWidth,
    height: imgHeight,
    src: imgSrc,
    alt: imgDescription
  };
};
export default getImageDataFromBlogPost;
