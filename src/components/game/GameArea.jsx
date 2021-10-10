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
    if (!engineRef.current) return;
    engineRef.current.proccessBlocks(getJsCode);
  }, [getJsCode]);
  function resizeCanvas() {
    const { height, width } = containerRef.current.getBoundingClientRect();
    if (!width && !height) {
      return;
    }
    engineRef.current.resize(width, height);
  }
  useEffect(() => {
    engineRef.current = new Engine(canvasRef.current);
    resizeCanvas();
    //  engineRef.current.drawImage(duckImage, 10, 10, 50, 50);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resizeCanvas);
  }, []);
  return (
    <div className="game-area" ref={containerRef}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
