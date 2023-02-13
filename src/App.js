import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Navigation from './routes/navigation/navigation.component';
import About from './routes/about/about.component';
import Portfolio from "./routes/ portfolio / portfolio.component";
import Resume from "./routes/resume/resume.component";
import Contact from './routes/contact/contact.component';

import './App.scss';

function App() {

  let location = useLocation();
  return (  
    <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />}>

              <Route index element={<About />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="resume" element={<Resume />} />
              <Route path="contact" element={<Contact />} />

            </Route>
    </Routes>
  
  );
}

export default App;
