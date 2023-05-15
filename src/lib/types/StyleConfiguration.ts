export type StyleMode = "light" | "dark";

export default interface StyleConfiguration {
  mode: StyleMode;
  accentPalette: string | null;
  accentColor: string;
}
