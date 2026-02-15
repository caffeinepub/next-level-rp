import { useEffect, useState } from 'react';

export function ServerStatus() {
  const [status, setStatus] = useState('Checking...');

  useEffect(() => {
    // Simulate the status check from the original HTML
    setStatus('ONLINE');
  }, []);

  return (
    <p className="text-xl md:text-2xl font-semibold text-green-400">
      {status}
    </p>
  );
}
