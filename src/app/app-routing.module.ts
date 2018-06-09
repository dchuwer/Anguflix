import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component'
import { ShowMovieComponent } from './show-movie/show-movie.component';


const routes: Routes = [
   
  { path: '', 
    component: HomeComponent,
    
  },
  { path: 'showMovie/:id', 
    component: ShowMovieComponent,
   
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
