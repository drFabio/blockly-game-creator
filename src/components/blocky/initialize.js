import { initializeCustomBlocks } from "./custom";
import { toolbox } from "./toolbox";
import Blockly from "blockly/core";
import "blockly";
import "blockly/javascript";
import "blockly/blocks";

import locale from "blockly/msg/en";
import { debounce } from "../../utils/debounce";

export function initialize(
  editor,
  setGetJsCode,
  setWorkspaceXml,
  { initialXml, ...props }
) {
  initializeCustomBlocks(Blockly);
  console.log(`initializing blockly`);
  Blockly.setLocale(locale);

  const workspace = Blockly.inject(editor, {
    toolbox,
    ...props,
  });
  const localStorageKey = "blockly_saved_workspace"; // 'blocklySavedWorkspace'

  const onChange = (event) => {
    const xml = Blockly.Xml.workspaceToDom(workspace);
    const text = Blockly.Xml.domToText(xml);
    setWorkspaceXml(text);
    localStorage.setItem(localStorageKey, text);
    setGetJsCode(Blockly.JavaScript.workspaceToCode(workspace));
  };
  const savedXML = localStorage.getItem(localStorageKey);
  setWorkspaceXml(savedXML);
  workspace.addChangeListener(debounce(onChange, 500));
  Blockly.Xml.domToWorkspace(
    Blockly.Xml.textToDom(savedXML || initialXml),
    workspace
  );
  setGetJsCode(Blockly.JavaScript.workspaceToCode(workspace));

  return workspace;
}
