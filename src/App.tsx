import React, { useState } from 'react';
import CRTLayout from './components/UI/CRTLayout';
import BootSequence from './components/System/BootSequence';
import MainLayout from './components/Layout/MainLayout';

type SystemState = 'BOOT' | 'MAIN';

function App() {
  const [systemState, setSystemState] = useState<SystemState>('BOOT');

  const handleBootComplete = () => {
    setSystemState('MAIN');
  };

  return (
    <CRTLayout>
      <div className="h-full w-full">
        {systemState === 'BOOT' && <BootSequence onComplete={handleBootComplete} />}
        {systemState === 'MAIN' && <MainLayout />}
      </div>
    </CRTLayout>
  );
}

export default App;
