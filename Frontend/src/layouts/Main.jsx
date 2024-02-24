import { useEffect } from "react";
import Navbar from "../components/Navbar";
import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { getExpDuration } from "../util/auth";
import Loader from "../components/Loader";

const Main = () => {
  const token = useLoaderData();
  const submit = useSubmit();
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "TOKEN EXPIRE") {
      submit(null, { action: "/logout", method: "POST" });
    }

    const duration = getExpDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "POST" });
    }, [duration]);
  }, [token, submit]);

  return (
    <section className="main">
      <Navbar />
      {loading ? <Loader /> : <Outlet />}
    </section>
  );
};

export default Main;
