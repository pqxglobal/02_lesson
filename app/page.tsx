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
            <li>
              <a href="#contact">Contact Me</a>
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

        <hr />

        <article id="contact">
          <h2>Contact Me</h2>
          <p>I&apos;d really like to hear from you!</p>

          <form
            action="https://httpbin.org/get"
            method="get"
          >
            <fieldset className="border border-white border-solid m-3 p-3 rounded-md">
              <legend>Personal Info</legend>
              <p className="my-5">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Jane"
                  autoComplete="on"
                  required
                  autoFocus
                  className="text-black rounded-full ml-3 px-3 py-1"
                />
              </p>
              <p className="mb-5">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Doe"
                  autoComplete="on"
                  required
                  className="text-black rounded-full ml-3 px-3 py-1"
                />
              </p>
              <p className="mb-5">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="your secret"
                  required
                  className="text-black rounded-full ml-3 px-3 py-1"
                />
              </p>
              <p className="mb-5">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="5555555555"
                  required
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  className="text-black rounded-full ml-3 px-3 py-1"
                />
              </p>
              <p className="mb-5">
                <label htmlFor="decade">Favorite Decade:</label>
                <input
                  type="number"
                  name="decade"
                  id="decade"
                  min={1950}
                  max={2020}
                  step={10}
                  value={1980}
                  className="text-black rounded-full ml-3 px-3 py-1"
                />
              </p>
              <p className="mb-5">
                <label htmlFor="coffee">Favorite Coffee:</label>
                <select
                  name="coffee"
                  id="coffee"
                  multiple
                  size={5}
                  className="text-black rounded-md ml-3 p-2"
                >
                  <optgroup
                    
                    label="Coffees"
                  >
                    <option value="regular coffee">Regular Coffee</option>
                    <option value="iced coffee">Iced Coffee</option>
                  </optgroup>
                  <optgroup label="Espresso Drinks">
                    <option
                      value="latte"
                      selected
                    >
                      Latte
                    </option>
                    <option value="cappucino">Cappucino</option>
                    <option value="cortado">Cortado</option>
                    <option value="americano">Americano</option>
                  </optgroup>
                  <option value="other">Other</option>
                </select>
              </p>
              {/* <p className="mb-5">
              <label htmlFor="coffee">Favorite Coffee</label>
              <input
                type='text'
                name="coffee"
                id="coffee"
                list='coffee-list'
                className="text-black"
              />
              <datalist id='coffee-list'>
                <option value="coffee"/>
                <option value="latte"/>
                <option value="espresso"/>
                <option value="cortado"/>
                <option value="americano"/>
                <option value="other"/>
              </datalist>
            </p> */}
            </fieldset>
            <br />
            <fieldset>
              <legend>What is your favorite food?</legend>
              <p>
                <input type="radio" name="food" id='tacos' value="tacos" />
                <label htmlFor="tacos">Tacos</label>
              </p>
              <p>
                <input type="radio" name="food" id='pizza' value="pizza" />
                <label htmlFor="tacos">Pizza</label>
              </p>
              <p>
                <input type="radio" name="food" id='other' value="other" />
                <label htmlFor="tacos">Other</label>
              </p>
            </fieldset>
            <br />
            <fieldset>
              <legend>Do you have pets?</legend>
              <p>
                <input type="checkbox" name="pets" id="dog" value="dog" />
                <label htmlFor="dog">Dog</label>
              </p>
              <p>
                <input type="checkbox" name="pets" id="cat" value="cat" />
                <label htmlFor="cat">Cat</label>
              </p>
              <p>
                <input type="checkbox" name="pets" id="fish" value="fish" />
                <label htmlFor="fish">Fish</label>
              </p>
              <p>
                <input type="checkbox" name="pets" id="otherPet" value="otherPet" />
                <label htmlFor="otherPet">Other</label>
              </p>
            </fieldset>
            <br />
            <fieldset>
              <legend>Send Me A Note</legend>
              <label htmlFor="message">Your Message:</label>
              <br />
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Type your message here'></textarea>
            </fieldset>
            <br />
            <button type='submit'>Submit</button>
            <button type='submit' formAction="https://httpbin.org/post" formMethod='post'>Post</button>
            <button type="reset">Reset</button>
          </form>
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
