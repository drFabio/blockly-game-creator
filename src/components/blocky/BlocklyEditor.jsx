import React, { useRef, useEffect } from 'react';
import 'blockly';
import 'blockly/javascript';

import Blockly from 'blockly/core';
import locale from 'blockly/msg/en';
import 'blockly/blocks';

Blockly.setLocale(locale);

export const BlocklyEditor = ({ currentPage, initialXml, children: toolBox, ...props }) => {
  const editorRef = useRef();
  const containerRef = useRef();
  let workspaceRef = useRef();
  useEffect(() => {
    workspaceRef.current = Blockly.inject(editorRef.current, {
      toolbox: {
        kind: 'categoryToolbox',
        contents: [
          {
            kind: 'category',
            name: 'logic',
            colour: '210',
            contents: [
              {
                kind: 'block',
                type: 'controls_if',
              },
              {
                kind: 'block',
                type: 'controls_whileUntil',
              },
            ],
          },
        ],
      },
      ...props,
    });

    if (initialXml) {
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), workspaceRef.current);
    }
  }, [initialXml]);
  useEffect(() => {
    if (!workspaceRef.current) {
      return;
    }
    Blockly.svgResize(workspaceRef.current);
    // TODO!: Possible blockly bug, might want to conttribute, resize does not always resize height
    const { height } = containerRef.current.getBoundingClientRect().height;
    editorRef.current.querySelector('.blocklySvg').setAttribute('height', `${height}px`);
  }, [currentPage]);
  return (
    <div className="blockly-container" ref={containerRef}>
      <div ref={editorRef} id="blocklyDiv"></div>
    </div>
  );
};
