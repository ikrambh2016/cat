import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { Cat } from '../../models/cat.model';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
cats: Cat[];
  constructor(private catService: CatService, private storageService: StorageService) { }

  ngOnInit() {
   this.loadCats();
   this.sortCats();
    console.log(this.cats)
  }
  sortCats() {
     this.cats.sort((a, b) => (a.vote < b.vote) ? 1 : -1);

  }
  loadCats() {
   this.cats =  this.catService.loadCats().filter((cat) => {
      cat.vote = +this.storageService.get(`cat_${cat.id}`);
      return cat.vote !== 0;
    });
  }

}
