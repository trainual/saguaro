// const { mode } = useContext<SaguaroTheme>(ThemeContext);

import { useContext } from "react";
import { SaguaroTheme } from "..";
import { ThemeContext } from "styled-components";

const useSaguaroTheme = () => {
	return useContext<SaguaroTheme>(ThemeContext);
};

export default useSaguaroTheme;
