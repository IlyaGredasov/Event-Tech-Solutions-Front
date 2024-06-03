import React from "react";
import "./adminHeader.css";
import Logo from "../logo/Logo.jsx";
import HeaderProfile from "../header-profile/HeaderProfile.jsx";

const AdminHeader = function () {
  return (
    <>
      <Logo />
      <div className="privilege_navbar">
        <ul> 
          <li>Мероприятия</li>
          <li>Пользователи</li>
          <li>Статистика</li>
        </ul>
      </div>
      <HeaderProfile />
    </>
  );
};

export default AdminHeader;
