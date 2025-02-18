import "./App.css";
import CatalogPage from './pages/CatalogPage/CatalogPage'
import AnimePage from './pages/AnimePage/AnimePage'
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
            <Route path="/:id" element={<AnimePage />} />
            <Route path="/" element={<CatalogPage />} />
          </Routes>
        </main>
      </Provider>
    </>
  )
}

export default App;
