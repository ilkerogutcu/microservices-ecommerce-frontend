import { Button } from "@mui/material";
import React from "react";
import "./newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter is-centered is-flex-column ">
      <h1 className="newsletter__title is-bold">BÜLTENE ÜYE OL</h1>
      <div className="newsletter__description">
        Fırsatları kaçırmamak için bültene katılın.
      </div>
      <form className="newsletter__form has-space-between">
        <input
          placeholder="E-mail adresiniz"
          className="newsletter__form__input"
        ></input>
        <Button className="newsletter__form__button" variant="contained">Kayıt Ol</Button>
      </form>
    </div>
  );
}

export default Newsletter;
