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
    <div className='app '>
      <CmsContextProvider>
        <div className='flex relative'>
          <SideBar />
          <div className='flex-[5] relative bg-gray-100 '>
            <TopBar />
            {router}
          </div>
        </div>
      </CmsContextProvider>
    </div>
  );
}

export default App;
