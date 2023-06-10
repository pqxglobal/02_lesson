import Image from 'next/image';
import Logo from '../public/html_logo_300x300.png';
import Carribean from '../public/caribbean.jpg';
import Vacation from '../public/vacation.jpg';

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-[2rem]">My Goals for the Year</h1>
        <nav aria-label="primary-navigation">
          <ul className="list-disc list-outside ms-8">
            <li>
              <a href="#html">Learning HTML</a>
            </li>
            <li>
              <a href="#vacation">Planning a Vacation</a>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <main>
        <article id="html">
          <h2 className="text-2xl">I&apos;m Ready to Learn HTML</h2>
          <p>This is my first web page.</p>
          <section>
            <h3>HTML5</h3>
            <Image
              src={Logo}
              alt="HTML5 logo"
              priority={true}
            />
            <figure>
              <figcaption>An example of HTML5 code</figcaption>
              <p>
                <code>&lt;h1&gt;Hello World!&lt;/h1&gt;</code>
              </p>
            </figure>
          </section>
          <section>
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
            <aside>
              <details>
                <summary>
                  Guess the <mark>number of hours</mark> I code per day
                </summary>
                <p>
                  I start at <time dateTime="08:00">8 am</time> and I write code for{' '}
                  <time dateTime="PT3H">3 hours</time> every morning.
                </p>
              </details>
            </aside>
            <br />
            <table>
              <caption>My Daily Schedule</caption>
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th scope="col">Time</th>
                  <th scope="col">Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Morning</th>
                  <td>
                    <time dateTime="08:00">8am</time>-<time dateTime="11:00">11am</time>
                  </td>
                  <td>Write Code</td>
                </tr>
                <tr>
                  <th scope="row">Break</th>
                  <td>
                    <time dateTime="11:00">11am</time>-<time dateTime="12:00">12pm</time>
                  </td>
                  <td>Eat Lunch</td>
                </tr>
                <tr>
                  <th scope="row">Afternoon</th>
                  <td>
                    <time dateTime="12:00">12pm</time>-<time dateTime="17:00">5pm</time>
                  </td>
                  <td>Study for Other Courses</td>
                </tr>
                <tr>
                  <th scope="row">Evening</th>
                  <td rowSpan={2}>All Other Times</td>
                  <td>Free Time</td>
                </tr>
                <tr>
                  <th scope="row">Night</th>
                  <td>Sleep</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3}>
                    And that&apos;s what I do every day, 5 days a week. Just eat, sleep, code ..and
                    recharge!
                  </td>
                </tr>
              </tfoot>
            </table>
          </section>
        </article>
        <hr />
        <article id="vacation">
          <h2 className="text-2xl">I Am Also Planning a Vacation</h2>
          <p>
            I&apos;ve been working hard and <em>really need a getaway</em>.
          </p>
          <p>
            I live in <abbr title="Kansas">KS</abbr> so I want visit a beach.
          </p>
          <section>
            <h3 className="text-[18.72px] text-[#333]">Places I like to visit</h3>
            <ul className="list-disc list-outside ms-8">
              <li>I&apos;ve heard good things about the caribbean.</li>
              <figure>
                <Image
                  src={Carribean}
                  alt="picture of the carribean beach"
                  priority={true}
                />
                <figcaption>Carribean Beach Getaway</figcaption>
              </figure>

              <li>
                I&apos;ve heard good things about going here:
                <address className="ml-5">
                  Margaritaville Island Reserve Riviera Cancún
                  <br />
                  Bahia Petempich Puerto Morelos, Mexico
                  <br />
                  Colonia Morelos, México 77580
                </address>
                <figure>
                  <Image
                    src={Vacation}
                    alt="Cancun vacation image"
                  />
                  <figcaption>A Carribean Vacation Image</figcaption>
                </figure>
              </li>
            </ul>
          </section>
          {/* TODO: Add more places */}
          <section>
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
        </article>
      </main>
      <hr />
      <footer>
        <p>
          &lt;&lt;&lt; &copy; <a href="/about">Dave Gray</a> &gt;&gt;&gt;
        </p>
        <p>
          <a href="#">Back to Top</a>
        </p>
      </footer>
    </>
  );
}
