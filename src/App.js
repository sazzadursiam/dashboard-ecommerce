import React from "react";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDashboard from "./Pages/Dashboard-Main/MainDashboard";
import AddCategory from "./Pages/Category/Add-category/AddCategory";
import ViewCategory from "./Pages/Category/View-category/ViewCategory";
import EditCategory from "./Pages/Category/Edit-category/EditCategory";
import AddProduct from "./Pages/Products/Add-product/AddProduct";
import ViewProduct from "./Pages/Products/View-product/ViewProduct";
import AddSlider from "./Pages/Slider-Elements/Add-slider/AddSlider";
import ViewSlider from "./Pages/Slider-Elements/View-slider/ViewSlider";
import ViewShipping from "./Pages/Shipping-Method/View-shipping/ViewShipping";
import ConnectShipping from "./Pages/Shipping-Method/Connect-shipping/ConnectShipping";
import ViewAdditionalShipping from "./Pages/Shipping-Method/View-additional-shipping/ViewAdditionalShipping";
import AddSection from "./Pages/Section/Add-section/AddSection";
import ViewSection from "./Pages/Section/View-section/ViewSection";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="dashboard1" element={<MainDashboard />} />
            <Route path="add-section" element={<AddSection />} />
            <Route path="view-section" element={<ViewSection />} />
            <Route path="add-category" element={<AddCategory />} />
            <Route path="view-category" element={<ViewCategory />} />
            <Route path="edit-category" element={<EditCategory />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="view-product" element={<ViewProduct />} />
            <Route path="add-slider" element={<AddSlider />} />
            <Route path="view-slider" element={<ViewSlider />} />
            <Route path="view-shipping" element={<ViewShipping />} />
            <Route path="connect-shipping" element={<ConnectShipping />} />
            <Route
              path="view-additional-shipping"
              element={<ViewAdditionalShipping />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
