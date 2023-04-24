import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  return (
    <>
        <Routes>
          <Route index path="/" element={<Page1 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={ <Page2 />} />
        </Routes>
    </>
  )
}

export default App;