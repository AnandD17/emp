import Logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className="h-[100%] w-[100%] flex items-center justify-center flex-col">
      <div className="flex flex-col gap-[17px] mt-[160px]">
        <img src={Logo} className="w-[90px]" />
        <p className="text-[16px] text-primary_text">We are Electric</p>
      </div>

      <div className="mt-[50px] flex flex-col ">
        <input
          className=" p-[10px] h-[42px] bg-input rounded-[20px] w-[238px] "
          placeholder="E-mail"
        />
        <input
          className="p-[10px] h-[42px] mt-[25px] bg-input rounded-[20px] w-[238px] "
          placeholder="Password"
        />

        <button className="bg-button text-center font-[600] rounded-[20px] mt-[50px] w-[238px] h-[42px] text-[#ffffff80] ">
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
