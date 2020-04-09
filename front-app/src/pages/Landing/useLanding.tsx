import { useState, useEffect } from "react";
import { isAPIOnline } from "../../lib/api";
import { useSelector, useDispatch } from "react-redux";
import { questionsSelector } from "../../store/selectors";
import { getQuestions } from "../../modules/questions/api";
import { Action } from "../../store/actions";

export type ApiStatus = "ONLINE" | "OFFLINE" | "PENDING";

export const useLanding = () => {
  const [apiStatus, setApiStatus] = useState<ApiStatus>("PENDING");

  const dispatch = useDispatch();

  useEffect(() => {
    isAPIOnline()
      .then((res) => setApiStatus(res.status ? "ONLINE" : "OFFLINE"))
      .catch(() => {
        console.warn("API DOWN, WEBSITE NOT WORKING");
        setApiStatus("OFFLINE");
      });

    getQuestions().then((questions) => {
      console.log(questions);
      const action: Action = { type: "UPDATE_QUESTIONS", data: questions };
      dispatch(action);
    });
  }, []);

  const questions = useSelector(questionsSelector);

  return { apiStatus, questions };
};
