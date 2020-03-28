

export interface ThemeOptions {
    contentfulConfig: {
      accessToken: string;
      spaceId: string;
      environment: string;
      downloadLocal: boolean;
    }
  
    style: {
    layout: {

    },
      color: {
        primary: string;
        secondary: string;
      }
      body: {

      }
      font: {
        primary: string;
        secondary: string;
      }
    } 
  }
  