import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const user = { Username: "admin", Password: "admin" };

  const handleSubmit = (e) => {
    if (Username == user.Username && Password == user.Password) {
      localStorage.setItem("Username", Username);
      navigate("/Edit");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card card-compact w-96 rounded-md shadow-lg shadow-slate-700 bg-gray-1000 p-10 m-10">
        <p className="text-4xl text-left">Login</p>
        <div className="flex flex-col items-center justify-center pt-10">
          <label className="input input-bordered flex items-center gap-2 rounded-t-lg w-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="tex"
              className="grow"
              placeholder="Username"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }}}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 rounded-b-lg w-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Password"
              Value={Password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }}}
            />
          </label>
          <button
            className="btn btn-ghost rounded-lg text-white font-light mt-4 w-80"
            onClick={() => handleSubmit()}
          >
            Login
          </button>
        </div>
        <div className="card-actions justify-end" />
      </div>
    </div>
  );
}

export default Login;
