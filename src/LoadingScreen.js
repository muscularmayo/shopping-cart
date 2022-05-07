import './loadingscreen.css';
import loadingScreen from './loadingScreen.gif'
import loading from './loading.gif'

const About = () => {
  return (
    <div className="loadingScreen">
      {/* <img id="loading" src={loading} alt='loading...'/> */}
      <img id="loadingGif" src={loadingScreen} alt='loading screen'/>
    </div>
  );
}

export default About;
