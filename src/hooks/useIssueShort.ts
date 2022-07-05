import { gql, GraphQLClient } from 'graphql-request';

export const useIssueShort = (pageSlug: string | string[]) => {
  const graphQLClient = new GraphQLClient(process.env.API_CONTENT_URL, {
    headers: {
      Authorization: process.env.GRAPH_TOKEN,
    },
  });

  const useIssueShortQuery = gql`
    query ($pageSlug: String!) {
      improvements(where: { categorySlug: $pageSlug }) {
        title
        description
        slug
        categorySlug
        date
      }
    }
  `;

  const vars = {
    pageSlug,
  };

  return graphQLClient.request(useIssueShortQuery, vars);
};
