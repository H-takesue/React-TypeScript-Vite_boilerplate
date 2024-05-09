import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Canvas } from '@react-three/fiber';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Canvas
    shadows
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [4, 2, 6],
    }}
  >
    <App />
  </Canvas>,
);
