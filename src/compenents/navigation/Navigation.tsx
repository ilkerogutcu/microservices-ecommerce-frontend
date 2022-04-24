import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";

import React, { useEffect, useRef } from "react";
import "./navigation.css";
import { generatePath, Link } from "react-router-dom";
import ROUTES from "../../core/app/route/routes";

function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div className="navigation">
      <ul className="navigation tab">
        <li className="navigation tab__item" onClick={handleClick}>
          <div className="navigation tab__item__title">Giyim</div>
          <Popper className="popper" id={id} open={open} anchorEl={anchorEl}>
            <Paper className="navigation tab__item paper">
              <div className="column">
                <div className="category-box">
                  <div className="category-box__title">Dış Giyim</div>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "6216079ee76e30a1aa2168e9",
                    })}
                  >
                    <div className="category-box__item">Elbise</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "6216082ce76e30a1aa2168eb",
                    })}
                  >
                    <div className="category-box__item">Ceket</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "621607fee76e30a1aa2168ba",
                    })}
                  >
                    <div className="category-box__item">Kot Pantalon</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "621607fee76e30a1aa2168ca",
                    })}
                  >
                    <div className="category-box__item">Eşofman</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "621607fee76e30a1ab2168ca",
                    })}
                  >
                    <div className="category-box__item">Kazak</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "621607fee76e40a1ab2168ca",
                    })}
                  >
                    <div className="category-box__item">Mont</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "621607fee76e40a1ab2168ca",
                    })}
                  >
                    <div className="category-box__item">Takım Elbise</div>
                  </Link>
                </div>
              </div>
              <div className="column">
                <div className="category-box">
                  <div className="category-box__title">Ayakkabı</div>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "621607fee76e40a1ab2168ca",
                    })}
                  >
                    <div className="category-box__item">Topuklu Ayakkabı</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "621607fee76e40a1ab2168ca",
                    })}
                  >
                    <div className="category-box__item">Günlük Ayakkabı</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "621607fee76e40a1ab2168ca",
                    })}
                  >
                    <div className="category-box__item">Bot</div>
                  </Link>

                  <div className="category-box__title">Aksesuar & Çanta</div>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "621607fee76e40a1ab2168ca",
                    })}
                  >
                    <div className="category-box__item">Çanta</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "621607fee76e40a1ab2168ca",
                    })}
                  >
                    <div className="category-box__item">Takı</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "621607fee76e40a1ab2168ca",
                    })}
                  >
                    <div className="category-box__item">Saat</div>
                  </Link>
                </div>
              </div>
            </Paper>
          </Popper>
        </li>
        <li className="navigation tab__item" onClick={handleClick}>
          <div className="navigation tab__item__title">Elektronik</div>
          <Popper className="popper" id={id} open={open} anchorEl={anchorEl}>
            <Paper className="navigation tab__item paper">
              <div className="column">
                <div className="category-box">
                  <div className="category-box__title">Küçük Ev Aletleri</div>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612fb5531c38f030bd5048",
                    })}
                  >
                    <div className="category-box__item">Süpürge</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612fc0531c38f030bd5049",
                    })}
                  >
                    <div className="category-box__item">Ütü</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612fca531c38f030bd504a",
                    })}
                  >
                    <div className="category-box__item">Robot Süpürge</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612fe9531c38f030bd504b",
                    })}
                  >
                    <div className="category-box__item">Kahve Makinesi</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612ff0531c38f030bd504c",
                    })}
                  >
                    <div className="category-box__item">Çay Makinesi</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612ff9531c38f030bd504d",
                    })}
                  >
                    <div className="category-box__item">Tost Makinesi</div>
                  </Link>
                </div>
              </div>
              <div className="column">
                <div className="category-box">
                  <div className="category-box__title">Telefon</div>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "6261302f531c38f030bd504f",
                    })}
                  >
                    <div className="category-box__item">Cep Telefonu</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "6261305d531c38f030bd5050",
                    })}
                  >
                    <div className="category-box__item">Şarj Cihazları</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62613067531c38f030bd5051",
                    })}
                  >
                    <div className="category-box__item">Powerbank</div>
                  </Link>
                </div>
              </div>
            </Paper>
          </Popper>
        </li>
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
