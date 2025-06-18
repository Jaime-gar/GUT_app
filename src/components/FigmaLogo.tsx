const FigmaLogo = () => {
  return (
    <div className="absolute top-design-xxl left-design-xxl">
      <a
        href="https://figma.com"
        className="text-accent-blue hover:opacity-80 transition-opacity"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
        >
          <path
            d="M20 20C20 16.6863 22.6863 14 26 14C29.3137 14 32 16.6863 32 20C32 23.3137 29.3137 26 26 26C22.6863 26 20 23.3137 20 20Z"
            fill="#1ABCFE"
          />
          <path
            d="M8 32C8 28.6863 10.6863 26 14 26H20V32C20 35.3137 17.3137 38 14 38C10.6863 38 8 35.3137 8 32Z"
            fill="#0ACF83"
          />
          <path
            d="M20 2V14H26C29.3137 14 32 11.3137 32 8C32 4.68629 29.3137 2 26 2H20Z"
            fill="#FF7262"
          />
          <path
            d="M8 8C8 11.3137 10.6863 14 14 14H20V2H14C10.6863 2 8 4.68629 8 8Z"
            fill="#F24E1E"
          />
          <path
            d="M8 20C8 23.3137 10.6863 26 14 26H20V14H14C10.6863 14 8 16.6863 8 20Z"
            fill="#A259FF"
          />
        </svg>
      </a>
    </div>
  );
};

export default FigmaLogo;
