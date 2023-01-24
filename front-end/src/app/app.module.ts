import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AuthService } from 'src/services/api/login/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { ToolbarComponent } from './pages/home/toolbar/toolbar.component';
import { PagesModule } from './pages/pages.module';
import { BasicSnackbarModule } from './shared/components/snack-bar.module';
import { NgxFlowchartModule } from 'ngx-flowchart';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { DialogViewDisciplineModule } from './pages/dialog/dialog-view-discipline/dialog-view-discipline.module';

@NgModule({
  declarations: [AppComponent, FooterComponent, ToolbarComponent],
  imports: [
    PagesModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    BasicSnackbarModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    NgxDatatableModule,
    DialogViewDisciplineModule,
  ],
  providers: [AuthService],
  exports: [PagesModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
