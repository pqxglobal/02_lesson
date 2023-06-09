export const metadata = {
  title: 'About Me',
  description: 'Hi, I&apos;m Dave Gray. This page is about me.',
};

const About = () => {
  return (
    <>
      <h1>Hi, I&apos;m Dave Gray</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, voluptate. Repellendus
        asperiores quam, libero quod nihil beatae aperiam assumenda necessitatibus dolore fuga,
        corrupti aliquid. Libero atque dolor aliquid architecto laboriosam!
      </p>
      <hr />
      <ul className="list-disc list-outside ms-8">
        <li>
          Download an{' '}
          <a
            href={require('../../public/html5.png')}
            download={'html5.png'}
          >
            HTML favicon
          </a>
        </li>
      </ul>
      <hr />
      &lt;&lt;&lt; &copy; <a href="/about">Dave Gray</a> &gt;&gt;&gt;
    </>
  );
};

export default About;
