import { type ReactNode } from 'react';

interface CardShellProps {
  children: ReactNode;
}

export function CardShell({ children }: CardShellProps) {
  return (
    <div className="card-glass rounded-xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/12">
      {children}
    </div>
  );
}
