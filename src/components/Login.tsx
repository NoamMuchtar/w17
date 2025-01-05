import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { FormikValues, useFormik } from "formik";
import * as yup from "yup";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const formik: FormikValues = useFormik<FormikValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required().email(),
      password: yup
        .string()
        .required()
        .min(9, "Password too short! shuld be at least 9 charcters")
        .matches(
          /^(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
          "Password must contain at least one special charecter"
        ),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      // formik.resetForm();
      resetForm();
    },
  });

  return (
    <>
      <div className="container w-50 border p-4 my-5">
        <h4 className="display-4">Login</h4>
        <form className="mb-4" onSubmit={formik.handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              autoComplete="on"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <label htmlFor="email">Email address</label>
            {formik.touched.email && formik.errors.email && (
              <p className="text-danger">{formik.errors.email}</p>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <label htmlFor="password">Password</label>
            {formik.touched.password && formik.errors.password && (
              <p className="text-danger">{formik.errors.password}</p>
            )}
          </div>
          <button
            disabled={!formik.dirty || !formik.isValid}
            type="submit"
            className="btn btn-success"
          >
            Login
          </button>
        </form>
        <span>
          New user? Please <Link to="/register">register</Link> first.
        </span>
      </div>
    </>
  );
};

export default Login;
