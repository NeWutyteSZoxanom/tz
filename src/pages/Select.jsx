import React from "react";
import Header from "../components/Header";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Select = () => {
  const history = useHistory();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div className="select">
      <Header />
      <div className="select_h_div">
        <h3 className="select_h">Select a company</h3>
      </div>
      {isMatch ? (
        <div className="select_block_list">
          <div className="select_block_xs">
            <div className="select_block_rows_xs">
              <div className="select_block_rows_img_xs">
                <img
                  src="./1.JPG"
                  className="select_Bimg_xs"
                  onClick={() => history.push("/main?comp=1")}
                />
              </div>
            </div>
            <div className="select_block_rows2_xs">
              <div className="select_block_title">
                <p className="select_block_title_p">ADV Used Parts LLS</p>
              </div>
              <div className="select_block_city">
                <p className="select_block_city_p">Traverse City, MI</p>
              </div>
            </div>
          </div>
          <div className="select_block_xs">
            <div className="select_block_rows_xs">
              <div className="select_block_rows_img_xs">
                <img
                  src="./2.JPG"
                  className="select_Bimg_xs"
                  onClick={() => history.push("/main?comp=2")}
                />
              </div>
            </div>
            <div className="select_block_rows2_xs">
              <div className="select_block_title">
                <p className="select_block_title_p">ADV Used Parts LLS</p>
              </div>
              <div className="select_block_city">
                <p className="select_block_city_p">Traverse City, MI</p>
              </div>
            </div>
          </div>
          <div className="select_block_xs">
            <div className="select_block_rows_xs">
              <div className="select_block_rows_img_xs">
                <img
                  src="./2.JPG"
                  className="select_Bimg_xs"
                  onClick={() => history.push("/main?comp=2")}
                />
              </div>
            </div>
            <div className="select_block_rows2_xs">
              <div className="select_block_title">
                <p className="select_block_title_p">ADV Used Parts LLS</p>
              </div>
              <div className="select_block_city">
                <p className="select_block_city_p">Traverse City, MI</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="select_block_list">
          <div className="select_block">
            <div className="select_block_rows">
              <div className="select_block_rows_img">
                <img
                  src="./1.JPG"
                  className="select_Bimg"
                  onClick={() => history.push("/main?comp=1")}
                />
              </div>
            </div>

            <div className="select_block_rows2">
              <div className="select_block_title">
                <p className="select_block_title_p">ADV Used Parts LLS</p>
              </div>
              <div className="select_block_city">
                <p className="select_block_city_p">Traverse City, MI</p>
              </div>
            </div>
          </div>
          <div className="select_block">
            <div className="select_block_rows">
              <div className="select_block_rows_img">
                <img
                  src="./2.JPG"
                  className="select_Bimg"
                  onClick={() => history.push("/main?comp=2")}
                />
              </div>
            </div>

            <div className="select_block_rows2">
              <div className="select_block_title">
                <p className="select_block_title_p">ADV Used Parts LLS</p>
              </div>
              <div className="select_block_city">
                <p className="select_block_city_p">Traverse City, MI</p>
              </div>
            </div>
          </div>

          <div className="select_block">
            <div className="select_block_rows">
              <div className="select_block_rows_img">
                <img
                  src="./2.JPG"
                  className="select_Bimg"
                  onClick={() => history.push("/main?comp=2")}
                />
              </div>
            </div>

            <div className="select_block_rows2">
              <div className="select_block_title">
                <p className="select_block_title_p">ADV Used Parts LLS</p>
              </div>
              <div className="select_block_city">
                <p className="select_block_city_p">Traverse City, MI</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
