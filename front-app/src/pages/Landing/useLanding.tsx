import { useState, useEffect } from "react";
import { isAPIOnline } from "../../lib/api";

export const useLanding = () => {
  const [apiOnline, setApiOnline] = useState<boolean>(false);

  useEffect(() => {
    try {
      isAPIOnline().then((res) => setApiOnline(res.status));
    } catch (err) {
      console.warn("API DOWN, WEBSITE NOT WORKING");
    }
  }, []);

  return { apiOnline };
};
