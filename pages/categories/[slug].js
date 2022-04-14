import { gql, GraphQLClient } from 'graphql-request';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import styles from './Categories.module.scss';

export const getServerSideProps = async (context) => {
  const pageSlug = context.query.slug;

  const url = process.env.API_CONTENT_URL;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_TOKEN,
    },
  });

  const query = gql`
    query ($pageSlug: String!) {
      problems(where: { categorySlug: $pageSlug }) {
        title
        description
        slug
        categorySlug
        mode
        color {
          hex
        }
      }
    }
  `;

  // @ts-ignore
  const vars = {
    pageSlug,
  };

  const data = await graphQLClient.request(query, vars);
  const problems = data.problems;

  return {
    props: { problems },
  };
};

const Category = ({ problems }) => {
  if (problems.length === 0) {
    return (
      <>
        <Navbar />
        <main>
          <h1>Looks like there is no 'Problems' yet</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <h1>Problems</h1>
        <div className={styles.problems}>
          {problems.map((problem) => {
            return (
              <div className={styles.problem} key={problem.slug}>
                <Link href={`/problem/${problem.categorySlug}/${problem.slug}`}>
                  <a>
                    <h2>{problem.title}</h2>
                  </a>
                </Link>
                <p>{problem.description}</p>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Category;
