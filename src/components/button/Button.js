export const Button = ({ text, type, onClick = null, longButton = false }) => {
  return (
    <button
      className={`${
        longButton ? "w-full" : ""
      } py-3.5 px-12 bg-[--button-bg-color] hover:bg-[--button-bg-color-hover] 
      text-white border-none rounded-xl text-sm font-semibold
      leading-5 tracking-normal text-center`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
