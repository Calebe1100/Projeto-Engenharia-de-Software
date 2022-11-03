import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { BasicSnackbarModule } from 'src/app/shared/components/snack-bar.module';
import { AuthService } from 'src/services/api/login/auth.service';
import { PagesModule } from '../../pages.module';

@NgModule({
  declarations: [AppComponent],
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
    NgxDatatableModule,
  ],
  providers: [AuthService],
  exports: [PagesModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
