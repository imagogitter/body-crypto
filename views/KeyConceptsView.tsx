
import React from 'react';
import Section from '../components/Section';

const Concept = ({ term, children }: { term: string, children: React.ReactNode }) => (
    <div className="mb-6 p-4 border-l-4 border-accent bg-accent/10 rounded-r-lg">
        <h3 className="text-xl font-bold text-primary-text">{term}</h3>
        <div className="text-secondary-text mt-2 leading-relaxed">{children}</div>
    </div>
);

const KeyConceptsView: React.FC = () => {
  return (
    <Section title="Key Concepts" subtitle="Definitions and explanations of core ideas presented in the patent.">
        <Concept term="Body Activity Data">
            This is the central idea of the patent. It refers to data generated from physiological processes occurring in the human body. The patent provides several examples:
            <ul className="list-disc list-inside mt-2 pl-4 space-y-1">
                <li><strong className="text-primary-text">Brain Waves:</strong> Electrical activity in the brain (e.g., gamma, beta, alpha waves) measured by sensors like EEG.</li>
                <li><strong className="text-primary-text">Body Fluid Flow:</strong> Changes in blood flow, particularly cerebral blood flow, which is correlated with brain activity and can be measured by fMRI scanners.</li>
                <li><strong className="text-primary-text">Body Radiation:</strong> Heat emitted from the body, which can fluctuate based on metabolic activity.</li>
                <li><strong className="text-primary-text">Other Activities:</strong> The patent also broadly includes pulse rate, organ activity, and physical movements like eye or facial movements.</li>
            </ul>
        </Concept>
        <Concept term="Proof-of-Work">
            In traditional cryptocurrencies, this is a mechanism that requires significant computational effort to deter malicious use of computing power. This patent redefines "work" not as a computational puzzle, but as the verifiable, subconscious physiological response of a human performing a task. The "proof" is the body activity data that meets specific criteria.
        </Concept>
         <Concept term="Sensor">
            A device used to measure and sense body activity. The patent suggests these can be external devices or integrated into a user's device (like a smartwatch or smart glasses). Examples include:
             <ul className="list-disc list-inside mt-2 pl-4">
                 <li>Functional Magnetic Resonance Imaging (fMRI) scanners</li>
                 <li>Electroencephalography (EEG) sensors</li>
                 <li>Heart rate monitors</li>
                 <li>Thermal and optical sensors</li>
             </ul>
        </Concept>
        <Concept term="Hashing">
            A cryptographic process that converts an arbitrary amount of data into a fixed-size string of characters (a hash). This process is one-way, meaning it's computationally infeasible to reverse. In the patent, body activity data is hashed to create a secure and verifiable "proof-of-work" for a blockchain transaction.
        </Concept>
        <Concept term="Vectors / Embeddings">
            An alternative to direct hashing where a machine learning model converts complex data (like a brain image) into a numerical representation (a vector). These vectors can then be mathematically compared for properties like similarity, which can be used to verify if the body activity is legitimate and corresponds to the given task.
        </Concept>
    </Section>
  );
};

export default KeyConceptsView;
