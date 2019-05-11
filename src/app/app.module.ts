import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


class Person {
  name: String;
  age: number;
}

class Customer {
  name: String;
}

const customer: Customer = new Person();

function printThis<T> (content: T): T {
  console.log(content);
  return content;
}

const getProducts = function<T>(id?: T):
  T extends number ? Product : Product [];

type numFunc<T> = (arg: T) => (x: number) => number;

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
}

function filterBy<T, P extends keyof T> (
              property: P, value: T[P], array: T[]){
                return array.filter(item => item[property] === item);
              }