import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Announcement from "../../compenents/announcement/Announcement";
import Navbar from "../../compenents/navbar/Navbar";
import Navigation from "../../compenents/navigation/Navigation";
import "./profile.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TabPanel from "../../compenents/tab-panel/TabPanel";
import cityApi from "../../api/CityApi";
import authApi from "../../api/AuthApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IAddAddressToUser } from "../../types/addAddressToUser";
import { IOrderDetail } from "../../types/orderDetail";
import orderApi from "../../api/OrderApi";

function Profile() {
  const {
    register: changePassword,
    handleSubmit: changeHandleSubmit,
    formState: { errors },
    getValues: changePasswordGetValues,
  } = useForm();
  const {
    register: addAddress,
    handleSubmit: addAddressHandleSubmit,
    formState: { errors: addAddressErrors },
    getValues: addAddressGetValues,
    resetField,
  } = useForm();

  const [value, setValue] = useState(0);
  const [orders, setOrders] = useState<IOrderDetail[]>([]);
  const [cities, setCities] = useState<{ id: string; name: string }[]>([]);
  const [districts, setDistricts] = useState<
    { id: string; name: string; cityId: string }[]
  >([]);
  const [selectedCity, setSelectedCity] = useState<{
    id: string;
    name: string;
  }>();
  const [selectedDistrict, setSelectedDistrict] = useState<{
    id: string;
    name: string;
    cityId: string;
  }>();

  const changeSelectedCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cityId = event.target.value;

    const city = cities.find((city) => city.id === cityId);
    if (city) {
      cityApi.getDistrictsOfCity(cityId).then((res) => {
        setDistricts(res.data);
      });
      setSelectedCity(city);
    }
  };

  const changeSelectedDistrict = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const districtId = event.target.value;

    const district = districts.find((district) => district.id === districtId);
    if (district) {
      setSelectedDistrict(district);
    }
  };
  const changePasswordOnSubmit = async (data: any) => {
    await authApi.changePassword(data).then((res) => {
      toast.success("??ifreniz ba??ar??yla de??i??tirildi.");
    });
  };
  const addAddressOnSubmit = async (data: any) => {
    await authApi.addAddress(data).then((res) => {
      toast.success("Adres Ba??ar??yla Eklendi");
    });
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    (async () => {
      await orderApi.GetOrdersOfCurrentUser().then((res) => {
        setOrders(res.data);
      });
    })();
  }, [orders]);
  useEffect(() => {
    (async () => {
      await cityApi.getCities().then((res) => {
        setCities(res.data);
      });
    })();
  }, []);
  return (
    <div>
      <Announcement message="50 TL ??st?? T??m Sipari??lerde Kargo Bedava!" />
      <Navbar />
      <Navigation />
      <div className="profile-container">
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: 500,
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab label="??ifreyi De??i??tir" {...a11yProps(0)} />
            <Tab label="Adreslerim" {...a11yProps(1)} />
            <Tab label="Sipari??lerim" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <div className="profile-form">
              <form onSubmit={changeHandleSubmit(changePasswordOnSubmit)}>
                <div className="form-group">
                  <label>
                    <h5>??ifre</h5>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="??ifrenizi Girin"
                    {...changePassword("oldPassword", {
                      required: true,
                    })}
                  />
                  {errors.oldPassword?.type === "required" && (
                    <p>Mevcut ??ifrenizi giriniz</p>
                  )}
                </div>
                <div className="form-group">
                  <label>
                    <h5>Yeni ??ifre</h5>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Yeni ??ifrenizi Girin"
                    {...changePassword("newPassword", {
                      required: true,
                      maxLength: 60,
                      minLength: 12,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
                    })}
                  />
                  {errors.newPassword?.type === "required" && (
                    <p>??ifrenizi giriniz</p>
                  )}
                  {errors.newPassword?.type === "maxLength" && (
                    <p>??ifreniz maksimum 60 karakterli olabilir</p>
                  )}
                  {errors.newPassword?.type === "minLength" && (
                    <p>??ifreniz minimum 12 karakterli olabilir</p>
                  )}
                  {errors.newPassword?.type === "pattern" && (
                    <p>
                      ??ifreniz en az bir b??y??k harf, bir k??????k harf, bir rakam
                      ve bir ??zel karakter i??ermeli
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label>
                    <h5>Yeni ??ifre Tekrar</h5>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Yeni ??ifrenizi Tekrar Girin"
                    {...changePassword("confirmNewPassword", {
                      required: true,
                      maxLength: 60,
                      minLength: 12,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
                    })}
                  />
                  {errors.confirmNewPassword?.type === "required" && (
                    <p>??ifrenizi giriniz</p>
                  )}
                  {errors.confirmNewPassword?.type === "maxLength" && (
                    <p>??ifreniz maksimum 60 karakterli olabilir</p>
                  )}
                  {errors.confirmNewPassword?.type === "minLength" && (
                    <p>??ifreniz minimum 12 karakterli olabilir</p>
                  )}
                  {errors.confirmNewPassword?.type === "pattern" && (
                    <p>
                      ??ifreniz en az bir b??y??k harf, bir k??????k harf, bir rakam
                      ve bir ??zel karakter i??ermeli
                    </p>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  De??i??tir
                </button>
              </form>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="profile-form">
              <div className="form-group">
                <form onSubmit={addAddressHandleSubmit(addAddressOnSubmit)}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Adres Ba??l??????"
                    {...addAddress("addressTitle", {
                      required: true,
                      maxLength: 60,
                      minLength: 2,
                    })}
                  />
                  {addAddressErrors.addressTitle?.type === "required" && (
                    <p>Adres ba??l??????n?? giriniz</p>
                  )}
                  {addAddressErrors.addressTitle?.type === "maxLength" && (
                    <p>Adres ba??l??????n??z maksimum 60 karakterli olabilir</p>
                  )}
                  {addAddressErrors.addressTitle?.type === "minLength" && (
                    <p>Adres ba??l??????n??z minimum 2 karakterli olabilir</p>
                  )}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="??sminiz"
                    {...addAddress("firstName", {
                      required: true,
                      maxLength: 60,
                      minLength: 2,
                    })}
                  />
                  {addAddressErrors.firstName?.type === "required" && (
                    <p>??sminizi giriniz</p>
                  )}
                  {addAddressErrors.firstName?.type === "maxLength" && (
                    <p>??sminiz maksimum 60 karakterli olabilir</p>
                  )}
                  {addAddressErrors.firstName?.type === "minLength" && (
                    <p>??sminiz minimum 2 karakterli olabilir</p>
                  )}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Soyisim"
                    {...addAddress("lastName", {
                      required: true,
                      maxLength: 60,
                      minLength: 2,
                    })}
                  />
                  {addAddressErrors.lastName?.type === "required" && (
                    <p>Soyisminizi giriniz</p>
                  )}
                  {addAddressErrors.lastName?.type === "maxLength" && (
                    <p>Soyisminiz maksimum 60 karakterli olabilir</p>
                  )}
                  {addAddressErrors.lastName?.type === "minLength" && (
                    <p>Soyisminiz minimum 2 karakterli olabilir</p>
                  )}

                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Telefon numaras??"
                    {...addAddress("phoneNumber", {
                      required: true,
                      maxLength: 60,
                      minLength: 10,
                    })}
                  />
                  {addAddressErrors.phoneNumber?.type === "required" && (
                    <p>Telefon numaran??z?? giriniz</p>
                  )}
                  {addAddressErrors.phoneNumber?.type === "maxLength" && (
                    <p>Telefon numaran??z maksimum 60 karakterli olabilir</p>
                  )}
                  {addAddressErrors.phoneNumber?.type === "minLength" && (
                    <p>Telefon numaran??z minimum 10 karakterli olabilir</p>
                  )}
                  <select
                    className="form-control"
                    {...addAddress("city", {
                      required: true,
                    })}
                    onChange={changeSelectedCity}
                  >
                    <option value="">??ehir Se??in</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                  {addAddressErrors.city?.type === "required" && (
                    <p>??ehir se??iniz</p>
                  )}
                  <select
                    className="form-control"
                    {...addAddress("districtId")}
                    onChange={changeSelectedDistrict}
                  >
                    <option value="">??l??e Se??in</option>
                    {selectedCity &&
                      districts.map((district) => (
                        <option key={district.id} value={district.id}>
                          {district.name}
                        </option>
                      ))}
                  </select>
                  {addAddressErrors.districtId?.type === "required" && (
                    <p>??l??e se??iniz</p>
                  )}
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="ZIP kodunuz"
                    {...addAddress("zip", {
                      required: true,
                      maxLength: 20,
                      minLength: 4,
                    })}
                  />

                  {addAddressErrors.zip?.type === "required" && (
                    <p>ZIP kodunu giriniz</p>
                  )}
                  {addAddressErrors.zip?.type === "maxLength" && (
                    <p>ZIP kodunuz maksimum 20 karakterli olabilir</p>
                  )}
                  {addAddressErrors.zip?.type === "minLength" && (
                    <p>ZIP kodunuz minimum 4 karakterli olabilir</p>
                  )}

                  <textarea
                    className="form-control"
                    placeholder="Adresiniz"
                    {...addAddress("addressLine", {
                      required: true,
                      maxLength: 250,
                      minLength: 10,
                    })}
                  />

                  {addAddressErrors.addressLine?.type === "required" && (
                    <p>Adresinizi giriniz</p>
                  )}
                  {addAddressErrors.addressLine?.type === "maxLength" && (
                    <p>Adresiniz maksimum 250 karakterli olabilir</p>
                  )}
                  {addAddressErrors.addressLine?.type === "minLength" && (
                    <p>Adresiniz minimum 10 karakterli olabilir</p>
                  )}
                  <button type="submit" className="btn btn-primary">
                    Adres Ekle
                  </button>
                </form>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="profile-form">
              <div className="form-group">
                <label>Sipari??leriniz</label>
                <div className="order-list">
                  {orders.map((order) => (
                    <div className="order-item" key={order.orderNumber}>
                      <div className="order-item-header">
                        <div className="order-item-header-left">
                          <div className="order-item-header-left-left">
                            {/* Order date format */}

                            <strong>
                              Sipari?? Tarihi:
                              {new Date(order.date).toLocaleDateString("en-US")}
                            </strong>

                            <strong>Sipari?? Durumu: {order.status}</strong>
                          </div>
                          <div className="order-item-header-left-right">
                            <strong>Toplam Tutar: {order.total} ???</strong>
                          </div>
                        </div>
                      </div>
                      <div className="order-item-body">
                        {order.orderItems.map((orderItem) => (
                          <div
                            className="order-item-body-item"
                            key={orderItem.id}
                          >
                            <div className="order-item-body-item-left">
                              <img src={orderItem.pictureUrl} alt="" />
                            </div>
                            <div className="order-item-body-item-right">
                              <p>??r??n ??smi: {orderItem.productName}</p>
                              <p>??r??n Miktar: {orderItem.units}</p>
                              <p>??r??n Fiyat: {orderItem.unitPrice} ???</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
        </Box>
        <ToastContainer />
      </div>
    </div>
  );
  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
}

export default Profile;
