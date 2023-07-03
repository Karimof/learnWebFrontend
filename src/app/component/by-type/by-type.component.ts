import {Component} from '@angular/core';
import {IPart} from "../../model/part-model";
import {ThemesService} from "../../service/theme/themes.service";
import {PartService} from "../../service/part/part.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-by-type',
  templateUrl: './by-type.component.html',
  styleUrls: ['./by-type.component.css']
})
export class ByTypeComponent {
  parts?: IPart[] | null;

  constructor(
    protected partService: PartService,
    protected activatedRoute: ActivatedRoute,
    public router: Router,
  ) {
  }

  byType(themeId: number, submenuId: number): void {
    this.partService.byType(themeId, submenuId).subscribe( res => {
      if(res.body){
        this.parts = res.body;
      }
    })
  }

}
