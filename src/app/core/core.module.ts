import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwiterSearchComponent } from './components/twiter-search/twiter-search.component';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [TwiterSearchComponent],
  imports: [CommonModule, FormsModule, InfiniteScrollModule]
})
export class CoreModule {}
