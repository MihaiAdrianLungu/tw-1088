import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken, setLoggedIn, setCheckTokenLoading } from "./store/slices/globalSlice";

function useCheckToken() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      };

      fetch(`${process.env.REACT_APP_API_URL}/auth/check`, options)
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            dispatch(setLoggedIn(true));
            dispatch(setToken(res.data.token))
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        })
        .finally(() => {
          dispatch(setCheckTokenLoading(false));
        });
    } else {
      dispatch(setCheckTokenLoading(false));
    }
  }, []);
}

export default useCheckToken;
