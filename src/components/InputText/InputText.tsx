

interface InputTextProps {
  className?: string;
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<InputTextProps> = ({ className, id, name, type, value, onChange }) => {
  return (
    <input
      className={`block w-full border-gray-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${className}`}
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputText;