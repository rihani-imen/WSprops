import "./App.css";

import Profile from "./Profile/Profile";

function App() {
  const fullName = "Captain Tsubasa";
  const bio =
    "Captain Tsubasa became one of the most popular manga and anime series worldwide, most notably in Japan due to how it popularized association football.";
  const profession = "Professional Football Player";
  const handelName = (fn) => {
    alert(`welcome ${fn}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Profile
          fullName={fullName}
          bio={bio}
          profession={profession}
          handelName={handelName}
        >
          https://starzplay-img-prod-ssl.akamaized.net/474w/evision/CAPTAINMAJIDALSHABAHY1981S01E001/CAPTAINMAJIDALSHABAHY1981S01E001-576x324-LSD.jpg
        </Profile>
      </header>
    </div>
  );
}

export default App;
