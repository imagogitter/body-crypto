
import React from 'react';
import Section from '../components/Section';

const IncongruencyItem = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-6 p-4 border border-border-color bg-base-bg rounded-lg">
        <h3 className="text-xl font-bold text-yellow-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            {title}
        </h3>
        <div className="text-secondary-text mt-2 leading-relaxed prose prose-invert prose-p:text-secondary-text prose-strong:text-primary-text">
            {children}
        </div>
    </div>
);

const AnalysisView: React.FC = () => {
  return (
    <Section title="Analysis & Incongruencies" subtitle="An examination of ambiguities, unaddressed challenges, and potential contradictions within the patent document.">
      
        <IncongruencyItem title="Security and Falsification">
            <p>
                <strong>The Claim:</strong> The patent asserts that body activity data can serve as a secure proof-of-work because it's generated unconsciously and that the system can filter out "faking body activity."
            </p>
            <p>
                <strong>The Ambiguity:</strong> The document is critically vague on <strong>how</strong> this is achieved. It mentions setting a "target range" based on statistical data but provides no mechanism for how this range would be secure. Brain-computer interfaces (BCIs) and neurofeedback are active areas of research, and it's plausible that a user could learn to consciously manipulate their brainwaves or other physiological signals to meet the required "target range" without actually performing the intended task. The patent fails to address the cat-and-mouse game of users developing "bots" (either software or mental techniques) to game the system.
            </p>
        </IncongruencyItem>

        <IncongruencyItem title="Privacy Implications">
            <p>
                <strong>The System:</strong> The core function requires continuous monitoring and processing of highly sensitive, personal biometric data, including brain activity.
            </p>
            <p>
                <strong>The Omission:</strong> The patent completely overlooks the enormous privacy implications. It doesn't discuss data encryption in transit (beyond hashing the final output), storage security, user consent, or the potential for misuse of this data. A system that knows a user's physiological and neurological response to stimuli (like advertisements) would be an unprecedented tool for surveillance and manipulation, yet these ethical and practical challenges are not addressed.
            </p>
        </IncongruencyItem>
        
        <IncongruencyItem title="Individual Variability">
            <p>
                <strong>The Assumption:</strong> The system works by verifying that body activity falls within a "target range" or has similarity to a "legitimate vector." This assumes a degree of uniformity in human physiological responses.
            </p>
            <p>
                <strong>The Challenge:</strong> Body activity varies dramatically between individuals due to factors like age, health, stress levels, medication, and neurological differences. A baseline or "target" that works for one person would be completely invalid for another. The patent does not describe any process for individual calibration, adaptation, or how the system would handle neurodivergent users, rendering the proposed verification method unreliable without significant, unmentioned personalization features.
            </p>
        </IncongruencyItem>
        
        <IncongruencyItem title="Task Provider Ambiguity">
             <p>
                <strong>The Incongruency:</strong> FIG. 1 clearly depicts a "Task Server (110)" as a distinct entity that provides tasks to the user. However, the text ([0023]) states: "Alternatively, cryptocurrency system 150 may provide one or more tasks to user device 130."
            </p>
            <p>
                This creates a slight architectural ambiguity. Is the task provider a separate, third-party entity (like an ad network), or is it the cryptocurrency network itself? This distinction is important for understanding the economic model and data flow, but the patent treats both possibilities as interchangeable without exploring the different implications.
            </p>
        </IncongruencyItem>

    </Section>
  );
};

export default AnalysisView;
