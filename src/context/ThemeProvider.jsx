import React, { useContext, useState } from "react";

// Change Theme
import { ChangeCssVariables } from "../services/ChangeCssVariables";

// Theme
export const Theme_Default = "default";
export const Theme_Detdom = "detdom";
export const Theme_Lcom = "lcom";

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(null);

  // Changes css variables in the theme.
  const change = (name) => {
    setTheme(name);
    ChangeCssVariables(name);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        change,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// exports
export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
