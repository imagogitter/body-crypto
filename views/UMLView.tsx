
import React from 'react';
import Section from '../components/Section';

const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mt-6 border-t border-border-color pt-6">
        <h3 className="text-2xl font-semibold text-accent mb-4">{title}</h3>
        {children}
    </div>
);

const IncongruencyNote = ({ children }: { children: React.ReactNode }) => (
    <div className="mt-4 p-3 border-l-4 border-yellow-400 bg-yellow-400/10 text-yellow-200 rounded-r-lg">
        <strong className="font-bold">Incongruency Detected:</strong>
        <div className="text-sm mt-1">{children}</div>
    </div>
);

const UMLClass = ({ name, attributes, methods }: { name: string, attributes: string[], methods: string[] }) => (
    <div className="bg-base-bg border border-border-color rounded-lg shadow-md w-full max-w-sm mx-auto mb-4">
        <div className="font-bold text-lg text-center bg-sidebar-bg p-2 rounded-t-lg border-b border-border-color">{name}</div>
        <div className="p-3 border-b border-border-color">
            <ul className="list-none text-sm space-y-1">
                {attributes.map(attr => <li key={attr} className="font-mono text-secondary-text"> <span className="text-accent">+</span> {attr}</li>)}
            </ul>
        </div>
        <div className="p-3">
            <ul className="list-none text-sm space-y-1">
                {methods.map(method => <li key={method} className="font-mono text-secondary-text"><span className="text-accent">+</span> {method}()</li>)}
            </ul>
        </div>
    </div>
);

