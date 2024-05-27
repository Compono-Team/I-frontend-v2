import { Route, Routes } from 'react-router-dom';
import Landing from 'pages/Landing';
import Betatest from 'pages/Betatest';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/betatest" element={<Betatest />} />
    </Routes>
  );
}

export default App;
