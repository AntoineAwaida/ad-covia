import { useState, useEffect } from "react";
import { isAPIOnline } from "../../lib/api";
import { useSelector } from "react-redux";
import { questionsSelector } from "../../store/selectors";

export type ApiStatus = "ONLINE" | "OFFLINE" | "PENDING";

export const useLanding = () => {
  const [apiStatus, setApiStatus] = useState<ApiStatus>("PENDING");

  useEffect(() => {
    isAPIOnline()
      .then((res) => setApiStatus(res.status ? "ONLINE" : "OFFLINE"))
      .catch(() => {
        console.warn("API DOWN, WEBSITE NOT WORKING");
        setApiStatus("OFFLINE");
      });
  }, []);

  const questions = useSelector(questionsSelector);

  return { apiStatus, questions };
};
