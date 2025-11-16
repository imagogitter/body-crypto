
import React from 'react';
import Section from '../components/Section';

const Block = ({ id, currentHash, prevHash, task, awardedCrypto, isFirst = false }: { id: string, currentHash: string, prevHash: string, task: string, awardedCrypto: string, isFirst?: boolean }) => (
  <div className="bg-base-bg border-2 border-accent rounded-lg p-4 w-64 shadow-lg">
    <div className="text-center font-bold text-lg border-b border-border-color pb-2 mb-2">Block {id}</div>
    <div className="space-y-2 text-sm">
      <div>
        <span className="font-semibold text-secondary-text">Previous Hash:</span>
        <div className="font-mono text-red-400 break-words text-xs">{isFirst ? '0000000000000000' : prevHash}</div>
      </div>
      <div className="bg-sidebar-bg p-2 rounded">
        <span className="font-semibold text-secondary-text">Transaction:</span>
        <ul className="list-disc list-inside text-xs mt-1">
          <li>Task: {task}</li>
          <li>Award: {awardedCrypto}</li>
        </ul>
      </div>
       <div>
        <span className="font-semibold text-secondary-text">Proof-of-Work (Hash):</span>
        <div className="font-mono text-green-400 break-words text-xs">{currentHash}</div>
      </div>
    </div>
  </div>
);

const BlockchainView: React.FC = () => {
  return (
    <Section title="Blockchain Structure" subtitle="Based on FIG. 6. Illustrates how verified transactions are recorded on the blockchain.">
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4 p-4">
        
        <div className="text-2xl font-mono text-secondary-text">...</div>
        
        <Block 
          id="N-1" 
          prevHash="a1b2c3d4e5f6..."
          currentHash="f0e9d8c7b6a5..."
          task="Viewed 30s Advertisement"
          awardedCrypto="0.005 BTC"
        />

        <div className="text-4xl text-accent font-thin transform -translate-y-2 lg:rotate-0 rotate-90">&rarr;</div>
        
        <Block 
          id="N"
          prevHash="f0e9d8c7b6a5..."
          currentHash="1a2b3c4d5e6f..."
          task="Used Search Engine"
          awardedCrypto="0.002 BTC"
        />
        
        <div className="text-2xl font-mono text-secondary-text">...</div>

      </div>
      <div className="mt-8 text-secondary-text space-y-3">
        <p>When a user's body activity data is successfully verified, a new block is added to the blockchain. This block serves as a permanent, immutable record of the transaction.</p>
        <ul className="list-disc list-inside pl-4">
          <li><strong className="text-primary-text">Previous Hash:</strong> A cryptographic link to the preceding block in the chain. This is what makes the blockchain secure and immutable. Tampering with a previous block would change its hash, breaking the entire chain that follows.</li>
          <li><strong className="text-primary-text">Transaction Data:</strong> Contains information about the event, such as the task the user performed and the amount of cryptocurrency awarded.</li>
          <li><strong className="text-primary-text">Proof-of-Work (Current Hash):</strong> This is the validated hash of the user's body activity. It proves that the "work" was done and verified, securing the new block.</li>
        </ul>
      </div>
    </Section>
  );
};

export default BlockchainView;
