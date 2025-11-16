
import React from 'react';
import Section from '../components/Section';

const Icon = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white ${className}`}>
    {children}
  </div>
);

const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const SensorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const DeviceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
const ServerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>;
const CloudIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>;
const ComputeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 16v-2m8-8h2M4 12H2m15.364 6.364l1.414 1.414M4.222 4.222l1.414 1.414m12.728 0l-1.414 1.414M5.636 18.364l-1.414 1.414" /></svg>;

const Node = ({ icon, title, id, description }: { icon: React.ReactNode, title: string, id: string, description: string }) => (
  <div className="flex flex-col items-center text-center">
    {icon}
    <div className="mt-2">
      <div className="font-bold text-primary-text">{title}</div>
      <div className="text-sm text-secondary-text">({id})</div>
      <div className="text-xs text-secondary-text mt-1 max-w-[150px]">{description}</div>
    </div>
  </div>
);

const Arrow = ({ from, to }: { from: string, to: string }) => {
  // This is a simplified arrow using divs. For complex layouts, SVG is better.
  return <div className="absolute top-1/2 left-1/2 w-px h-full bg-border-color -translate-x-1/2 -translate-y-1/2"></div>;
};

const ArchitectureView: React.FC = () => {
  return (
    <>
      <Section title="System Architecture" subtitle="Based on FIG. 1 of the patent documentation.">
        <div className="relative p-8 flex flex-col items-center space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-16 lg:items-center">
          
          <Node icon={<Icon><ServerIcon /></Icon>} title="Task Server" id="110" description="Provides tasks to the user device (e.g., ads, services)." />
          
          <div className="flex flex-col items-center space-y-8">
            <Node icon={<Icon><CloudIcon /></Icon>} title="Communication Network" id="120" description="Connects all system components (e.g., the internet)." />
            <div className="flex items-center space-x-8">
              <Node icon={<Icon><SensorIcon /></Icon>} title="Sensor" id="140" description="Senses body activity. Can be separate or integrated." />
              <Node icon={<Icon><DeviceIcon /></Icon>} title="User Device" id="130" description="Receives tasks and processes sensor data." />
            </div>
            <Node icon={<Icon><UserIcon /></Icon>} title="User" id="145" description="Performs the task, generating body activity." />
          </div>

          <Node icon={<Icon><CloudIcon/></Icon>} title="Cryptocurrency System" id="150" description="Verifies data and awards cryptocurrency." />

          {/* Connectors would be complex. This is a conceptual layout */}
        </div>
        <p className="mt-8 text-center text-secondary-text">This diagram illustrates the main entities involved. A task originates from a server (110), is performed by a user (145) via their device (130), with their body activity being monitored by a sensor (140). The resulting data is verified by the cryptocurrency system (150), all interconnected via a communication network (120).</p>
      </Section>
      
      <Section title="Decentralized Network Architecture" subtitle="Based on FIG. 2, illustrating a blockchain implementation of the Cryptocurrency System (150).">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
             <div className="lg:col-span-3 text-center mb-4 flex justify-center">
                <Node icon={<Icon><CloudIcon /></Icon>} title="Communication Network" id="120" description="Connects all compute resources." />
             </div>
             {[1, 2, 3, 4].map(i => (
                 <div key={i} className="flex justify-center lg:col-start-auto">
                    <div className="bg-base-bg p-4 rounded-lg border border-border-color text-center w-56">
                        <div className="flex items-center justify-center mb-2">
                           <ComputeIcon />
                           <h4 className="font-bold ml-2">Compute Resource {i} (210)</h4>
                        </div>
                        <div className="text-sm text-secondary-text">An anonymous node in the network.</div>
                        <div className="mt-4 p-2 bg-sidebar-bg rounded border border-border-color">
                           <p className="font-semibold">Memory (220)</p>
                           <div className="mt-2 p-2 bg-base-bg rounded border border-border-color">
                               <p className="font-semibold">Ledger (230)</p>
                               <p className="text-xs text-secondary-text">A copy of the blockchain.</p>
                           </div>
                        </div>
                    </div>
                </div>
             ))}
         </div>
         <p className="mt-8 text-center text-secondary-text">This shows how the Cryptocurrency System can be decentralized. Instead of a single central server, the network consists of multiple compute resources (210), or nodes. Each node maintains a copy of the public ledger (230), ensuring data integrity and removing the need for a central authority. The user's device itself could act as one of these nodes.</p>
      </Section>
    </>
  );
};

export default ArchitectureView;
