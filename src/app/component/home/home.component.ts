import { Component } from '@angular/core';
import {AppComponent} from "../../app.component";
import {PartService} from "../../service/part/part.service";
import {ThemeComponent} from "../theme/theme.component";
import {IPart} from "../../model/part-model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  protected readonly AppComponent = AppComponent;
  parts?: IPart[] | null;

  constructor(protected partService: PartService) {
  }

  public byType(themeId: number, submenuId: number): void {
    ThemeComponent.selectedParts = null
    this.partService.byType(themeId, submenuId).subscribe( res => {
      if(res.body){
        this.parts = res.body;
        ThemeComponent.themes = undefined
      }
    })
  }

}
