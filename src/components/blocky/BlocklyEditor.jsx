import React, { useRef, useEffect } from 'react';
import 'blockly';
import 'blockly/javascript';
import { gameSetup } from './custom/gameSetup';
import Blockly from 'blockly/core';
import locale from 'blockly/msg/en';
import 'blockly/blocks';
import { toolbox } from './toolbox';

Blockly.setLocale(locale);

export const BlocklyEditor = ({ currentPage, initialXml, children: toolBox, ...props }) => {
  const editorRef = useRef();
  const containerRef = useRef();
  let workspaceRef = useRef();
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
    gameSetup(Blockly);
    workspaceRef.current = Blockly.inject(editorRef.current, {
      toolbox,
      ...props,
    });
    new ResizeObserver(resizeBlockly).observe(containerRef.current);
  });
  useEffect(() => {
    if (initialXml) {
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), workspaceRef.current);
    }
  }, [initialXml]);
  useEffect(() => {}, [currentPage]);
  return (
    <div className="blockly-container" ref={containerRef}>
      <div ref={editorRef} id="blocklyDiv"></div>
    </div>
  );
};
