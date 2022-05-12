import { InputLabel } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../../../css/Section/Add-section/add-section.css";

const AddSection = () => {
  return (
    <>
      <div className="category-wrapper">
        <div className="breadcrumb">
          <div className="breadcrumb-item">
            <Link to="/dashboard/dashboard1">Dashboard</Link>
            <Link to="/dashboard/view-section" className="before">
              Section Overview
            </Link>
          </div>
        </div>

        <div className="col-md-12 mt-3">
          <div className="card">
            <div className="card-body">
              <div className="col-lg-12">
                <span className="top-border"></span>
                <form>
                  <div className="card p-2">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Edit Section</h5>
                      <hr />
                    </div>
                  </div>
                  <div className="row py-3">
                    {/* Category Name */}
                    <div className="col-md-12 p-5">
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

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn-submit mt-5 rounded-3 border-0"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                <div className="copyright mt-5">
                  <p>Copyright &copy; 2022 Gastronomic. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSection;
