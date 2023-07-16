import React from "react";
import styles from "./Modal.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector, useInsideClick } from "../../hooks";
import type { UserRequesData } from "../../types/types";
import Input from "../Input";
import { Options, createInputFields, createUserDataFields } from "./data";
import { getUser } from "../../store/User/UserSlice";
import Tabs from "../Tabs/Tabs";
import TabOptions from "../Tabs/TabOptions";
import LoginForm from "./Form";

interface Props {
  closeModal: (state: boolean) => void;
  currentState: boolean;
}

type FieldsTypes = "login" | "register";

const Modal: React.FC<Props> = ({ closeModal }) => {
  const modalRef = React.useRef<HTMLDivElement | null>(null);

  const isError = useAppSelector((state) => state.user.error);

  const [currentFields, setCurrentFields] =
    React.useState<FieldsTypes>("login");

  const { outside, init } = useInsideClick();
  React.useEffect(() => {
    if (!outside) {
      closeModal(false);
    }
  }, [outside]);

  React.useEffect(() => {
    init(modalRef.current);
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = "hidden";

      return () => {
        body.style.overflow = "auto";
      };
    }
  }, []);

  const getTabsValue = (val: string) => {
    setCurrentFields(val as FieldsTypes);
  };

  const fields =
    currentFields === "login" ? createInputFields() : createUserDataFields();
  return (
    <div
      className={`bg-[rgba(128,128,128,0.5)] fixed   z-10    ${styles["login-modal"]}`}
    >
      <div
        className={` bg-[rgb(255,255,255)] rounded-[5px]  ${styles["login-modal_form"]} `}
        ref={modalRef}
      >
        <div className="reletive   flex-col z-[10]  flex justify-center items-center  ">
          <div className="mb-[50px]">
            <Tabs onChange={getTabsValue}>{Options}</Tabs>{" "}
          </div>
          <div className=" flex w-[100%] h-[100%]  items-center justify-center">
            <div className="w-[450px]">
              <LoginForm
                fields={fields}
                isError={isError}
                currentFields={currentFields}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
