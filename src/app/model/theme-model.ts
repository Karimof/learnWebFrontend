import {ICourse} from "./course-model";

export interface ITheme {
  id?: number;
  title?: string;
  course?: ICourse;
  submenuId?: number;
}

export class Theme implements ITheme {
  constructor(
    public id?: number,
    public code?: string,
    public course?: ICourse,
    public  submenuId?: number
  ) {
  }
}

export function getThemeIdentifier(theme: ITheme): number | undefined {
  return theme.id;
}
