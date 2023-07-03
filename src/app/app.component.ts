import { Component } from '@angular/core';
import {PartService} from "./service/part/part.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IPart} from "./model/part-model";
import {ThemeComponent} from "./component/theme/theme.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnWebFrontend';
  parts?: IPart[] | null;

  constructor(
    protected partService: PartService,
    protected activatedRoute: ActivatedRoute,
    public router: Router,
  ) {
  }

  public byType(themeId: number, submenuId: number): void {
    this.partService.byType(themeId, submenuId).subscribe( res => {
      if(res.body){
        this.parts = res.body;
        ThemeComponent.themes = undefined
      }
    })
  }
}
