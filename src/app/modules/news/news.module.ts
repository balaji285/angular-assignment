import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsheaderComponent } from './newsheader/newsheader.component';
import { NewscontentComponent } from './newscontent/newscontent.component';



@NgModule({
  declarations: [
    NewsComponent,
    NewsheaderComponent,
    NewscontentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NewsComponent
  ]
})
export class NewsModule { }
