import clsx from 'clsx';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={clsx('p-4 rounded-lg shadow border', className)}>
      {children}
    </div>
  );
}
