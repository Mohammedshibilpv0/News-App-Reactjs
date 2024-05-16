import { useState, createContext, useEffect } from "react";
import News from "./News";
import Loading from "./Loading";
import ToggleSwitch from './ToggleSwitch'; // Import the ToggleSwitch component

export const selectedContext = createContext();

const Navbar = () => {
  const Category = ['General', 'Business', 'Entertainment', 'Health', 'Science', 'Technology', 'Sports'];
  const [selected, setSelected] = useState('');
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectCategory = (category) => {
    setSelected(category);
  };

  useEffect(() => {
    if (dark) {
      document.body.style.backgroundColor = '#121212';
      document.getElementById('head').style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      const titleElement = document.getElementById('title');
      if (titleElement) {
        titleElement.style.color = 'black';
      }
      document.body.style.color = 'black';
    }
  }, [dark]);

  const toggleTheme = () => {
    setLoading(true);
    setTimeout(() => {
      setDark(prevDark => !prevDark);
      setLoading(false);
    }, 1000); // Simulate a loading period of 1 second
  };

  return (
    <>
      {loading && <Loading />}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">NewsStar</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {Category.map((cate, index) => (
                <li className="nav-item" key={index}>
                  <p className="nav-link active" aria-current="page" onClick={() => selectCategory(cate)}>{cate}</p>
                </li>
              ))}
            </ul>
            <div className="d-flex align-items-center">
              <ToggleSwitch toggled={dark} onClick={toggleTheme} label={dark ? 'Dark Mode' : 'Light Mode'} />
            </div>
          </div>
        </div>
      </nav>
      <selectedContext.Provider value={selected}>
        <News />
      </selectedContext.Provider>
    </>
  );
};

export default Navbar;
