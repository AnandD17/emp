import Logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className="w-[600px] h-[100vh] mx-auto bg-[#000] flex items-center justify-center">
      <div className="flex flex-col gap-[17px]">
        <img src={Logo} className="w-[90px]" />
        <p className="text-[16px] text-[#36A546CC]">We are Electric</p>
      </div>
    </div>
  );
};

export default Login;
