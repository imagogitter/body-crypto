
import React from 'react';
import Section from '../components/Section';

const FlowBox = ({ title, id, children, type = 'process' }: { title: string, id: string, children?: React.ReactNode, type?: 'process' | 'decision' | 'data' | 'terminal' }) => {
  const baseClasses = "border-2 p-4 text-center rounded-lg shadow-md min-w-[200px] max-w-xs mx-auto";
  const typeClasses = {
    process: "bg-accent/10 border-accent",
    decision: "bg-yellow-500/10 border-yellow-500 transform -skew-x-12",
    data: "bg-green-500/10 border-green-500",
    terminal: "bg-gray-500/10 border-gray-500 rounded-full"
  };
  const contentClasses = type === 'decision' ? 'transform skew-x-12' : '';
  
  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      <div className={contentClasses}>
        <div className="font-bold text-primary-text">{title}</div>
        <div className="text-sm text-secondary-text font-mono">({id})</div>
        {children && <div className="text-xs text-secondary-text mt-2">{children}</div>}
      </div>
    </div>
  );
};

const Arrow = ({ label }: { label?: string }) => (
  <div className="flex justify-center items-center my-2">
    {label && <span className="text-xs text-secondary-text px-2 bg-base-bg">{label}</span>}
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary-text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
  </div>
);

const ProcessFlowView: React.FC = () => {
  return (
    <>
      <Section title="Core Process Flow" subtitle="Based on FIG. 3. This outlines the high-level method from task assignment to reward.">
        <div className="flex flex-col items-center">
          <FlowBox title="Provide Task" id="310" type="process">From Task Server to User Device</FlowBox>
          <Arrow />
          <FlowBox title="Sense User Body Activity" id="320" type="process">Sensor measures user's response to the task.</FlowBox>
          <Arrow />
          <FlowBox title="Generate Body Activity Data" id="330" type="process">User device converts sensor readings into data.</FlowBox>
          <Arrow />
          <FlowBox title="Verify Body Activity Data" id="340" type="process">Cryptocurrency system validates the data.</FlowBox>
          <Arrow />
          <FlowBox title="Award Cryptocurrency" id="350" type="terminal">User is rewarded if data is verified.</FlowBox>
        </div>
      </Section>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Section title="Data Generation Detail" subtitle="Based on FIG. 4. A closer look at step (330).">
          <div className="flex flex-col items-center">
             <FlowBox title="Codify Sensed Body Activity" id="410" type="data">Convert raw sensor signals (e.g., brainwaves) into a structured format.</FlowBox>
             <Arrow />
             <FlowBox title="Generate Hash" id="420" type="process">Apply an encryption algorithm to the codified data to create a unique, fixed-size hash.</FlowBox>
          </div>
        </Section>

        <Section title="Verification Process Detail" subtitle="Based on FIG. 5. A closer look at step (340).">
          <div className="flex flex-col items-center">
             <FlowBox title="Hash is Within Target Range?" id="510" type="decision">Checks if the hash meets predefined criteria (e.g., specific patterns, numerical value).</FlowBox>
             <Arrow label="Yes" />
             <FlowBox title="Rehash Data of Body Activity" id="520" type="process">The system independently re-calculates the hash from pre-hash data to prevent fraud.</FlowBox>
             <Arrow />
             <FlowBox title="Rehashed Data = Received Hash?" id="530" type="decision">Compares the system's hash with the user's submitted hash.</FlowBox>
             <p className="text-center text-secondary-text my-2">If 'No' at any step, process fails. If 'Yes' to both, proceed to award (350).</p>
          </div>
        </Section>
      </div>

      <Section title="Alternative Method: Vectors" subtitle="Based on FIG. 7. An alternative flow using vectors (embeddings) instead of direct hashing.">
        <div className="flex flex-col items-center">
          <p className="text-center text-secondary-text mb-4">Steps (310) and (320) are the same.</p>
          <div className="font-bold text-accent border-2 border-dashed border-accent p-4 rounded-lg">
            <h4 className="text-center text-lg mb-4">Data Generation (330)</h4>
            <FlowBox title="Produce Vector(s)" id="710" type="data">A machine learning model converts body activity (e.g., fMRI image) into numerical vectors.</FlowBox>
            <Arrow />
            <FlowBox title="Generate Hash (Optional)" id="720" type="process">The vector(s) can optionally be hashed.</FlowBox>
          </div>
          <Arrow />
           <div className="font-bold text-yellow-500 border-2 border-dashed border-yellow-500 p-4 rounded-lg mt-4">
            <h4 className="text-center text-lg mb-4">Verification (340)</h4>
            <FlowBox title="Vector(s) Have Desirable Mathematical Property?" id="740" type="decision">Checks if vectors have similarity to a legitimate baseline vector.</FlowBox>
             <Arrow label="Yes"/>
            <FlowBox title="Rehash Data of Body Activity" id="750" type="process">System re-generates vector from raw data.</FlowBox>
             <Arrow />
            <FlowBox title="Rehashed Data = Received Vectors?" id="760" type="decision">Compares system-generated vector with the submitted one.</FlowBox>
          </div>
          <p className="text-center text-secondary-text mt-4">If verification succeeds, proceed to award (350).</p>
        </div>
      </Section>
    </>
  );
};

export default ProcessFlowView;
