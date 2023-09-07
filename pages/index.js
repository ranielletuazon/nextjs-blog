import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a University of the Assumption student!</p>

        <p>
        Hello, my name is Ranielle Adriane Tuazon, some and everybody calls me Rain. I’m an
        incoming 3 rd Year Student, nice to meet you po sir!
        </p>
        <p>
        My hobbies are mostly an average person what he should be like plays computer games,
        going outside and do basketball, and a simple vocalist from a band. I mostly listen to OPM
        and I do really like pop, or anything what people likes about a certain taste in music.
        Syempre my favorite food is what my grandmother always cooks whenever I come visit her
        and its “Giniling” with potatoes and carrots in it.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
