import logo from "@/assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-md">
        <img 
          src={logo} 
          alt="LCA Industrial Solutions" 
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-xl font-semibold text-foreground">
        LCA Industrial Solutions
      </span>
    </div>
  );
};

export default Logo;
