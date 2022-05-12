import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";

import IconButton from "@mui/material/IconButton";
import SortIcon from "@mui/icons-material/ArrowDownward";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import "../../../css/Section/View-section/view-section.css";
import { InputLabel } from "@mui/material";

const ViewSection = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
      setFilteredItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <label className="toggle-switch">
          <input type="checkbox" />
          <div className="slider round"></div>
        </label>
      ),
    },
    {
      name: "Action",
      cell: (row) => [
        <>
          <Link to="/dashboard/add-section">
            <IconButton>
              <EditIcon
                sx={{
                  color: "white",
                  backgroundColor: "#32cb3a",

                  padding: "2px 4px",
                  borderRadius: 1,
                }}
              />
            </IconButton>
          </Link>
          <IconButton>
            <DeleteForeverIcon
              sx={{
                color: "white",
                backgroundColor: "#c34646",

                padding: "2px 4px",
                borderRadius: 1,
              }}
            />
          </IconButton>
        </>,
      ],
    },
  ];

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    const result = countries.filter((country) => {
      return country.name.toLowerCase().match(search.toLowerCase());
    });
    setFilteredItems(result);
  }, [search]);

  const customStyles = {
    rows: {
      style: {
        minHeight: "50px", // override the row height
        fontSize: "16px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        fontSize: "16px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
    pagination: {
      style: {
        fontSize: "16px",
        color: "grey",
      },
    },
  };

  return (
    <>
      <div className="category-wrapper">
        <div className="breadcrumb">
          <div className="breadcrumb-item">
            <Link to="/dashboard/dashboard1">Dashboard</Link>
            <Link to="/dashboard/view-section" className="before">
              View Section
            </Link>
          </div>
        </div>

        <div className="col-md-12 mt-3">
          <div className="card">
            <div className="card-body">
              <div className="col-lg-12">
                <span className="top-border"></span>

                <div className="card p-2">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Section</h5>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <div>
                        <InputLabel required className="label fw-bold">
                          Main Category Name
                        </InputLabel>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Main Category Name"
                          name="Main_name"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-inline-flex">
                    <button
                      type="submit"
                      className="btn-save align-self-center mt-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
                <DataTable
                  title="Country List"
                  columns={columns}
                  data={filteredItems}
                  customStyles={customStyles}
                  pagination
                  sortIcon={<SortIcon />}
                  // fixedHeader
                  // fixedHeaderScrollHeight="450px"
                  defaultSortField
                  subHeader
                  subHeaderWrap
                  subHeaderComponent={
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className=" w-25 form-control "
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  }
                  // subHeaderAlign="left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewSection;
