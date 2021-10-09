import { PAGE_APP, PAGE_CODE, PAGE_MIX } from '../constants';

export const ContentWrapper = ({ children, currentPage }) => {
  const classMap = {
    [PAGE_APP]: 'is-app',
    [PAGE_CODE]: 'is-code',
    [PAGE_MIX]: 'is-mix',
  };
  let className = `content-wrapper ${classMap[currentPage]}`;
  return <div className={className}>{children}</div>;
};
