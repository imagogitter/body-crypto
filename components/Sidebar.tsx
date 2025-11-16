
import React from 'react';
import { ViewType } from '../App';

interface SidebarProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
}

interface NavItemProps {
  view: ViewType;
  label: string;
  Icon: React.ElementType;
  activeView: ViewType;
  onClick: (view: ViewType) => void;
}

const NavItem: React.FC<NavItemProps> = ({ view, label, Icon, activeView, onClick }) => {
  const isActive = activeView === view;
  return (
    <li
      className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-colors duration-200 ${
        isActive
          ? 'bg-accent text-white shadow-lg'
          : 'text-secondary-text hover:bg-border-color hover:text-primary-text'
      }`}
      onClick={() => onClick(view)}
    >
      <Icon className="w-6 h-6 mr-3" />
      <span className="font-medium">{label}</span>
    </li>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const iconProps = {
    strokeWidth: "1.5",
    className: "w-6 h-6 mr-3"
  };

  const HomeIcon = () => <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" /></svg>;
  const ChipIcon = () => <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V8.25a2.25 2.25 0 00-2.25-2.25H8.25a2.25 2.25 0 00-2.25 2.25v7.5a2.25 2.25 0 002.25 2.25z" /></svg>;
  const FlowIcon = () => <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>;
  const CubeIcon = () => <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>;
  const BookIcon = () => <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>;
  const WarningIcon = () => <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>;
  const DiagramIcon = () => <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>;


  return (
    <div className="flex flex-col w-64 h-full bg-sidebar-bg p-4 border-r border-border-color">
      <div className="flex items-center mb-8">
         <div className="p-2 bg-accent rounded-lg mr-3">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
         </div>
         <h1 className="text-xl font-bold text-primary-text whitespace-nowrap">Patent Visualizer</h1>
      </div>
      <nav>
        <ul>
          <NavItem view="introduction" label="Introduction" Icon={HomeIcon} activeView={activeView} onClick={setActiveView} />
          <NavItem view="architecture" label="System Architecture" Icon={ChipIcon} activeView={activeView} onClick={setActiveView} />
          <NavItem view="process" label="Process Flow" Icon={FlowIcon} activeView={activeView} onClick={setActiveView} />
          <NavItem view="blockchain" label="Blockchain Structure" Icon={CubeIcon} activeView={activeView} onClick={setActiveView} />
          <NavItem view="uml" label="UML & Architecture" Icon={DiagramIcon} activeView={activeView} onClick={setActiveView} />
          <NavItem view="concepts" label="Key Concepts" Icon={BookIcon} activeView={activeView} onClick={setActiveView} />
          <NavItem view="analysis" label="Analysis" Icon={WarningIcon} activeView={activeView} onClick={setActiveView} />
        </ul>
      </nav>
      <div className="mt-auto text-center text-secondary-text text-xs">
          <p>WO 2020/060606 A1</p>
          <p>&copy; Microsoft Technology Licensing, LLC</p>
      </div>
    </div>
  );
};

export default Sidebar;
