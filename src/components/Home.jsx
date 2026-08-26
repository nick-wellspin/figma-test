import avatar from '../assets/avatar.png'
import './Home.css'

function Home() {
  return (
    <main className="home">
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
