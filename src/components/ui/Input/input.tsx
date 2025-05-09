interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "password" | "email";
  className?: string;
  disabled?: boolean;
}

function Input({value, onChange, placeholder, type = "text", className, disabled}: InputProps) {
  return (
    <>
    <input
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    className={`border-2 border-gray-300 rounded-md p-2 ${className}`}
    disabled={disabled}
    ></input>
    </>
  )

}
export default Input;
