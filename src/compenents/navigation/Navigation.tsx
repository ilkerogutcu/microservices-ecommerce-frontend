import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";

import React, { useEffect, useRef } from "react";
import "./navigation.css";
import { generatePath, Link } from "react-router-dom";
import ROUTES from "../../core/app/route/routes";

function Navigation() {
  const [firstCategory, setFirstCategory] = React.useState(null);
  const [secondCategory, setSecondCategory] = React.useState(null);
  const [thirdCategory, setThirdCategory] = React.useState(null);
  const [fourthCategory, setFourthCategory] = React.useState(null);

  const handleFirstCategory = (event: any) => {
    setFirstCategory(firstCategory ? null : event.currentTarget);
  };
  const handleSecondCategory = (event: any) => {
    setSecondCategory(secondCategory ? null : event.currentTarget);
  };
  const handleThirdCategory = (event: any) => {
    setThirdCategory(thirdCategory ? null : event.currentTarget);
  };
  const handleFourthCategory = (event: any) => {
    setFourthCategory(fourthCategory ? null : event.currentTarget);
  };

  return (
    <div className="navigation">
      <ul className="navigation tab">
        <li className="navigation tab__item" onClick={handleFirstCategory}>
          <div className="navigation tab__item__title">Giyim</div>
          <Popper
            className="popper"
            open={Boolean(firstCategory)}
            anchorEl={firstCategory}
          >
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
        {/* SECOND CATEGORY */}
        <li className="navigation tab__item" onClick={handleSecondCategory}>
          <div className="navigation tab__item__title">Elektronik</div>
          <Popper
            className="popper"
            open={Boolean(secondCategory)}
            anchorEl={secondCategory}
          >
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
        {/* THIRD CATEGORY */}
        <li className="navigation tab__item" onClick={handleThirdCategory}>
          <div className="navigation tab__item__title">Ev & Mobilya</div>
          <Popper
            className="popper"
            open={Boolean(thirdCategory)}
            anchorEl={thirdCategory}
          >
            <Paper className="navigation tab__item paper">
              <div className="column">
                <div className="category-box">
                  <div className="category-box__title">Sofra & Mutfak</div>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612b46531c38f030bd5024",
                    })}
                  >
                    <div className="category-box__item">Yemek Takımı</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612b55531c38f030bd5025",
                    })}
                  >
                    <div className="category-box__item">Bardak</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612b61531c38f030bd5026",
                    })}
                  >
                    <div className="category-box__item">Çaydanlık</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612b78531c38f030bd5027",
                    })}
                  >
                    <div className="category-box__item">Baharat Takımı</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612b82531c38f030bd5028",
                    })}
                  >
                    <div className="category-box__item">Tencere Seti</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612ff9531c38f030bd104d",
                    })}
                  >
                    <div className="category-box__item">
                      Çatal Kaşık Bıçak Seti
                    </div>
                  </Link>
                </div>
              </div>
              <div className="column">
                <div className="category-box">
                  <div className="category-box__title">Banyo</div>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612bc2531c38f030bd502a",
                    })}
                  >
                    <div className="category-box__item">Havlu & Havlu Seti</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612bca531c38f030bd502b",
                    })}
                  >
                    <div className="category-box__item">Bornoz</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612bd1531c38f030bd502c",
                    })}
                  >
                    <div className="category-box__item">Bornoz Seti</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612bdc531c38f030bd502d",
                    })}
                  >
                    <div className="category-box__item">Banyo Paspası</div>
                  </Link>
                </div>
              </div>
              <div className="column">
                <div className="category-box">
                  <div className="category-box__title">Ev Tekstili</div>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612c14531c38f030bd502f",
                    })}
                  >
                    <div className="category-box__item">Yatak Odası</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612c1b531c38f030bd5030",
                    })}
                  >
                    <div className="category-box__item">Perde</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612c22531c38f030bd5031",
                    })}
                  >
                    <div className="category-box__item">Nevresim Takımı</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612c29531c38f030bd5032",
                    })}
                  >
                    <div className="category-box__item">Yastık</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612c35531c38f030bd5033",
                    })}
                  >
                    <div className="category-box__item">Halı</div>
                  </Link>
                </div>
              </div>
            </Paper>
          </Popper>
        </li>
        {/* FOURTH CATEGORY */}
        <li className="navigation tab__item" onClick={handleFourthCategory}>
          <div className="navigation tab__item__title">Kozmetik</div>
          <Popper
            className="popper"
            open={Boolean(fourthCategory)}
            anchorEl={fourthCategory}
          >
            <Paper className="navigation tab__item paper">
              <div className="column">
                <div className="category-box">
                  <div className="category-box__title">Makyaj</div>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612e20531c38f030bd503b",
                    })}
                  >
                    <div className="category-box__item">Göz Makyaj</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612e29531c38f030bd503c",
                    })}
                  >
                    <div className="category-box__item">Ten Makyajı</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612e36531c38f030bd503d",
                    })}
                  >
                    <div className="category-box__item">Dudak Makyajı</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612b78531c38f030bd5027",
                    })}
                  >
                    <div className="category-box__item">Baharat Takımı</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612e41531c38f030bd503e",
                    })}
                  >
                    <div className="category-box__item">Makyaj Seti</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612e53531c38f030bd503f",
                    })}
                  >
                    <div className="category-box__item">Fondöten</div>
                  </Link>
                </div>
              </div>
              <div className="column">
                <div className="category-box">
                  <div className="category-box__title">Cilt Bakımı</div>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612ea6531c38f030bd5041",
                    })}
                  >
                    <div className="category-box__item">Yüz Kremi</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612eaf531c38f030bd5042",
                    })}
                  >
                    <div className="category-box__item">Yüz Temizleme</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612eb5531c38f030bd5043",
                    })}
                  >
                    <div className="category-box__item">Yüz Maskesi</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612ebf531c38f030bd5044",
                    })}
                  >
                    <div className="category-box__item">Göz Maskesi</div>
                  </Link>
                  <Link
                    to={generatePath(ROUTES.PRODUCT.LIST, {
                      id: "62612eca531c38f030bd5045",
                    })}
                  >
                    <div className="category-box__item">Göz Bakımı</div>
                  </Link>
                </div>
              </div>
            </Paper>
          </Popper>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
