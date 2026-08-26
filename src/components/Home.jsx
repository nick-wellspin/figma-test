import avatar from '../assets/avatar.png'
import './Home.css'

// Labels come from Figma nodes 3:30 / 3:38 / 3:40. The frame carries no
// link targets, so the hrefs are placeholders — fill them in.
const LINKS = [
  { label: 'Resume', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Email', href: '#' },
]

function Home() {
  return (
    <main className="home">
      <nav className="home__nav" aria-label="Profile links">
        <ul className="home__links">
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a className="home__link" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="home__intro">
        <img
          className="home__avatar"
          src={avatar}
          width="64"
          height="64"
          alt="Nick Yahodin"
        />
        <h1 className="home__headline">
          Nick Yahodin—Edmonton-based Product Designer <em>(7yoe)</em>, who
          crafts order from data and a bit of visual poetry
        </h1>
      </section>
    </main>
  )
}

export default Home
