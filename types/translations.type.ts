export interface ITranslations {
  keyword: string;
  translation: {
    AZ: string;
    EN: string;
    TR: string;
  };
}

export interface ITranslationResponse {
  getTranslations: {
    count: number;
    payload: ITranslations[];
  };
}
