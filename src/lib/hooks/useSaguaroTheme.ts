import { useContext } from "react";
import { ThemeContext } from "styled-components";

import SaguaroTheme from "../types/SaguaroTheme";

const useSaguaroTheme = () => {
	return useContext<SaguaroTheme>(ThemeContext);
};

export default useSaguaroTheme;
