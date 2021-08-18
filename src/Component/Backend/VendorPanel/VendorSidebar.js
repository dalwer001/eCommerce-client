import {
  faTasks,
  faTachometerAlt,
  faUserCircle,
  faChartLine,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import {
  faProductHunt,
  faFirstOrder,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./VendorSidebar.css";
import { Link } from "react-router-dom";
const VendorSidebar = () => {
  return (
    <div class="container-fluid overflow-hidden">
      <div class="row vh-100 overflow-auto">
        <div class="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
          <div class="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
            <Link
              to="/"
              class="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span class="fs-5">
                V<span class="d-none d-sm-inline">endor Panel</span>
              </span>
            </Link>
            <ul
              class="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start"
              id="menu"
            >
              <li>
                <Link
                  to="#submenu1"
                  data-bs-toggle="collapse"
                  class="nav-link px-sm-0 px-2"
                >
                  <FontAwesomeIcon icon={faTachometerAlt} />
                  <span class="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
                </Link>
              </li>
              <li class="dropdown">
                <Link
                  to="#"
                  class="nav-link dropdown-toggle px-sm-0 px-1"
                  id="dropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faProductHunt} />
                  <span class="ms-1 d-none d-sm-inline">Product</span>
                </Link>
                <ul
                  class="dropdown-menu dropdown-menu-dark text-small shadow"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <Link to="/addProduct" class="dropdown-item" >
                      Add Product
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/vendorManageProduct">
                      Manage Products
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <Link
                  to="#"
                  class="nav-link dropdown-toggle px-sm-0 px-1"
                  id="dropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faTasks} />
                  <span class="ms-1 d-none d-sm-inline">Offer Product</span>
                </Link>
                <ul
                  class="dropdown-menu dropdown-menu-dark text-small shadow"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <Link to="/addOffer" class="dropdown-item" >
                      Add offer Product
                    </Link>
                  </li>
                  <li>
                    <Link to="/vendorManageOffers" class="dropdown-item" >
                      Manage offer Products
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                </ul>
              </li>

              <li>
                <Link to="#" class="nav-link px-sm-0 px-2">
                  <FontAwesomeIcon icon={faUserCircle} />
                  <span class="ms-1 d-none d-sm-inline">Profile </span>
                </Link>
              </li>
              <li>
                <Link to="#" class="nav-link px-sm-0 px-2">
                  <FontAwesomeIcon icon={faChartLine} />
                  <span class="ms-1 d-none d-sm-inline">Report </span>
                </Link>
              </li>

              <li>
                <Link to="#" class="nav-link px-sm-0 px-2">
                  <FontAwesomeIcon icon={faFirstOrder} />
                  <span class="ms-1 d-none d-sm-inline">Order </span>
                </Link>
              </li>
              <li>
                <Link to="#" class="nav-link px-sm-0 px-2">
                  <FontAwesomeIcon icon={faIdCard} />
                  <span class="ms-1 d-none d-sm-inline">Contact</span>
                </Link>
              </li>

             
            </ul>
          
            </div>
          </div>
          </div>
        </div>
      
  );
};

export default VendorSidebar;
