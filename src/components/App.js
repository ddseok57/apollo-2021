import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
