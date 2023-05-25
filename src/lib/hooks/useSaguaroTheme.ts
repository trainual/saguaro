import { useContext } from "react";
import { ThemeContext } from "styled-components";

import SaguaroTheme from "../types/SaguaroTheme";

const useSaguaroTheme = () => {
	console.log(">>> ThemeContext: ", ThemeContext)
	console.log(">>> useContext: ", useContext)
	return useContext<SaguaroTheme>(ThemeContext);
};

export default useSaguaroTheme;
