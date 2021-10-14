import { useContext, useEffect, useRef } from 'react';
import { PAGE_CODE } from '../../constants';
import { WorkspaceContext } from '../../WorkspaceContext';
import { Engine } from './Engine';

export const GameArea = ({ currentPage }) => {
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
    return () => {
      engineRef.current.tearDown();
    };
    //  engineRef.current.drawImage(duckImage, 10, 10, 50, 50);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);
  useEffect(() => {
    if (!containerRef.current) return;
    if (currentPage !== PAGE_CODE) {
      resizeCanvas();
    }
  }, [currentPage]);
  return (
    <div className="game-area" ref={containerRef}>
      <canvas
        ref={canvasRef}
        onClick={() => engineRef.current?.handleStart()}
        onBlur={() => console.log(`blur`)}
      ></canvas>
    </div>
  );
};
