import './home.css';
import FakeIcon from './fake-icon.png';
import ShopIcon from './shop-icon.png';
import HomeBackground from './home-background.jpeg'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <img id="home-background" src={HomeBackground} alt="home-background"/>
      <div id="welcome">
        <p className="home-welcome">Welcome to the</p>
        <span className="fake-shop-icon">
          <img className="fake-icon" src={FakeIcon} alt='fake icon'/>
          <img className="shop-icon" src={ShopIcon} alt='shop icon'/>
        </span>
      </div>
      <div id="enter" onClick={() => navigate('/shop')}>
        Enter
      </div>

    </div>
  );
}

export default Home;
