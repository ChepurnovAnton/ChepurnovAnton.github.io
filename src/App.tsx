import "./App.css";
import Catalog from './pages/Catalog/Catalog'
import AnimeItemPage from './pages/AnimeItemPage/AnimeItemPage'
import { Routes, Route } from 'react-router'
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import { store } from './redux-toolkit/store'
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Breadcrumbs />
        <main>
          <Routes>
            <Route path="/:id" element={<AnimeItemPage />} />
            <Route path="/" element={<Catalog />} />
          </Routes>
        </main>
      </Provider>
    </>
  )
}

export default App;
