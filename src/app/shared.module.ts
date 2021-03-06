import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoBoxComponent } from './commons/info-box/info-box.component';
import { InfoBoxItemComponent } from './commons/info-box/info-box-item/info-box-item.component';
import { TagsComponent } from './commons/tags/tags.component';
import { TagItemComponent } from './commons/tags/tag-item/tag-item.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    InfoBoxComponent, InfoBoxItemComponent,
    TagsComponent, TagItemComponent
  ],
  exports: [
    FormsModule, ReactiveFormsModule, CommonModule,
    InfoBoxComponent, TagsComponent, TranslateModule
  ]
})
export class SharedModule { }
