// const { mode } = useContext<TokenTheme>(ThemeContext);

import { useContext } from "react";
import { TokenTheme } from "..";
import { ThemeContext } from "styled-components";

const useTokenTheme = () => {
	return useContext<TokenTheme>(ThemeContext);
};

export default useTokenTheme;
