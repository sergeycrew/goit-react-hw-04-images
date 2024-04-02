import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="120"
      width="120"
      ariaLabel="magnifying-glass-loading"
      wrapperClass="magnifying-glass-wrapper"
      glassColor="#c0efff"
      color="blue"
    />
  );
};
