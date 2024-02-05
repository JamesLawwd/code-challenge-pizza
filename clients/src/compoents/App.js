import {  Route, Routes } from "react-router-dom";
import HomePage from "./Home";  
import AppNavbar from "./Navbar";  
import RestaurantPage from "./Restaurant";  

function App() {
  return (
    <>
      <AppNavbar />  
      {/* <Router> */}
        <Routes>
          <Route path="/restaurants/:id" element={<RestaurantPage />} />  
          <Route path="/" element={<HomePage />} />  
        </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;
