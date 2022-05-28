import './about.css';

const About = () => {
  return (
    <div className="about">
      {/* <h1>About</h1> */}
      <h1>
      How Can This Store Be Fake If Our Eyes Are Real?
      </h1>
      <h3 className="about-title">
        The Fake Shop Story
      </h3>
      <p className="about-1">
        I first started this project to get a bit of practice doing stuff with React-Router-Dom.
        Along the way I realized I would have much more fun, and learn much more, if I used React-Redux to help manage state,
        while also using a fake store api to pull information and simulate a real store environment. This store is my baby, and
        I hope you enjoy it as much as I enjoyed making it :)  (hopefully more)
      </p>
    </div>
  );
}

export default About;
