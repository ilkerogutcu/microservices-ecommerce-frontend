import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";

import React, { useEffect, useRef } from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  // interface NavigationData {
  //   title: string
  //   ID: string
  //   post_excerpt: string
  // }
  // const menuQuery = useApiService<NavigationData[]>('/wp-json/wp-utils/menus')

  return (
    <div className="navigation">
      <ul className="navigation tab">
        <li className="navigation tab__item" onClick={handleClick}>
          <div className="navigation tab__item__title">Kadın</div>
          <Popper className="popper" id={id} open={open} anchorEl={anchorEl}>
            <Paper className="navigation tab__item paper">
              <div className="column">
                <div className="category-box">
                  <div className="category-box__title">Giyim</div>
                  <div className="category-box__item">Tişört</div>
                  <div className="category-box__item">Gömlek</div>
                  <div className="category-box__item">Kot Pantalon</div>
                  <div className="category-box__item">Eşofman</div>
                  <div className="category-box__item">Kazak</div>
                  <div className="category-box__item">Mont</div>
                  <div className="category-box__item">Ceket</div>
                </div>
              </div>
              <div className="column">
                <div className="category-box">
                  <div className="category-box__title">Ayakkabı</div>
                  <div className="category-box__item">Topuklu Ayakkabı</div>
                  <div className="category-box__item">Günlük Ayakkabı</div>
                  <div className="category-box__item">Bot</div>
                  <div className="category-box__title">Aksesuar & Çanta</div>
                  <div className="category-box__item">Çanta</div>
                  <div className="category-box__item">Saat</div>
                  <div className="category-box__item">Takı</div>
                </div>
              </div>
               <div className="column">
                <div className="category-box">
                  <div className="category-box__title">Ayakkabı</div>
                  <div className="category-box__item">Topuklu Ayakkabı</div>
                  <div className="category-box__item">Günlük Ayakkabı</div>
                  <div className="category-box__item">Bot</div>
                  <div className="category-box__title">Aksesuar & Çanta</div>
                  <div className="category-box__item">Çanta</div>
                  <div className="category-box__item">Saat</div>
                  <div className="category-box__item">Takı</div>
                </div>
              </div>
            </Paper>
          </Popper>
        </li>
        <li className="navigation tab__item">Erkek</li>
        <li className="navigation tab__item">Çocuk</li>
        <li className="navigation tab__item">Ev & Mobilya</li>
        <li className="navigation tab__item">Kozmetik</li>
        <li className="navigation tab__item">Ayakkabı Çanta</li>
        <li className="navigation tab__item">Ayakkabı Çanta</li>
        <li className="navigation tab__item">Ayakkabı Çanta</li>
        <li className="navigation tab__item">Ayakkabı Çanta</li>
      </ul>
    </div>
  );
}

export default Navigation;
