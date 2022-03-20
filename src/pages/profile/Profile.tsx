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
    resetField
  } = useForm();

  const [value, setValue] = useState(0);
  const [cities, setCities] = useState<{ id: string; name: string }[]>([]);
  const [districts, setDistricts] = useState<
    { id: string; name: string; cityId: string }[]
  >([]);
  const [selectedCity, setSelectedCity] =
    useState<{ id: string; name: string }>();
  const [selectedDistrict, setSelectedDistrict] =
    useState<{ id: string; name: string; cityId: string }>();

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
  const changePasswordOnSubmit = (data: any) => {};
  const addAddressOnSubmit = (data: any) => {
    console.log(data);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    (async () => {
      await cityApi.getCities().then((res) => {
        setCities(res.data);
      });
    })();
  }, []);
  return (
    <div>
      <Announcement message="50 TL Üstü Tüm Siparişlerde Kargo Bedava!" />
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
            <Tab label="Şifreyi Değiştir" {...a11yProps(0)} />
            <Tab label="Adreslerim" {...a11yProps(1)} />
            <Tab label="Siparişlerim" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <div className="profile-form">
              <form onSubmit={changeHandleSubmit(changePasswordOnSubmit)}>
                <div className="form-group">
                  <label>
                    <h5>Şifre</h5>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Şifrenizi Girin"
                    {...changePassword("password", {
                      required: true,
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <p>Mevcut şifrenizi giriniz</p>
                  )}
                </div>
                <div className="form-group">
                  <label>
                    <h5>Yeni Şifre</h5>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Yeni Şifrenizi Girin"
                    {...changePassword("newPassword", {
                      required: true,
                      maxLength: 60,
                      minLength: 12,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <p>Şifrenizi giriniz</p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p>Şifreniz maksimum 60 karakterli olabilir</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p>Şifreniz minimum 12 karakterli olabilir</p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p>
                      Şifreniz en az bir büyük harf, bir küçük harf, bir rakam
                      ve bir özel karakter içermeli
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label>
                    <h5>Yeni Şifre Tekrar</h5>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Yeni Şifrenizi Tekrar Girin"
                    {...changePassword("newPasswordAgain", {
                      required: true,
                      maxLength: 60,
                      minLength: 12,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <p>Şifrenizi giriniz</p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p>Şifreniz maksimum 60 karakterli olabilir</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p>Şifreniz minimum 12 karakterli olabilir</p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p>
                      Şifreniz en az bir büyük harf, bir küçük harf, bir rakam
                      ve bir özel karakter içermeli
                    </p>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Değiştir
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
                    placeholder="Adres Başlığı"
                    {...addAddress("addressTitle", {
                      required: true,
                      maxLength: 60,
                      minLength: 2,
                    })}
                  />
                  {addAddressErrors.addressTitle?.type === "required" && (
                    <p>Adres başlığını giriniz</p>
                  )}
                  {addAddressErrors.addressTitle?.type === "maxLength" && (
                    <p>Adres başlığınız maksimum 60 karakterli olabilir</p>
                  )}
                  {addAddressErrors.addressTitle?.type === "minLength" && (
                    <p>Adres başlığınız minimum 2 karakterli olabilir</p>
                  )}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="İsminiz"
                    {...addAddress("firstName", {
                      required: true,
                      maxLength: 60,
                      minLength: 2,
                    })}
                  />
                  {addAddressErrors.firstName?.type === "required" && (
                    <p>İsminizi giriniz</p>
                  )}
                  {addAddressErrors.firstName?.type === "maxLength" && (
                    <p>İsminiz maksimum 60 karakterli olabilir</p>
                  )}
                  {addAddressErrors.firstName?.type === "minLength" && (
                    <p>İsminiz minimum 2 karakterli olabilir</p>
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
                    placeholder="Telefon numarası"
                    {...addAddress("phoneNumber", {
                      required: true,
                      maxLength: 60,
                      minLength: 12,
                    })}
                  />
                  {addAddressErrors.phoneNumber?.type === "required" && (
                    <p>Telefon numaranızı giriniz</p>
                  )}
                  {addAddressErrors.phoneNumber?.type === "maxLength" && (
                    <p>Telefon numaranız maksimum 60 karakterli olabilir</p>
                  )}
                  {addAddressErrors.phoneNumber?.type === "minLength" && (
                    <p>Telefon numaranız minimum 2 karakterli olabilir</p>
                  )}
                  <select
                    className="form-control"
                    {...addAddress("city", {
                      required: true,
                    })}
                    onChange={changeSelectedCity}
                  >
                    <option value="">Şehir Seçin</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                  {addAddressErrors.city?.type === "required" && (
                    <p>Şehir seçiniz</p>
                  )}
                  <select
                    className="form-control"
                    {...addAddress("district")}
                    onChange={changeSelectedDistrict}
                  >
                    <option value="">İlçe Seçin</option>
                    {selectedCity &&
                      districts.map((district) => (
                        <option key={district.id} value={district.id}>
                          {district.name}
                        </option>
                      ))}
                  </select>
                  {addAddressErrors.district?.type === "required" && (
                    <p>İlçe seçiniz</p>
                  )}
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="ZIP kodunuz"
                    {...addAddress("zipCode", {
                      required: true,
                      maxLength: 20,
                      minLength: 4,
                    })}
                  />

                  {addAddressErrors.zipCode?.type === "required" && (
                    <p>ZIP kodunu giriniz</p>
                  )}
                  {addAddressErrors.zipCode?.type === "maxLength" && (
                    <p>ZIP kodunuz maksimum 20 karakterli olabilir</p>
                  )}
                  {addAddressErrors.zipCode?.type === "minLength" && (
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
        </Box>
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
