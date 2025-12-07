const Button = ({ name }) => {
  return (
    <div>
      <button className="px-2 py-2 m-2 bg-neutral-100 text-black text-sm font-semibold rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
