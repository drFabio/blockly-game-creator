import { useRef, useEffect, useContext } from 'react';
import { Engine } from './Engine';
import { WorkspaceContext } from '../../WorkspaceContext';
import duckImage from '/images/duck.png';

export const GameArea = () => {
  const containerRef = useRef();
  const canvasRef = useRef();
  const engineRef = useRef();
  const { getJsCode } = useContext(WorkspaceContext);

  useEffect(() => {
    console.log(`CODE CHANGE`, getJsCode);
  }, [getJsCode]);
  function resizeCanvas() {
    const { height, width } = containerRef.current.getBoundingClientRect();
    if (!width && !height) {
      return;
    }
    const size = 100 * Math.floor(Math.min(height, width) / 100);
    canvasRef.current.setAttribute('width', `${size}px`);
    canvasRef.current.setAttribute('height', `${size}px`);
    const ctx = canvasRef.current.getContext('2d');

    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, size, size);
    canvasRef.current.style.display = 'block';
  }
  useEffect(() => {
    resizeCanvas();

    engineRef.current = new Engine(canvasRef.current);
    engineRef.current.drawImage(duckImage, 10, 10, 50, 50);
  });

  useEffect(() => {
    window.addEventListener('resize', resizeCanvas);
  });
  return (
    <div className="game-area" ref={containerRef}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
