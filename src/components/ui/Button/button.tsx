interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

function Button({ onClick, children, className, disabled }: ButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
}
export default Button;
