import { HTMLInputTypeAttribute } from "react";
import { FieldValues, RegisterOptions, Path } from "react-hook-form";
import {
  UserRequesData,
  UserRequesDataForRegistration,
} from "../../types/types";
import TabOptions from "../Tabs/TabOptions";

interface InputFieldsData<T extends FieldValues> {
  name: keyof T;
  title: string;
  placeholder: string;
  rules: RegisterOptions<T, Path<T>>;
  type: HTMLInputTypeAttribute;
}

export const createInputFields = (): InputFieldsData<UserRequesData>[] => [
  {
    name: "email",
    title: "Ваш email",

    placeholder: "example@mail.com",
    rules: {
      minLength: {
        value: 10,
        message: "Введите минимум 10 символов",
      },
      required: true,
    },
    type: "email",
  },
  {
    name: "password",
    title: "Ваш пароль",

    placeholder: "123456",
    rules: {
      minLength: {
        value: 3,
        message: "Введите минимум 3 символов",
      },
      required: true,
    },
    type: "password",
  },
];

export const createUserDataFields =
  (): InputFieldsData<UserRequesDataForRegistration>[] => [
    {
      name: "email",
      title: "Ваш email",
      placeholder: "example@mail.com",
      rules: {
        minLength: {
          value: 10,
          message: "Введите минимум 10 символов",
        },
        required: true,
      },
      type: "email",
    },
    {
      name: "password",
      title: "Ваш пароль",
      placeholder: "123456",
      rules: {
        minLength: {
          value: 3,
          message: "Введите минимум 3 символов",
        },
        required: true,
      },
      type: "password",
    },

    {
      name: "fullName",
      title: "Ваше Полное имя",

      placeholder: "Вася пупкин",
      rules: {
        minLength: {
          value: 10,
          message: "Введите минимум 10 символов",
        },
        required: true,
      },
      type: "text",
    },
  ];

export const Options = [
  {
    title: "Войти",
    value: "login",
  },
  {
    title: "Регистрация",
    value: "registartion",
  },
].map((el) => (
  <TabOptions value={el.value} key={el.value}>
    {el.title}{" "}
  </TabOptions>
));
