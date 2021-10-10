import React, { useRef, useEffect, useContext } from 'react';
import { WorkspaceContext } from '../../WorkspaceContext';
import Blockly from 'blockly/core';
import { initialize } from './initialize';

export const BlocklyEditor = ({ currentPage, children: toolBox, ...props }) => {
  const editorRef = useRef();
  const containerRef = useRef();
  let workspaceRef = useRef();
  const { setGetJsCode } = useContext(WorkspaceContext);
  function resizeBlockly() {
    if (!workspaceRef.current) {
      return;
    }

    Blockly.svgResize(workspaceRef.current);
    // TODO!: Possible blockly bug, might want to conttribute, resize does not always resize height
    const { height, width } = containerRef.current.getBoundingClientRect();
    console.info(`Resizing blockly to ${height}`);
    if (!height) {
      return;
    }
    editorRef.current.querySelector('.blocklySvg').setAttribute('height', `${height}px`);
    editorRef.current.querySelector('.blocklySvg').setAttribute('width', `${width}px`);
  }
  useEffect(() => {
    if (workspaceRef.current) return;
    workspaceRef.current = initialize(editorRef.current, setGetJsCode, props);

    new ResizeObserver(resizeBlockly).observe(containerRef.current);
  });

  useEffect(() => {}, [currentPage]);
  return (
    <div className="blockly-container" ref={containerRef}>
      <div ref={editorRef} id="blocklyDiv"></div>
    </div>
  );
};
