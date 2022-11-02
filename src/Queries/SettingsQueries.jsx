import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getSettings = () => axios.get("settings").then((res) => res.data);

export const useGetSettingsQuery = () => useQuery(["settings"], getSettings);
