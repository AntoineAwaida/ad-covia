import wretch from "wretch";
import settings from "./settings.json";

export const ADCoviaAPI = (route: string) =>
  wretch(settings.ADCOVIA_API_URL + route);

export const isAPIOnline = async () => {
  return await ADCoviaAPI("/").get().json();
};
