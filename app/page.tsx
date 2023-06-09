export default function Home() {
  return (
    <>
      <h1 className="text-[2rem]">My Goals for the Year</h1>
      <hr />
      <nav>
        <ul className="list-disc list-outside ms-8">
          <li>
            <a href="#html">Learning HTML</a>
          </li>
          <li>
            <a href="#vacation">Planning a Vacation</a>
          </li>
        </ul>
      </nav>
      <hr />
      <section id="html">
        <h2 className="text-2xl">I&apos;m Ready to Learn HTML</h2>
        <p>This is my first web page.</p>
        <h3 className="text-[18.72px]">My Daily Schedule</h3>
        <p>Let me tell you how:</p>
        <ol className="list-decimal list-inside">
          <li>...I learn more about web dev.</li>
          <li>...I plan out my schedule.</li>
          <li>
            ...I use resources from{' '}
            <abbr title="Mozilla Developer Network">
              <a href="https://developer.mozilla.org/">MDN</a>
            </abbr>
            .
          </li>
        </ol>
      </section>
      <hr />
      <section id="vacation">
        <h2 className="text-2xl">I Am Also Planning a Vacation</h2>
        <p>
          I&apos;ve been working hard and <em>really need a getaway</em>.
        </p>
        <p>
          I live in <abbr title="Kansas">KS</abbr> so I want visit a beach.
        </p>
        <h3 className="text-[18.72px] text-[#333]">Places I like to visit</h3>
        <ul className="list-disc list-outside ms-8">
          <li>I&apos;ve heard good things about the caribbean.</li>
          <li>
            I&apos;ve heard good things about going here:
            <address className="ml-5">
              Margaritaville Island Reserve Riviera Cancún
              <br />
              Bahia Petempich Puerto Morelos, Mexico
              <br />
              Colonia Morelos, México 77580
            </address>
          </li>
        </ul>
        {/* TODO: Add more places */}
        <h3 className="text-[18.72px]">Places I want to avoid</h3>
        <dl className="mt-3">
          <dt>North Pole</dt>
          <dd>
            I hear this is <strong>cold</strong>!
          </dd>

          <dt>South Pole</dt>
          <dd>This is also cold.</dd>

          <dt>Mountain Tops</dt>
          <dd>These are also cold.</dd>
        </dl>
      </section>
      <hr />
      &lt;&lt;&lt; &copy; <a href="/about">Dave Gray</a> &gt;&gt;&gt;
      <p>
        <a href="#">Back to Top</a>
      </p>
    </>
  );
}