const UMLView: React.FC = () => {
    return (
        <div>
            <Section title="Comprehensive Architecture Overview">
                <p className="text-secondary-text">This section provides a detailed breakdown of the system's static structure and dynamic behavior, based on the descriptions and diagrams in the patent document. It includes formal UML (Unified Modeling Language) diagrams to represent these aspects clearly.</p>

                <SubSection title="Core Components & Responsibilities">
                    <ul className="list-disc list-inside space-y-2 text-secondary-text">
                        <li><strong>User (Actor):</strong> The human entity who performs tasks to earn cryptocurrency. They are the source of the body activity.</li>
                        <li><strong>Task Server (110):</strong> A system responsible for providing tasks (e.g., viewing ads, using services) to the user's device. It acts as the trigger for the entire process.</li>
                        <li><strong>User Device (130):</strong> The user's personal computing device (e.g., phone, computer, wearable). It receives tasks, interfaces with the sensor, processes raw sensor data into the required format (hash or vector), and communicates with the cryptocurrency system.</li>
                        <li><strong>Sensor (140):</strong> A device that measures the user's physiological activity. The patent specifies it can be a separate component or integrated within the User Device. Its sole responsibility is to capture raw body activity (e.g., brainwaves, blood flow).</li>
                        <li><strong>Cryptocurrency System (150):</strong> The central processing and validation authority. It receives the generated body activity data from the User Device, verifies it against a set of conditions, and if successful, awards cryptocurrency and records the transaction on a blockchain.</li>
                        <li><strong>Communication Network (120):</strong> The underlying infrastructure (e.g., the internet) that enables communication between all other components.</li>
                    </ul>
                </SubSection>

                <SubSection title="UML: Use Case Diagram">
                    <p className="text-secondary-text mb-4">This diagram illustrates the primary functions (use cases) of the system from the perspective of the external actors.</p>
                    <div className="bg-base-bg p-4 border border-border-color rounded-lg">
                        <p><strong>Actor:</strong> User</p>
                        <p><strong>System:</strong> Cryptocurrency System using Body Activity Data</p>
                        <ul className="list-decimal list-inside ml-4 mt-2 space-y-1 text-secondary-text">
                            <li><strong>Earn Cryptocurrency:</strong> The primary goal of the User. This use case includes all sub-actions.
                                <ul className="list-disc list-inside ml-6">
                                    <li>Receive Task</li>
                                    <li>Perform Task (generates body activity)</li>
                                    <li>Submit Body Activity Data</li>
                                    <li>Receive Cryptocurrency Award</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </SubSection>

                <SubSection title="UML: Class Diagram">
                    <p className="text-secondary-text mb-4">This diagram shows the static structure of the system, including its classes, attributes, methods, and the relationships between them.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <UMLClass name="CryptocurrencySystem" attributes={["conditions: Condition[]"]} methods={["verifyData", "awardCurrency", "addNewBlock"]} />
                        <UMLClass name="UserDevice" attributes={["deviceId: string"]} methods={["receiveTask", "generateData", "transmitData"]} />
                        <UMLClass name="Sensor" attributes={["sensorType: string"]} methods={["senseBodyActivity"]} />
                        <UMLClass name="TaskServer" attributes={["serverUrl: string"]} methods={["provideTask"]} />
                        <UMLClass name="Blockchain" attributes={["chain: Block[]"]} methods={["getLatestBlock", "addBlock"]} />
                        <UMLClass name="Block" attributes={["previousHash: string", "transaction: Transaction", "proofOfWorkHash: string"]} methods={[]} />
                    </div>
                    <p className="text-center text-secondary-text mt-4"><strong>Relationships:</strong> A `CryptocurrencySystem` contains one `Blockchain`. A `Blockchain` is composed of many `Blocks`. A `UserDevice` is associated with one `Sensor`. The `UserDevice` communicates with the `TaskServer` and the `CryptocurrencySystem`.</p>
                     <IncongruencyNote>
                        The patent states a sensor may be "communicatively coupled to or comprised in the device of the user." This is modeled as a simple association for flexibility, but it implies two different physical architectures: one where the sensor is an internal component (Composition) and one where it is an external peripheral (Association).
                    </IncongruencyNote>
                </SubSection>

                <SubSection title="UML: Sequence Diagram">
                    <p className="text-secondary-text mb-4">This diagram illustrates the interactions between objects in a time-ordered sequence for a single "Earn Cryptocurrency" use case.</p>
                    <div className="font-mono text-sm text-secondary-text space-y-2 bg-base-bg p-4 border border-border-color rounded-lg overflow-x-auto">
                        <p>TaskServer --[1: provideTask()]--&gt; UserDevice</p>
                        <p>UserDevice --[2: (User Performs Task)]--&gt; User</p>
                        <p>Sensor --[3: senseBodyActivity()]--&gt; User</p>
                        <p>UserDevice --[4: generateBodyActivityData()]--&gt; Self</p>
                        <p>UserDevice --[5: transmitData(data)]--&gt; CryptocurrencySystem</p>
                        <p>CryptocurrencySystem --[6: verifyData(data)]--&gt; Self</p>
                        <p className="text-green-400 ml-4">--[IF valid]--&gt;</p>
                        <p className="ml-4">CryptocurrencySystem --[7a: awardCurrency(user)]--&gt; Self</p>
                        <p className="ml-4">CryptocurrencySystem --[7b: addNewBlock(transaction)]--&gt; Blockchain</p>
                        <p className="text-red-400 ml-4">--[ELSE invalid]--&gt;</p>
                        <p className="ml-4">CryptocurrencySystem --[8: (Process Ends/Fails)]--&gt; Self</p>
                    </div>
                    <IncongruencyNote>
                        Paragraph [0023] states, "Alternatively, cryptocurrency system 150 may provide one or more tasks to user device 130." This contradicts the primary flow where the `TaskServer` is the task originator. This suggests an alternative sequence where the `CryptocurrencySystem` initiates the process, collapsing the roles of Task Server and Crypto System. The diagram above depicts the primary sequence shown in FIG. 1.
                    </IncongruencyNote>
                </SubSection>
            </Section>
        </div>
    );
};

export default UMLView;
