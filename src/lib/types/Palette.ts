type Palette = {
  "00": string;
  "05": string;
  "10": string;
  "20": string;
  "30": string;
  "40": string;
  "50": string;
  "60": string;
  "70": string;
  "80": string;
  "90": string;
};

export type LimitedPalette = Omit<Palette, 'transparent1' | 'transparent2' | 'transparent3'>;

export type ExpandedPalette = Palette & {
  "15": string;
  "25": string;
  transparent1: string;
  transparent2: string;
  transparent3: string;
}

export default Palette;
