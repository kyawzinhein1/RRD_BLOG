import React from "react";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

const AuthForm = () => {
  const data = useActionData();
  const navigation = useNavigation();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "submitting";

  return (
    <section>
      <Form method="post" className="login-form">
        <p>{isLogin ? "Login to your account" : "Create new account"}</p>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}

        {data && data.message && <span>{data.message}</span>}
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <button className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : isLogin ? "Login" : "Register"}
        </button>

        {isLogin ? (
          <h1 className="create-acc">
            Don't have an account? <br />
            <Link to={"/auth?mode=signup"}>Register Here</Link>
          </h1>
        ) : (
          <h1 className="create-acc">
            Already have an account? <br />
            <Link to={"/auth?mode=login"}>Login Here</Link>
          </h1>
        )}
      </Form>
    </section>
  );
};

export default AuthForm;
