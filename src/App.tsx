import React from 'react';
import {
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
} from '@react-three/drei';

const App: React.FC = () => {
  return (
    <>
      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <Environment preset="city" />
      <color args={['#241a1a']} attach="background" />
      <mesh position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="pink" />
      </mesh>
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={'#ffffff'}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
};

export default App;
