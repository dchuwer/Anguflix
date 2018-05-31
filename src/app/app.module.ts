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
import { BudgetComponent } from './budget/budget.component';
import { MovieService } from './movie.service';
import { MovieComponent } from './movie/movie.component';
import { FilterPipe } from './filter.pipe';
import { FilterMymoviesPipe } from './filter-mymovies.pipe';
import { AddFundsComponent } from './add-funds/add-funds.component';
import { DialogOverviewAddFundsDialogComponent } from './dialog-overview-add-funds-dialog/dialog-overview-add-funds-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    BudgetComponent,    
    MovieComponent,
    FilterPipe,
    FilterMymoviesPipe,
    AddFundsComponent,
    DialogOverviewAddFundsDialogComponent,
    
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
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
