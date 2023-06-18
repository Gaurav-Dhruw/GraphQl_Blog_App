import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              name
              id
              bio
            }
            slug
            title
            excerpt
            createdAt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
            readTime
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(where:{featured:true}) {
        featuredImage {
          url
        }
        categories{
          name
          slug
        }
        createdAt
        slug
        title
        excerpt
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(orderBy: createdAt_DESC, first: 3) {
        featuredImage {
          url
        }
        createdAt
        slug
        title
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: { slug_not: $slug, categories_some: { slug_in: $categories } }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.categories;
};

export const getFilteredTag = async (slug) => {
  const query = gql`
    query GetCategory($slug: String!) {
      category(where: { slug: $slug }) {
        name
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.category;
};

export async function getPostDetails(slug) {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
          socialMedia {
            url
          }
        }
        createdAt
        slug
        readTime
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.post;
}

export async function getCategorisedPosts(slug) {
  const query = gql`
    query GetPostDetails($slug: String!) {
      posts(where: { categories_some: { slug: $slug } }) {
        categories {
          name
          slug
        }
        excerpt
        createdAt
        featuredImage {
          url
        }
        slug
        title
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.posts;
}

export async function postComment(data) {
  const result = await fetch("/api/comments", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return result.json();
}

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(
        orderBy: createdAt_DESC
        first: 15
        where: { post: { slug: $slug } }
      ) {
        name
        comment
        createdAt
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.comments;
};
