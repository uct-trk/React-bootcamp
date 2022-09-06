import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthRouter } from "../../context/AuthContextRouter";
import { useFormik, Formik, Form, Field } from "formik";

function Login() {
  const { setUser } = useAuthRouter();
  const navigate = useNavigate();
  const location = useLocation();

  /*  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      setUser(values);
      navigate(location?.state?.return_url || "/", {
        replace: true,
      });
    },
  }); */
  return (
    <>
      <div>Login</div>

      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          setUser(values);
          navigate(location?.state?.return_url || "/", {
            replace: true,
          });
        }}
      >
        {({ values }) => (
          <Form className="p-6">
            <Field name="username" /> <br />
            <Field name="password" type="password" />
            <button type="submit">Giriş</button>
          </Form>
        )}
      </Formik>

      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="username">Kullanıcı Adı</label>
        <input
          type="text"
          value={values.username}
          onChange={handleChange}
          id="username"
          name="username"
        />{" "}
        <br />
        <label htmlFor="password">Parola</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          id="password"
        />
        <button type="submit">Giriş</button>
      </form> */}
    </>
  );
}

export default Login;
