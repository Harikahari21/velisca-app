"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff, Mail, Lock, User, Plane } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
      terms: Yup.boolean().oneOf([true], "You must accept the terms"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/35 via-rose-50 to-primary/35">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.3),transparent_50%)]" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-xl bg-white text-primary shadow-lg">
            <Plane className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Velisca</h1>
            <p className="text-sm text-slate-500">Discover the world</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center px-6 py-2">
        <div className="w-full max-w-md">
          <div className="bg-white  rounded-2xl shadow-xl border-0 overflow-hidden">
            <div className="text-center p-8 pb-2">
              {/* <div className="mx-auto p-4 rounded-full w-fit bg-primary/10 mb-6">
                <User className="h-8 w-8 text-primary" />
              </div> */}
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Join Velisca
              </h2>
              {/* <p className="text-lg text-slate-600">
                Start exploring amazing destinations worldwide
              </p> */}
            </div>

            <div className="px-8 pb-8 space-y-6">
              {/* Form */}
              <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                      <input
                        name="firstName"
                        placeholder="First name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg outline-none text-slate-900 placeholder:text-slate-500"
                      />
                    </div>
                    {formik.touched.firstName && formik.errors.firstName && (
                      <p className="text-xs text-red-500 mt-1">
                        {formik.errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                      <input
                        name="lastName"
                        placeholder="Last name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg outline-none text-slate-900 placeholder:text-slate-500"
                      />
                    </div>
                    {formik.touched.lastName && formik.errors.lastName && (
                      <p className="text-xs text-red-500 mt-1">
                        {formik.errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <input
                      name="email"
                      placeholder="Enter your email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg outline-none text-slate-900 placeholder:text-slate-500"
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-xs text-red-500 mt-1">
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full pl-10 pr-12 py-3 border border-slate-200 rounded-lg outline-none text-slate-900 placeholder:text-slate-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-xs text-red-500 mt-1">
                      {formik.errors.password}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <input
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full pl-10 pr-12 py-3 border border-slate-200 rounded-lg outline-none text-slate-900 placeholder:text-slate-500"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <p className="text-xs text-red-500 mt-1">
                        {formik.errors.confirmPassword}
                      </p>
                    )}
                </div>

                <div className="flex items-start space-x-3 pt-2">
                  <input
                    name="terms"
                    type="checkbox"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.terms}
                    className="mt-1 h-4 w-4 text-orange-500"
                  />
                  <label className="text-sm text-slate-600">
                    I agree to Velisca’s{" "}
                    <a href="#" className="text-orange-600 font-medium">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-orange-600 font-medium">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                {formik.touched.terms && formik.errors.terms && (
                  <p className="text-xs text-red-500 mt-1">
                    {formik.errors.terms}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-4 rounded-lg shadow-lg hover:scale-[1.02] transition-all"
                >
                  Create your account
                </button>
              </form>

              <div className="text-center  flex items-center justify-center gap-2 text-sm">
                <span className="text-sm text-slate-600">
                  Already have an account?{" "}
                </span>
                <div className="text-sm font-medium text-primary hover:underline">
                  <a href="#">Sign in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative z-10 text-center pb-2 pt-4 px-6">
        <p className="text-sm text-slate-500 leading-relaxed">
          Join thousands of travelers who trust Velisca to discover their next
          adventure
        </p>
      </footer>
    </div>
  );
}
