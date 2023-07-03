import {Component} from '@angular/core';
import {ITheme} from "../../model/theme-model";
import {ThemesService} from "../../service/theme/themes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";
import {IPart} from "../../model/part-model";
import {PartService} from "../../service/part/part.service";

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
  mapThemes?: Map<number, ITheme[]> = new Map<number, ITheme[]>();
  public static themes?: ITheme[] = [];
  subThemes?: ITheme[] = [];
  parts?: IPart[] | null;
  static selectedParts?: IPart[] | null;
  oldPressed?: number = 0;
  oldSubPressed: number = 0;
  subThemeId?: number = 0;
  isSelectedPart?: boolean;

  constructor(
    protected themeService: ThemesService,
    protected partService: PartService,
    protected activatedRoute: ActivatedRoute,
    public router: Router,
  ) {
  }

  ngOnInit(): void {
    this.themeService.query().subscribe( res => {
        if(res.body){
          this.mapThemes = res.body;
          this.separateMap(res.body)
        }
    })
  }

  separateMap(asd: Map<number, ITheme[]>): void {
    Object.values(asd).forEach(theme => ThemeComponent.themes?.push(theme[0]))
  }

  getSubTheme(themeId: number): void {
    this.oldSubPressed = 0;
    this.subThemeId = themeId;
    this.themeService.getSubThemes(themeId).subscribe({
      next: (res: HttpResponse<ITheme[]>) => {
        this.subThemes = res.body!;
      },
    })

    let byId = document.getElementById(themeId.toString());
    let byIdOld = document.getElementById(this.oldPressed!.toString());

    let subMenu = document.getElementById(themeId.toString() + 'submenu')
    let subMenuOld = document.getElementById(this.oldPressed!.toString() + 'submenu')

    if (this.oldPressed !== 0) {
      byIdOld!.className = this.oldPressed!.toString()
      subMenuOld!.style.display = 'none'
    }
    byId!.className = "active"
    subMenu!.style.display = 'inline-block'
    this.oldPressed = themeId;
  }

  partsBySubmenuId(subThemeId: number) {
    this.subThemeId = subThemeId;
    this.isSelectedPart = false;
    ThemeComponent.selectedParts = null
    this.partService.partBySubmenuId(subThemeId).subscribe({
      next: (res: HttpResponse<IPart[]>) => {
        this.parts = res.body;
      },
    })
    let pressedSubMenu = document.getElementById(subThemeId.toString());
    let OldPressedSubMenu = document.getElementById(this.oldSubPressed!.toString());

    let subMenu = document.getElementById(subThemeId.toString() + 'subsub')
    let subMenuOld = document.getElementById(this.oldSubPressed!.toString() + 'subsub')

    if (this.oldSubPressed !== 0) {
      OldPressedSubMenu!.className = this.oldSubPressed.toString()
      // subMenuOld!.style.display = 'none'
    }
    pressedSubMenu!.className = "active"
    // subMenu!.style.display = "inline-block"
    this.oldSubPressed = subThemeId;
  }

  showSelectedPart(subSubmenuId: number) {
    this.isSelectedPart = true
    this.partService.partBySubSubmenuId(this.subThemeId!, subSubmenuId).subscribe({
      next: (res: HttpResponse<IPart[]>) => {
        ThemeComponent.selectedParts  = res.body;
      },
    })
  }

  getThemes(){
    return ThemeComponent.themes;
  }

  getSelectedPart(){
    return ThemeComponent.selectedParts;
  }

  protected readonly ThemesService = ThemesService;
}
