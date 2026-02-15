import { Header } from './components/NextLevel/Header';
import { CtaButtons } from './components/NextLevel/CtaButtons';
import { CardShell } from './components/NextLevel/CardShell';
import { ServerStatus } from './components/NextLevel/ServerStatus';
import { Footer } from './components/NextLevel/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center">
        <Header />
        <CtaButtons />
        
        <section className="w-full max-w-6xl px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <CardShell>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan">Server Status</h2>
              <ServerStatus />
            </CardShell>
            
            <CardShell>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan">Custom Skins & Vehicles</h2>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                FiveM-style custom models, realistic vehicles, unique RP skins.
              </p>
            </CardShell>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
