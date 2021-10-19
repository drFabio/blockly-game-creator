import { useContext, useEffect, useRef, useState } from 'react';
import { PAGE_CODE } from '../../constants';
import { WorkspaceContext } from '../../WorkspaceContext';
import { Engine } from './Engine';

export const GameArea = ({ currentPage }) => {
  const containerRef = useRef();
  const canvasRef = useRef();
  const engineRef = useRef();
  const [isGameRunning,setGameRunning] = useState(false)
  const { getJsCode } = useContext(WorkspaceContext);

  useEffect(() => {
    if (!engineRef.current) {
      
      return
    };
    if (isGameRunning) {
      engineRef.current.onGameUpdated()
    }
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
    if (engineRef.current) {
      return
    }
    engineRef.current = new Engine(canvasRef.current, () => setGameRunning(true), () => setGameRunning(false));
    resizeCanvas();
    engineRef.current.proccessBlocks(getJsCode);

    return () => {
      engineRef.current.tearDown();
    };

    //  engineRef.current.drawImage(duckImage, 10, 10, 50, 50);
  }, [getJsCode]);
  const info = isGameRunning ? 'Game Running' : 'Game stopped. Press enter to play'
  useEffect(() => {
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);
  useEffect(() => {
    if (!containerRef.current) return;
    resizeCanvas();
  }, [currentPage]);
  return (
    <div className="game-area" >
      <p className="info">{info}</p>
      <div className="container" ref={containerRef}>
        <canvas
          ref={canvasRef}
          onBlur={() => console.log(`blur`)}
        ></canvas>  
      </div>
      
    </div>
  );
};
