const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Diamond shape */}
        <div className="absolute inset-0 bg-primary rotate-45 rounded-sm shadow-md" />
        {/* Inner pattern */}
        <div className="relative z-10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary-foreground"
          >
            <path
              d="M12 2L4 8L12 14L20 8L12 2Z"
              fill="currentColor"
              opacity="0.9"
            />
            <path
              d="M12 14L4 8V16L12 22L20 16V8L12 14Z"
              fill="currentColor"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>
      <span className="text-xl font-semibold text-foreground">
        LCA Industrial Solutions
      </span>
    </div>
  );
};

export default Logo;
