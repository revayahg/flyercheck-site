const baseUrl = "https://www.flyercheck.io";
const defaultImage = "https://www.flyercheck.io/favicon-512.png";

function toIsoDate(post) {
  if (post.publishedAt) return post.publishedAt;
  if (post.date) {
    const parsed = new Date(post.date);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString().slice(0, 10);
    }
  }
  return undefined;
}

export function buildArticleSchema(post) {
  if (!post?.slug) return null;

  const datePublished = toIsoDate(post);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "FlyerCheck",
      logo: {
        "@type": "ImageObject",
        url: defaultImage,
      },
    },
    url: `${baseUrl}/blog/${post.slug}`,
    image: defaultImage,
  };

  if (datePublished) {
    schema.datePublished = datePublished;
    schema.dateModified = post.dateModified ?? datePublished;
  }

  return schema;
}
