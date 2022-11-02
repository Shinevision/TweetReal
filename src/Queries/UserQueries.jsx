import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getUser = () => axios.get("user").then((res) => res.data);
export const postUser = (user) =>
  axios.post("user", user).then((res) => res.data);
export const loginUser = (email, password) =>
  axios.post("user/login", { email, password }).then((res) => res.data);
export const logoutUser = () =>
  axios.get("user/logout").then((res) => res.data);
export const registerUser = (userRegisterModel) =>
  axios
    .post("user/register", userRegisterModel, { withCredentials: false })
    .then((res) => res.data);

export const useGetUserQuery = () => useQuery(["user"], getUser);
export const useLoginUserQuery = (options) =>
  useMutation(({ email, password }) => loginUser(email, password), options);
export const useLogoutUserQuery = (options) => useMutation(logoutUser, options);
export const useRegisterUserQuery = (options) =>
  useMutation((userRegisterModel) => registerUser(userRegisterModel), options);

// export const invalidateOnSuccess = (keys, queryClient) => ({
//   onSuccess: () => queryClient.invalidateQueries(keys),
// });
