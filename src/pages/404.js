import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Страница не найдена" />
    <h1>404: Страница не найдена</h1>
    <Link to="/">Главная</Link>
  </Layout>
);

export default NotFoundPage;
