import './about.css';
import MacMeme from './mac-meme.jpeg'
import GithubIcon from './githubIcon.png'

const About = () => {
  return (
    <div className="about">
      {/* <h1>About</h1> */}
      <h1>
      How Can This Store Be Fake If Our Eyes Are Real?
      </h1>
      <div className="about-section">
        <img id="mac-meme" src={MacMeme} alt="Well, first of all, through God, all things are possible, so jot that down." />
        <div>
          <h3 className="about-title">
            The Fake Shop Story
          </h3>
          <p className="about-1">
            I first started this project to get a bit of practice doing stuff with React-Router-Dom.
            Along the way I realized I would have much more fun, and learn much more, if I used React-Redux to help manage state,
            while also using a fake store api to pull information and simulate a real store environment. This store is my baby, and
            I hope you enjoy it as much as I enjoyed making it :)  (hopefully more)
            <p>
            The hardest part was probably figuring out how to manage state in a bunch of different components, and trying to keep it generally
            clean throughout that process. The categories filter was kinda cool too, had to get a bit creative for that.
            </p>
          </p>

        </div>
      </div>
      <div id="footer">
      <a target="_blank" rel="noreferrer" href="https://github.com/muscularmayo/shopping-cart">
        <img id="github-icon" src={GithubIcon} alt="github" />
      </a>
    </div>
    </div>
  )
}

export default About;
