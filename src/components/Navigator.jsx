import { PAGE_APP, PAGE_CODE, PAGE_MIX, PAGE_SETTINGS } from '../constants';

export const Navigator = ({ onCode, onMix, onApp, onSettings, currentPage }) => {
  return (
    <nav className="navigator">
      <div className="menu-item" onClick={onSettings} data-is-current={currentPage === PAGE_SETTINGS}>
        Settings
      </div>
      <div className="menu-item" onClick={onCode} data-is-current={currentPage === PAGE_CODE}>
        Code
      </div>
      <div className="menu-item" onClick={onMix} data-is-current={currentPage === PAGE_MIX}>
        Mix
      </div>
      <div className="menu-item" onClick={onApp} data-is-current={currentPage === PAGE_APP}>
        App
      </div>
    </nav>
  );
};
