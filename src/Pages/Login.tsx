import { useState } from "react";
import Logo from "../assets/logo.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email || !password) return toast.error("Please fill all the fields");
    if (email === "Admin" && password === "Admin") {
      toast.success("Login Successful");
      navigate("/home");
      return;
    }
    return toast.error("Invalid Credentials");
  };
  return (
    <div className="h-[100%] w-[100%] flex items-center justify-center flex-col">
      <div className="flex flex-col gap-[17px] mt-[160px]">
        <img src={Logo} className="w-[90px]" />
        <p className="text-[16px] text-primary_text tracking-tight">
          We are Electric
        </p>
      </div>

      <div className="mt-[50px] flex flex-col ">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" px-[20px] text-white h-[42px] bg-input rounded-[20px] w-[238px] placeholder:text-[#FFFFFFB3] placeholder:text-sm active:border-none focus:outline-none active:border-none"
          placeholder="E-mail"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-[20px] text-white h-[42px] mt-[25px] bg-input rounded-[20px] w-[238px] placeholder:text-[#FFFFFFB3] placeholder:text-sm active:border-none focus:outline-none active:border-none"
          placeholder="Password"
        />

        <button
          onClick={handleSubmit}
          className="bg-button text-center font-[600] rounded-[20px] mt-[50px] w-[238px] h-[42px] text-[#ffffff80] "
        >
          Login
        </button>
      </div>

      <p className="text-primary_text mt-[26px] text-[15px]">
        Forgot Password?
      </p>
    </div>
  );
};

export default Login;
