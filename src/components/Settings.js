import React from "react";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    if (currentLanguage === 'ar') {
      changeLanguage('en');
    } else {
      changeLanguage('ar');
    }
  };

  return (
    <div className="sett">
      <h2>Settings</h2>
      <button onClick={toggleLanguage}>
        {i18n.language === 'ar' ? 'Switch to English' : 'تغيير اللغة إلى العربية'}
      </button>
    </div>
  );
};

export default Settings;
