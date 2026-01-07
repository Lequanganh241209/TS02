import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx('px-4 py-2 rounded shadow', className)}
    >
      {children}
    </button>
  );
}
