import {ITheme} from "./theme-model";

export interface IMedia {
  id?: number;
  title?: string;
  description?: string;
  photo?: string;
  video?: string;
  theme?: ITheme;
}

export class Media implements IMedia {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public photo?: string,
    public video?: string,
    public theme?: ITheme,
  ) {
  }
}

export function getMediaIdentifier(media: IMedia): number | undefined {
  return media.id;
}
