import SpacingTokens from "../types/SpacingTokens";

const useSpacingTokens = () => {
  return {
    spacer2xs: '0.125rem',
    spacerXs: '0.25rem',
    spacerSm: '0.5rem',
    spacerMd: '1rem',
    spacerLg: '1.5rem',
    spacerXl: '2rem',
    spacer2xl: '2.5rem',
    spacer3xl: '3rem',
  } as SpacingTokens;
};

export default useSpacingTokens;
