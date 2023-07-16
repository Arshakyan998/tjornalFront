import React from "react";
import SearchBar from "./SearchBar";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Login from "../LoginModal/Login";
import { useAppSelector } from "../../hooks";

const logoUrl =
  "https://upload.wikimedia.org/wikipedia/ru/2/21/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%B8%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F_TJ.jpg";

const Header = () => {
  const getUser = useAppSelector((state) => state.user.user);

  const navigate = useNavigate();
  const naviateInPost = (path: string) => {
    navigate(path);
  };

  return (
    <header className="w-[100%] bg-header-main flex justify-around p-4">
      <div className="flex w-[200px] justify-between">
        <div onClick={() => naviateInPost("/")} className="cursor-pointer">
          <img src={logoUrl} alt="logoUrl" width={55} height={55} />
        </div>

        <Button onClick={() => naviateInPost("/addPost")}>Новая запись</Button>
      </div>
      <div className="flex gap-2">
        <SearchBar />
        {!getUser._id ? <Login /> : <span>{getUser.fullName}</span>}
      </div>
    </header>
  );
};

export default Header;
