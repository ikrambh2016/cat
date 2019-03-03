import { Injectable } from '@angular/core';
import data from './../cats.json';
import { Cat } from './../models/cat.model';

@Injectable()
export class CatService {
  data: any = data;
  cats: Cat[];

  loadCats(): Cat[] {
    return this.data.images.map((cat: any[]) => new Cat(cat));
  }
}
