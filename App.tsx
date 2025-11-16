
import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import IntroductionView from './views/IntroductionView';
import ArchitectureView from './views/ArchitectureView';
import ProcessFlowView from './views/ProcessFlowView';
import BlockchainView from './views/BlockchainView';
import AnalysisView from './views/AnalysisView';
import KeyConceptsView from './views/KeyConceptsView';
import UMLView from './views/UMLView';

export type ViewType = 'introduction' | 'architecture' | 'process' | 'blockchain' | 'concepts' | 'analysis' | 'uml';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('introduction');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const renderView = useCallback(() => {
    switch (activeView) {
      case 'introduction':
        return <IntroductionView />;
      case 'architecture':
        return <ArchitectureView />;
      case 'process':
        return <ProcessFlowView />;
      case 'blockchain':
        return <BlockchainView />;
      case 'concepts':
        return <KeyConceptsView />;
      case 'analysis':
        return <AnalysisView />;
      case 'uml':
        return <UMLView />;
      default:
        return <IntroductionView />;
    }
  }, [activeView]);

  return (
    <div className="flex h-screen bg-base-bg text-primary-text">
      {/* Sidebar for larger screens */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
         <Sidebar activeView={activeView} setActiveView={(view) => { setActiveView(view); setSidebarOpen(false); }} />
      </div>
      {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)}></div>}

      <div className="flex flex-col flex-1 min-w-0">
        {/* Header with Hamburger Menu */}
        <header className="flex lg:hidden items-center justify-between p-4 bg-sidebar-bg border-b border-border-color sticky top-0 z-20">
            <h1 className="text-xl font-bold text-accent">Patent Visualizer</h1>
            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                 {renderView()}
            </div>
        </main>
      </div>
    </div>
  );
};

export default App;
