import { WorkspaceContext } from '../WorkspaceContext';
import { useContext } from 'react';

export const Settings = () => {
  const { getWorkspaceXml } = useContext(WorkspaceContext);

  const showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      localStorage.setItem('blockly_saved_workspace', text);
    };
    reader.readAsText(e.target.files[0]);
  };

  const exportFile = () => {
    const blob = new Blob([getWorkspaceXml], { type: 'application/xml' });
    const dlink = document.createElement('a');
    dlink.download = 'munich_coding_club.xml';
    dlink.href = window.URL.createObjectURL(blob);
    dlink.onclick = function (e) {
      const that = this;
      setTimeout(function () {
        window.URL.revokeObjectURL(that.href);
      }, 1500);
    };
    dlink.click();
    dlink.remove();
  };
  return (
    <div className="settings">
      <h2>Settings</h2>

      <div className="innerWrapper">
        <fieldset>
          <legend>Import</legend>
          <p>Select a file that was previously exported</p>
          <div>
            <label htmlFor="importCode">Import code</label>
            <input type="file" id="importCode" name="importCode" onChange={showFile} />
          </div>
        </fieldset>
        <fieldset>
          <legend>Export</legend>
          <p>Click here to export your current code and use it later</p>
          <button onClick={exportFile}>Export code</button>
        </fieldset>
      </div>
    </div>
  );
};
