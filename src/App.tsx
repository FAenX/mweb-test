import './styles/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from './pages/home';
import { Provider } from 'react-redux';
import { store } from './redux';





function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
