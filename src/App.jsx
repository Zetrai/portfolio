import { Routes, Route } from 'react-router-dom';

import { Navigation, Home } from './components';
import { Spotlight } from './components';

const App = () => {
  return (
    <div>
      <Spotlight />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
