import SpacingTokens from "../types/SpacingTokens";

const useSpacingTokens = () => {
  return {
    spacerSm1: '0.125rem',
    spacerSm2: '0.25rem',
    spacerSm3: '0.5rem',
    spacerMd2: '1rem',
    spacerMd3: '1.5rem',
    spacerLg1: '2rem',
    spacerLg2: '2.5rem',
    spacerLg3: '3rem',
  } as SpacingTokens;
};

export default useSpacingTokens;
