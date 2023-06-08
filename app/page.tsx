export default function Home() {
  return (
    <>
      <h1 className="text-[2rem]">Hello World!</h1>
      <hr />
      <h2 className="text-2xl">I&apos;m Ready to Learn HTML</h2>
      <p>This is my first web page.</p>
      <h3 className="text-[18.72px]">My Daily Schedule</h3>
      <p>
        Let me tell you how:
        <br />
        &nbsp;&nbsp;&nbsp;...I learn more about web dev.
        <br />
        &nbsp;&nbsp;&nbsp; ...I plan out my schedule.
        <br />
        &nbsp;&nbsp;&nbsp; ...I use resources from{' '}
        <abbr title="Mozilla Developer Network">MDN</abbr>.
      </p>
      <hr />
      <h2 className="text-2xl">I Am Also Planning a Vacation</h2>
      <p>
        I&apos;ve been working hard and <em>really need a getaway</em>.
      </p>
      <p>
        I live in <abbr title="Kansas">KS</abbr> so I want visit a beach.
      </p>
      <h3 className="text-[18.72px]">Places I like to visit</h3>
      <p>I&apos;ve heard good things about the caribbean.</p>
      <p>I&apos;ve heard good things about going here:</p>
      <address>
        Margaritaville Island Reserve Riviera Cancún<br/>
        Bahia Petempich Puerto Morelos, Mexico<br/>
        Colonia Morelos, México 77580
      </address>

      {/* TODO: Add more places */}
      <h3 className="text-[18.72px]">Places I want to avoid</h3>
      <p>
        Anywhere cold. <strong>No way!</strong>.
      </p>
      <hr />
      &lt;&lt;&lt; &copy; Dave Gray &gt;&gt;&gt;
    </>
  );
}
