import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";


import BannerComponent from "./Components/Banner/BannerComponent";
import HeaderComponent from "./Components/Header/HeaderComponent";
import MenuComopnent from "./Components/Header/MenuComponent/MenuComopnent";
import SectionComponent from "./Components/Section/SectionComponent";
import './App.css';
import FooterComponent from "./Components/Footer/FooterComponent";
import RootLayoutComponent from "./Components/RootComponent/RootLayoutComponent";
import SignUpComponent from "./Components/SignUp/SignUpComponent";
import ShopComponent from "./Components/Shop/ShopComponent";
import VirtualRaceComponent from "./Components/VirtualRace/VirtualRaceComponent";
import Nopage from "./Components/Nopage/Nopage";


const router = createBrowserRouter([
  {
    path:'/',
    element : <RootLayoutComponent />,
    children:[
      {path:'/', element:<SectionComponent />},
      {path:'/shop', element: <ShopComponent /> },
      {path:'/signup', element: <SignUpComponent /> },
      {path:'/virtualrace', element: <VirtualRaceComponent /> },
      {path:'/nopage', element: <Nopage /> },


    ]
  },
  
])

// const routerdefination = createRoutesFromElements(
//   <Route >
//     <Route path="/" element={<HeaderComponent /> } />
//     <Route path="/banner" element={<BannerComponent /> } />
//   </Route>
// )

// const router = createBrowserRouter(routerdefination);

function App() {
  return ( 
    <>
      <RouterProvider router={router} />
    </>
   )

    








    // <div className="App">
    //   <HeaderComponent />
    //   <MenuComopnent />
    //   <BannerComponent /> 
    //   <SectionComponent />
    //   <FooterComponent />
    // </div>
  // );
}

export default App;
