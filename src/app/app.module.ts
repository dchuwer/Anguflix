import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieService } from './movie.service';
import { MovieComponent } from './movie/movie.component';
import { FilterPipe } from './filter.pipe';
import { FilterMymoviesPipe } from './filter-mymovies.pipe';
import { DialogOverviewAddFundsDialogComponent } from './dialog-overview-add-funds-dialog/dialog-overview-add-funds-dialog.component';
import { MymoviesComponent } from './mymovies/mymovies.component';
import { HeadComponent } from './head/head.component';
import { UserComponent } from './user/user.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    FilterPipe,
    FilterMymoviesPipe,
    DialogOverviewAddFundsDialogComponent,
    MymoviesComponent,
    HeadComponent,
    UserComponent,
    FilterComponent,
    
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    AngularFontAwesomeModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule
  ],
  
  entryComponents: [DialogOverviewAddFundsDialogComponent],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
