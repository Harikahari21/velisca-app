import { Mail, Lock, Eye, EyeOff, HomeIcon } from "lucide-react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative bg-gray-100">
      {/* Top-left Logo and Home */}
      <div className="absolute top-6 left-6 flex items-center space-x-2">
        <div className="p-2 bg-white  text-primary rounded-xl shadow-lg">
          <HomeIcon className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Velisca</h1>
      </div>

      {/* Card Container */}
      <div className="w-full max-w-md relative bg-white/90  rounded-2xl shadow-2xl p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 ">Welcome Back</h2>
          <p className="text-sm text-slate-600 ">
            Sign in to continue your journey with Velisca
          </p>
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-white  border border-slate-300  py-2 rounded-md shadow hover:bg-slate-100  transition">
          <FcGoogle className="h-5 w-5 text-gray-700 " />
          <div className="text-sm font-medium text-gray-700  cursor-pointer">
            Continue with Google
          </div>
        </button>

        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          {/* Email */}
          <div className="space-y-1">
            <div className="flex items-center border border-slate-300 rounded-md bg-white px-3 py-3">
              <Mail className="text-slate-400 h-4 w-4 mr-2" />
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full outline-none bg-transparent text-black placeholder:text-slate-400"
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-xs text-red-500">{formik.errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1">
            <div className="flex items-center border border-slate-300 rounded-md bg-white px-3 py-3 relative">
              <Lock className="text-slate-400 h-4 w-4 mr-2" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full outline-none bg-transparent text-black placeholder:text-slate-400 pr-6"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-slate-400"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-xs text-red-500">{formik.errors.password}</p>
            )}
          </div>

          {/* Remember me & Forgot password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 text-gray-700 ">
              <input
                type="checkbox"
                name="remember"
                onChange={formik.handleChange}
                checked={formik.values.remember}
                className="accent-purple-500"
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-primary hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary/90 hover:bg-primary text-white py-3 rounded-md font-medium shadow-lg transition cursor-pointer"
          >
            Sign in
          </button>

          <div className="flex justify-center gap-2 text-sm  ">
            <p className="text-gray-600"> Don’t have an account? </p>
            <div className="text-black hover:underline hover:text-primary">
              <a href="/register">Sign up</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
