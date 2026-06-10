import { useEffect } from "react";

const Redirect = () => {
  useEffect(() => {
    window.location.replace("https://www.arbeitsagentur.de/");
  }, []);
  return null;
};

export default Redirect;
