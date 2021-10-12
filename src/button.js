const Button = ({ text, className }) => {
  return (
    <button
      className={`block font-bold text-center rounded-lg w-full py-2  mb-4 ${
        className ? className : ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
