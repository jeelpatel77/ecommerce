// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

import Home from './Home';
import Shop from './Shop';
import Blog from './Blog';
import Contact from './Contact';
import Page from './Page';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="action" element={<Action />} />
        <Route path="another-action" element={<AnotherAction />} /> */}

          <Route path="/" element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='Blog' element={<Blog />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='page' element={<Page />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
