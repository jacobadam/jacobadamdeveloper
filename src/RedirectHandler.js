import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const path = new URLSearchParams(window.location.search).get("p");
    if (path) {
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return null;
}

export default RedirectHandler;
