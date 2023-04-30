import "./App.css";
import TopBar from "./components/topBar/TopBar";
import SideBar from "./components/sideBar/SideBar";
import Footer from "./components/footer/Footer";
import routs from "./router/routes";
import { useRoutes } from "react-router-dom";
import CmsContextProvider from "./contexts/CmsContext";
function App() {
  let router = useRoutes(routs);
  return (
    <div className='app'>
      <CmsContextProvider>
        <header>
          <TopBar />
        </header>
      <main>
        <SideBar />
        {router}
      </main>
      <footer>
        <Footer/>
      </footer>
      </CmsContextProvider>
    </div>
  );
}

export default App;
