import axios from "axios";
import Token from "../Token/Token";
import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from "@/constants/Auth/constant";

export const sanghyunAxios = axios.create({
  baseURL: process.env.REACT_APP_HIGHTHON_API_KEY,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getCookie(ACCESS_TOKEN_KEY)}`,
  },
});
