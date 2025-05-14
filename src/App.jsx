import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/searchbar";

const API_KEY = "tjNPUjwYNwGQzmLKx4s0GadVzGOsovmW3V935bpLas";

function App() {
  const [data, setData] = useState(null);
  const [roverName, setRoverName] = useState("curiosity");
  const [roverCamera, setRoverCamera] = useState("fhaz");
  const [photoDate, setPhotoDate] = useState("2015-6-3");

  useEffect(() => {
    let apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=1000&api_key=${API_KEY}`;

    if (roverCamera) {
      apiUrl += `&camera=${roverCamera}`;
    }

    if (photoDate) {
      apiUrl += `&earth_date=${photoDate}`;
    }

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [roverName, roverCamera, photoDate]);
  return (
    <div className="App">
      <div classname="App">
        <SearchBar />
      </div>
      <header className="App-header">
        <img
          src={
            "https://yt3.googleusercontent.com/l_pM8xlDmSzp0Naeqo-kJqtx1QAHwoF9_SL39z3z3LMgBcCZtwsCzfTJtqA86RqvaOaJjmkyHA=s160-c-k-c0x00ffffff-no-rj"
          }
          className="App-logo"
          alt="logo"
        />
        <p>
          <code>src/App.jsx</code> save 2 show new stuff
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCxnR8XXW4fqPxS1NeA9dL7A/"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is a cool project for rovers
        </a>
      </header>
      
    </div>
  );
}

export default App;
// api key :tjNPUjwYNwGQzmLKx4s0GadVzGOsovmW3V935bpLas
