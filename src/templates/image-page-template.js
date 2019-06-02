import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

export default function Template({ data }) {
  const { markdownRemark, sitePage } = data;
  return (
    <Layout>
      <div className="content">
        <div className="link-container">
          <div className="link">
            {sitePage.context.previous && (
              <Link to={sitePage.context.previous.fields.slug}>Назад</Link>
            )}
          </div>
          <div className="link">
            {sitePage.context.next && (
              <Link to={sitePage.context.next.fields.slug}>Вперед</Link>
            )}
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
    sitePage(path: { eq: $slug }) {
      context {
        next {
          fields {
            slug
          }
        }
        previous {
          fields {
            slug
          }
        }
      }
    }
  }
`;
