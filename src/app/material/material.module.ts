import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

const MaterialsComponents : any = [  MatSliderModule   ]

@NgModule({
  imports: [MaterialsComponents],
  exports:[MaterialsComponents]
})
export class MaterialModule { }
