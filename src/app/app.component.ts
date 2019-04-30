import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  products: Array<string> = []

  theDataSource: Observable<string>

  constructor(private http: Http) {

  this.theDataSource = this.http.get('/api/products')
  	.map(res => res.json())
  }

  ngOnInit(){
  	this.theDataSource.subscribe(
  	data => this.products=data,
  	err => console.log("error Code: %s, URL: %s ", err.status, err.url))
  }
}

/*
enum
interface
protected constructor
<T>(arg: T) => T
declare let
symbol()
@a
@b
@c

export class Major implements OnInit {
	
	constructor (private)

	ngOnInit() {
	
	}
}
*/
