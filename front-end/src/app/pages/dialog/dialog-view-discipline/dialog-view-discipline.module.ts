import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { DialogViewDisciplineComponent } from './dialog-view-discipline.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';

@NgModule({
  declarations: [DialogViewDisciplineComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FlexLayoutModule,
    MatDialogModule,
    NgxDatatableModule,
    MatMenuModule,
    NgxGraphModule,
  ],
  exports: [DialogViewDisciplineComponent],
})
export class DialogViewDisciplineModule {}
