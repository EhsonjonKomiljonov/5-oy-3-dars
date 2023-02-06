import './assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Item from './components/Item/Item';
import { Routes, Route } from 'react-router-dom';
import { TicketsPage } from './pages/TicketsPage/TicketsPage';
import { OverviewPage } from './pages/OverviewPage/OverviewPage';
import { Error } from './pages/Error/Error';

function App() {
  return (
    <>
      <Header>
        <Item />
      </Header>
      <Routes>
        <Route
          path='*'
          element={<Error />}
        />
        <Route
          path='/'
          element={<OverviewPage />}
        />
        <Route
          path='/tickets'
          element={<TicketsPage />}
        />
      </Routes>
    </>
  );
}

export default App;
