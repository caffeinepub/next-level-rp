import { Button } from '@/components/ui/button';

export function CtaButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 px-4 pb-8 md:pb-12">
      <Button
        asChild
        size="lg"
        className="bg-cyan hover:bg-cyan/90 text-navy font-bold text-lg px-8 py-6 rounded-lg shadow-cyan transition-all duration-300 hover:shadow-cyan-glow focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
      >
        <a href="samp://15.235.185.4:7785">
          PLAY NOW
        </a>
      </Button>
      
      <Button
        asChild
        size="lg"
        variant="outline"
        className="bg-white hover:bg-white/90 text-navy border-2 border-white font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:shadow-white-glow focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
      >
        <a href="https://discord.gg/Rzj3NMB7" target="_blank" rel="noopener noreferrer">
          JOIN DISCORD
        </a>
      </Button>
    </div>
  );
}
