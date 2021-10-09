import { PAGE_APP, PAGE_CODE, PAGE_MIX } from '../constants';

export const Navigator = ({ onCode, onMix, onApp, currentPage }) => {
  return (
    <nav className="navigator">
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
