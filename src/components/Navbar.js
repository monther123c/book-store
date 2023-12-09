import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="navbar">
      <div>
        <h4><Link to='/'>{t('home')}</Link></h4> 
      </div>
      <div>
        <Link to='/favorites'><h4>{t('favorites')}</h4></Link>
      </div>
      <div>
        <Link to='/settings'>{t('changeLanguage')}</Link>
      </div>
    </div>
  );
};

export default Navbar;