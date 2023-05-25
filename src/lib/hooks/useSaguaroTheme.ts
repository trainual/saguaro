import { useContext } from "react";
import { ThemeContext, useTheme } from "styled-components";

const useSaguaroTheme = () => {
	console.log(">>> ThemeContext: ", ThemeContext)
	console.log(">>> useContext: ", useContext)
	return useTheme();
};

export default useSaguaroTheme;
