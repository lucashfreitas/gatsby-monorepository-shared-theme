/*
TODO: fix interface for global name
*/

export interface SharedThemeQuery {
  sitePlugin: {
    pluginOptions: { theme: ThemeOptions; app: AppConfig; config: ThemeConfig };
  };
}

export interface ThemeOptions {
  colors: {
    primary: string;
    primaryHover: string;
    secondary: string;
    secondaryHover: string;
  };
}

export interface AppConfig {
  name: string;
}

export interface ThemeConfig {
  contentful: {
    environment: string;
    spaceId: string;
    accessToken: string;
    downloadLocal: boolean;
  };
}
