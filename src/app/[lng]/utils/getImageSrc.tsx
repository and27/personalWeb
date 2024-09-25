const getImageDataFromBlogPost = (blogPost: any) => {
  const img = blogPost?.fields?.image.fields;
  const imgWidth = img.file?.details.image.width;
  const imgHeight = img.file?.details.image.width;
  const imgSrc = `https:${img.file?.url}`;
  const imgDescription = img.description;
  const imgTitle = img.title;

  return {
    width: imgWidth,
    height: imgHeight,
    src: imgSrc,
    alt: imgDescription,
    title: imgTitle
  };
};
export default getImageDataFromBlogPost;
