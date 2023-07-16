import React from "react";
import Modal from "./Modal";
import Button from "../Button/Button";

interface Props {}

const Login: React.FC<Props> = () => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const changeModalState = (state: boolean) => {
    setOpenModal(state);
  };

  return (
    <div>
      <div>
        {" "}
        <Button onClick={() => changeModalState(true)}> Войти</Button>{" "}
      </div>

      {openModal && (
        <Modal closeModal={changeModalState} currentState={openModal} />
      )}
    </div>
  );
};

export default Login;
