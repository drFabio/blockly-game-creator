import { PAGE_APP, PAGE_CODE, PAGE_MIX, PAGE_SETTINGS } from '../constants';

export const ContentWrapper = ({ children, currentPage }) => {
  const classMap = {
    [PAGE_APP]: 'is-app',
    [PAGE_CODE]: 'is-code',
    [PAGE_MIX]: 'is-mix',
    [PAGE_SETTINGS]: 'is-settings',
  };
  let className = `content-wrapper ${classMap[currentPage]}`;
  return <div className={className}>{children}</div>;
};
