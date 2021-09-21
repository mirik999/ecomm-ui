import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    dimensions: {
      minusHeight: number;
    };
    colors: {
      container: string;
      main: string;
      black: string;
      white: string;
      border: string;
      secondaryTextColor: string;
      section: string;
      red: string;
      darkBlue: string;
      blue: string;
      purple: string;
      blueGreen: string;
    };
  }
}
