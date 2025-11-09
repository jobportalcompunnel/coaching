import {createContext} from "react";
interface Record {
  foreground: string;
  background: string;
}
interface Color {
  light?: Record;
  dark?: Record;
  themecolor?: string
}
const ThemeContext = createContext<Color>({});
const ThemeContext2: any = createContext(null);
export default ThemeContext;

