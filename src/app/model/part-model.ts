import {ITheme} from "./theme-model";
import {IMedia} from "./media-model";

export interface IPart {
  id?: number;
  title?: string;
  description?: string;
  question?: string;
  codeTitle?: string;
  codeDescription?: string;
  code?: string;
  fullCode?: string;
  result?: string;
  additional?: string;
  theme?: ITheme;
  media?: IMedia;
  submenuId?: number;
  subSubmenuId?: number;
  belongToSubsub?: number;
  presentation?: string;
  test?: string;
  crossword?: string;
}

export class Theme implements IPart {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public question?: string,
    public codeTitle?: string,
    public codeDescription?: string,
    public code?: string,
    public fullCode?: string,
    public result?: string,
    public additional?: string,
    public theme?: ITheme,
    public media?: IMedia,
    public submenuId?: number,
    public subSubmenuId?: number,
    public belongToSubsub?: number,
    public presentation?: string,
    public test?: string,
    public crossword?: string,
  ) {
  }
}

export function getPartIdentifier(part: IPart): number | undefined {
  return part.id;
}
