import React, { Component } from 'react';

// import 'es6-promise';
// import 'isomorphic-fetch';

// import Layout from '../components/MyLayout';
// import Author from '../components/Author';
import Head from 'next/head';

const ArticleHead = () => (
  <Head>
    <title>New title of article</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);

export default () => <div>Article example</div>;

// Article Example:
// =================

// export default class Article extends Component {
//   static async getInitialProps() {
//     const res = await fetch(
//       'http://localhost/wp-json/wp/v2/articles/1316999'
//     );
//     const json = await res.json();
//     const authorRes = await fetch(
//       'http://localhost/wp-json/wp/v2/users/3373'
//     );
//     const authorJson = await authorRes.json();
//     const articleBySlug = await fetch(articleBySlugUrl, {
//       headers: {
//         Authorization: authKey
//       }
//     });
//     const slugJson = await articleBySlug.json();
//     console.log('slugJson', slugJson);
//     return {
//       articleContent: json.content.rendered,
//       authorData: authorJson
//     };
//   }
//   render() {
//     const { articleContent, authorData } = this.props;
//     const authorProps = {
//       name: authorData.name,
//       image: authorData.avatar_urls
//     };
//     return (
//       <Layout>
//         <ArticleHead />
//         <h1>article Data should be here</h1>
//         <Author {...authorProps} />
//         <div dangerouslySetInnerHTML={{ __html: articleContent }} />
//       </Layout>
//     );
//   }
// }
