import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signUp } from "../features/UserSlice";
import { useNavigate } from "react-router-dom";
import ErrorDialog from "../components/ErrorDialog";
import SuccessDialog from "../components/SuccessDialog";

function SignIn() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, user, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (isLogin) {
      dispatch(login({ email, password })).then((result) => {
        setEmail("");
        setPassword("");
        if (result.type.includes("fulfilled")) {
          setSuccessMessage("Login successful!");
          setTimeout(() => {
            setSuccessMessage("");
          }, 2000);
        }
      });
    } else {
      dispatch(signUp({ fullname, email, username, password })).then(
        (result) => {
          if (result.type.includes("fulfilled")) {
            setFullName("");
            setEmail("");
            setUsername("");
            setPassword("");
            setConfirmPassword("");
            setSuccessMessage("Signup successful! You can now login.");
            setTimeout(() => {
              setSuccessMessage("");
            }, 2000);
          }
        }
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-r from-blue-50 to-blue-200 px-8 md:px-20 py-12">
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4">
        <h1 className="text-5xl font-bold mb-4 text-blue-600">StudyFlicks</h1>
        <p className="text-lg text-gray-700">
          Share your favorite videos with the world.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
            {isLogin ? "Login" : "Signup"}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  name="fullname"
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>
          <div className="mt-4 text-center">
            {isLogin ? (
              <p>
                Don't have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-blue-600 hover:underline"
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-blue-600 hover:underline"
                >
                  Log in
                </button>
              </p>
            )}
          </div>
        </div>
        {errorMessage && (
          <ErrorDialog
            message={errorMessage}
            onClose={() => setErrorMessage("")}
          />
        )}
        {successMessage && (
          <SuccessDialog
            message={successMessage}
            onClose={() => setSuccessMessage("")}
          />
        )}
      </div>
    </div>
  );
}

export default SignIn;
