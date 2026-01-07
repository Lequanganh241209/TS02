import clsx from 'clsx';

interface InputProps {
  type: string;
  placeholder?: string;
  className?: string;
}

export function Input({ type, placeholder, className }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={clsx('px-3 py-2 rounded border', className)}
    />
  );
}
