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
        <div className="flex">
        <div className="flex-1 hidden md:block">
          <SideBar />
        </div>
        <div className='flex-[5] bg-gray-300 bg-opacity-50'>
          <TopBar />
          {router}
        </div>
        </div>
        {/* <footer>
          <Footer />
        </footer> */}
      </CmsContextProvider>
    </div>
  );
}

export default App;
