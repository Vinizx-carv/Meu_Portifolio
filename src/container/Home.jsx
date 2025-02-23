import "./Home.css";
import reactLogo from '../assets/react.svg'

function Home(){
  return (
    <header>
  <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>       
        <nav>
            <li><a href="Home"></a>Home</li>
            <li><a href="About"></a>About</li>
            <li><a href="Contact"></a>Contact</li>
        </nav>
    </header>
  );
};

export default Home;
