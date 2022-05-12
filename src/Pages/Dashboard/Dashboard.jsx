import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../css/Dashboard/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSlidersH,
  faTruck,
  faTags,
  faLocationDot,
  faShoppingCart,
  faList,
  faLock,
  faUser,
  faCogs,
  faMinus,
  faTachometerAlt,
  faSignOut,
  faExpandArrowsAlt,
  faTable,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  const [section, setSection] = useState(false);
  const [category, setCategory] = useState(false);
  const [product, setProduct] = useState(false);
  const [sliderElement, setSliderElement] = useState(false);
  const [shippingMethod, setShippingMethod] = useState(false);
  const [warranty, setWarranty] = useState(false);
  const [coupons, setCoupons] = useState(false);
  const [locations, setLocations] = useState(false);
  const [settings, setSettings] = useState(false);

  // const [upArrow, setUpArrow] = useState(faChevronDown);

  return (
    // <div className="">
    <div className="row m-0">
      <div
        className={
          sidebar
            ? "sidebar-left active col-sm-8 col-md-4 col-lg-2 p-0 h-100"
            : "sidebar-left p-0 "
        }
      >
        <div className="logo">
          <img
            src="https://via.placeholder.com/120x40"
            alt="logo"
            className="w-100"
          />
        </div>
        <div className="sidebar__menu-wrapper">
          <ul className="sidebar__menu py-2 p-0" id="side-menu">
            {/* DASHBOARD */}
            <li className="sidebar-menu-item">
              <Link to="dashboard1" className="nav-link">
                <FontAwesomeIcon
                  icon={faTachometerAlt}
                  className="text-white fa-icon"
                />
                <span className="menu-title"> Dashboard</span>
              </Link>
            </li>

            {/* SECTION */}
            <li
              className="sidebar-menu-item"
              onClick={() => {
                setSection(!section);
              }}
            >
              <button className="nav-link d-flex align-items-center w-100">
                <FontAwesomeIcon
                  icon={faTable}
                  className="text-white fa-icon"
                />
                <span className="menu-title">Section</span>{" "}
              </button>
              {section && (
                <div>
                  <Link to="add-section" className="link text-decoration-none">
                    <p className="d-flex align-items-center mb-0">
                      {" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="text-white fa-icon"
                        />
                      </span>
                      Add Section
                    </p>
                  </Link>
                  <Link to="view-section" className="link text-decoration-none">
                    <p className="d-flex align-items-center  mb-0">
                      {" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="text-white fa-icon"
                        />
                      </span>
                      View Section
                    </p>
                  </Link>
                </div>
              )}
            </li>

            {/* CATEGORY */}
            <li
              className="sidebar-menu-item"
              onClick={() => {
                setCategory(!category);
              }}
            >
              <button className="nav-link d-flex align-items-center w-100">
                <FontAwesomeIcon icon={faBars} className="text-white fa-icon" />
                <span className="menu-title">Category</span>{" "}
              </button>
              {category && (
                <div>
                  <Link to="add-category" className="link text-decoration-none">
                    <p className="d-flex align-items-center mb-0">
                      {" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="text-white fa-icon"
                        />
                      </span>
                      Add Category
                    </p>
                  </Link>
                  <Link
                    to="view-category"
                    className="link text-decoration-none"
                  >
                    <p className="d-flex align-items-center  mb-0">
                      {" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="text-white fa-icon"
                        />
                      </span>
                      View Category
                    </p>
                  </Link>
                </div>
              )}
            </li>

            {/* PRODUCT */}
            <li
              className="sidebar-menu-item"
              onClick={() => setProduct(!product)}
            >
              <button className="nav-link d-flex align-items-center w-100">
                <FontAwesomeIcon
                  icon={faProductHunt}
                  className="text-white fa-icon"
                />
                <span className="menu-title">Products</span>
              </button>
              {product && (
                <div>
                  <Link to="add-product" className="link text-decoration-none">
                    <p className="d-flex align-items-center mb-0">
                      {" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="text-white fa-icon"
                        />
                      </span>
                      Add Product
                    </p>
                  </Link>
                  <Link to="view-product" className="link text-decoration-none">
                    <p className="d-flex align-items-center mb-0">
                      <span>
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="text-white fa-icon"
                        />
                      </span>
                      View Product
                    </p>
                  </Link>
                </div>
              )}
            </li>

            {/* SLIDER ELEMENT */}
            <li
              className="sidebar-menu-item"
              onClick={() => setSliderElement(!sliderElement)}
            >
              <button className="nav-link d-flex align-items-center w-100">
                <FontAwesomeIcon
                  icon={faSlidersH}
                  className="text-white fa-icon"
                />
                <span className="menu-title">Slider Elemnets</span>
              </button>
              {sliderElement && (
                <div>
                  <Link to="add-slider" className="link text-decoration-none">
                    <p className="d-flex align-items-center  mb-0">
                      {" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="text-white fa-icon"
                        />
                      </span>
                      Add Slider
                    </p>
                  </Link>
                  <Link to="view-slider" className="link text-decoration-none">
                    <p className="d-flex align-items-center mb-0">
                      {" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="text-white fa-icon"
                        />
                      </span>
                      View Slider
                    </p>
                  </Link>
                </div>
              )}
            </li>

            {/* SHIPPING METHOD */}
            <li
              className="sidebar-menu-item"
              onClick={() => setShippingMethod(!shippingMethod)}
            >
              <button className="nav-link d-flex align-items-center w-100">
                <FontAwesomeIcon
                  icon={faTruck}
                  className="text-white fa-icon"
                  flip="horizontal"
                />
                <span className="menu-title">Shipping Method</span>
              </button>
              {shippingMethod && (
                <>
                  <Link
                    to="view-shipping"
                    className="link text-decoration-none"
                  >
                    <p className="d-flex align-items-center mb-0">
                      {" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="text-white fa-icon"
                        />
                      </span>
                      View Shipping
                    </p>
                  </Link>
                  <Link
                    to="connect-shipping"
                    className="link text-decoration-none"
                  >
                    <p className="d-flex align-items-center mb-0">
                      {" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="text-white fa-icon"
                        />
                      </span>
                      Connect Shipping
                    </p>
                  </Link>
                  <Link
                    to="view-additional-shipping"
                    className="link text-decoration-none"
                  >
                    <p className="d-flex align-items-center mb-0 p">
                      {" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="text-white fa-icon"
                        />
                      </span>
                      View Additional
                    </p>
                  </Link>
                </>
              )}
            </li>

            {/* WARRANTY */}
            <li
              className="sidebar-menu-item"
              onClick={() => setWarranty(!warranty)}
            >
              <button className="nav-link  d-flex align-items-center w-100">
                <FontAwesomeIcon icon={faBars} className="text-white fa-icon" />
                <span className="menu-title">Warranty</span>
              </button>
              {warranty && (
                <>
                  <p className="d-flex align-items-center">
                    {" "}
                    <span>
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="text-white fa-icon"
                      />
                    </span>
                    Add Warranty
                  </p>
                  <p className="d-flex align-items-center">
                    {" "}
                    <span>
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="text-white fa-icon"
                      />
                    </span>
                    View Warranty
                  </p>
                </>
              )}
            </li>

            {/* COUPONS */}
            <li
              className="sidebar-menu-item"
              onClick={() => setCoupons(!coupons)}
            >
              <button className="nav-link  d-flex align-items-center w-100">
                <FontAwesomeIcon icon={faTags} className="text-white fa-icon" />
                <span className="menu-title">Coupons</span>
              </button>
              {coupons && (
                <>
                  <p className="d-flex align-items-center">
                    {" "}
                    <span>
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="text-white fa-icon"
                      />
                    </span>
                    Add Coupons
                  </p>
                  <p className="d-flex align-items-center">
                    {" "}
                    <span>
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="text-white fa-icon"
                      />
                    </span>
                    View Coupons
                  </p>
                </>
              )}
            </li>

            {/* LOCATIONS */}
            <li
              className="sidebar-menu-item"
              onClick={() => setLocations(!locations)}
            >
              <button className="nav-link  d-flex align-items-center w-100">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-white fa-icon"
                />
                <span className="menu-title">Locations</span>
              </button>
              {locations && (
                <>
                  <p className="d-flex align-items-center">
                    {" "}
                    <span>
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="text-white fa-icon"
                      />
                    </span>
                    Add Locations
                  </p>
                  <p className="d-flex align-items-center">
                    {" "}
                    <span>
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="text-white fa-icon"
                      />
                    </span>
                    View Locations
                  </p>
                </>
              )}
            </li>

            {/* ALL ORDERS */}
            <li className="sidebar-menu-item">
              <button className="nav-link nav-link d-flex align-items-center w-100">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="text-white fa-icon"
                />
                <span className="menu-title">All Orders</span>
              </button>
            </li>
            {/* TOP PRODUCTS */}
            <li className="sidebar-menu-item">
              <button className="nav-link nav-link d-flex align-items-center w-100">
                <FontAwesomeIcon icon={faList} className="text-white fa-icon" />
                <span className="menu-title">Top Products</span>
              </button>
            </li>

            {/* ALL CUSTOMERS */}
            <li className="sidebar-menu-item">
              <button className="nav-link  d-flex align-items-center w-100">
                <FontAwesomeIcon icon={faUser} className="text-white fa-icon" />
                <span className="menu-title">All Customer</span>
              </button>
            </li>

            {/* SETTINGS */}
            <li
              className="sidebar-menu-item"
              onClick={() => setSettings(!settings)}
            >
              <button className="nav-link nav-link d-flex align-items-center w-100">
                <FontAwesomeIcon icon={faCogs} className="text-white fa-icon" />

                <span className="menu-title">Setting</span>
              </button>
              {settings && (
                <>
                  <p className="d-flex align-items-center">
                    {" "}
                    <span>
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="text-white fa-icon"
                      />
                    </span>
                    Description Type
                  </p>
                  <p className="d-flex align-items-center">
                    {" "}
                    <span>
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="text-white fa-icon"
                      />
                    </span>
                    Technical Type
                  </p>
                  <p className="d-flex align-items-center">
                    {" "}
                    <span>
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="text-white fa-icon"
                      />
                    </span>
                    My Profile
                  </p>
                  <p className="d-flex align-items-center">
                    {" "}
                    <span>
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="text-white fa-icon"
                      />
                    </span>
                    Change Password
                  </p>
                  <p className="d-flex align-items-center">
                    {" "}
                    <span>
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="text-white fa-icon"
                      />
                    </span>
                    Tax Information
                  </p>
                  <p className="d-flex align-items-center">
                    {" "}
                    <span>
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="text-white fa-icon"
                      />
                    </span>
                    Vat Information
                  </p>
                  <p className="d-flex align-items-center">
                    {" "}
                    <span>
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="text-white fa-icon"
                      />
                    </span>
                    Front Information
                  </p>
                  <p className="d-flex align-items-center">
                    {" "}
                    <span>
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="text-white fa-icon"
                      />
                    </span>
                    Paypal Details
                  </p>
                </>
              )}
            </li>

            {/* LOGOUT */}
            <li className="sidebar-menu-item">
              <button className="nav-link  d-flex align-items-center w-100 ">
                <FontAwesomeIcon icon={faLock} className="text-white fa-icon" />
                <span className="menu-title">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{ height: "100vh", overflowY: "scroll" }}
        className={
          sidebar
            ? "sidebar-right col-sm-4 col-md-8 col-lg-10 p-0"
            : "sidebar-right w-100 p-0"
        }
      >
        <div className="navbar-wrapper">
          <div className="navbar-right ms-auto">
            <li className="fullscreen-btn">
              <FontAwesomeIcon
                icon={faExpandArrowsAlt}
                className="text-white fa-icon"
                onClick={showSidebar}
              />
              <FontAwesomeIcon
                icon={faSignOut}
                className="text-white fa-icon "
              />
            </li>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
