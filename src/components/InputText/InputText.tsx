interface InputTextProps {
  className?: string;
  id?: string;
  name: string;
  type?: 'text' | 'email' | 'number';
  value: string; // Add the value prop
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add the onChange prop
}

const InputText = ({ id, className = '', type = 'text', name, value, onChange }: InputTextProps) => {
  return (
    <input
      id={id}
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  ${className}`}
      type={type}
      name={name}
      value={value} // Use the value prop
      onChange={onChange} // Use the onChange prop
    />
  );
}

export default InputText;
