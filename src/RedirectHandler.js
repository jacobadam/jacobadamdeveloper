import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const path = new URLSearchParams(window.location.search).get("p");
    if (path && path !== window.location.pathname) {
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return null;
}

export default RedirectHandler;
