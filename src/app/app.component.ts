import { Component } from '@angular/core';
import { RestService } from './services/rest.service';
import { Model } from './model';
import { Observable } from 'rxjs';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  arr$ : Model[];
  constructor(private rest: RestService){}

  consumingRest(){
    return this.rest.getRest()  
      .subscribe(data => {this.arr$ = data});
  }
}
