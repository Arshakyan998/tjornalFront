import React from "react";
import { UserRequesDataForRegistration } from "../../types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { createUser, getUser } from "../../store/User/UserSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Input from "../Input";
import { createInputFields, createUserDataFields } from "./data";
import Button from "../Button/Button";

interface Props {
  fields:
    | ReturnType<typeof createInputFields>
    | ReturnType<typeof createUserDataFields>;
  isError?: string;
  currentFields: "login" | "register";
}

const LoginForm: React.FC<Props> = ({ fields, isError, currentFields }) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.user.loading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRequesDataForRegistration>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<UserRequesDataForRegistration> = (data) => {
    if (currentFields === "login") {
      dispatch(getUser(data));
    } else {
      dispatch(createUser(data));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((el) => {
        return (
          <div key={el.name}>
            <Input
              name={el.name}
              type={el.type}
              placeholder={el.placeholder}
              rules={el.rules}
              title={el.title}
              register={register}
            />
            {errors[el.name] && <span>{errors[el.name]?.message}</span>}
          </div>
        );
      })}
      {isError && (
        <div>
          {" "}
          <span className="text-[red]">{isError}</span>
        </div>
      )}

      <Button type="submit" disabled={loading}>
        {currentFields === "login" ? "Войти" : "Создать"}
      </Button>
    </form>
  );
};

export default LoginForm;
