import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'unknown-app';

  return (
    <footer className="w-full py-8 px-4 text-center border-t border-white/10">
      <p className="text-sm text-foreground/70">
        © {currentYear} Next Level RP. Built with{' '}
        <Heart className="inline-block w-4 h-4 text-cyan fill-cyan" aria-label="love" />{' '}
        using{' '}
        <a
          href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan hover:text-cyan/80 transition-colors underline"
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}
