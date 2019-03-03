import { Component, OnInit, Input } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { StorageService } from 'src/app/services/storage.service';
import { Cat } from '../../models/cat.model';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  cats: Cat[];
  firstCandidate: number;
  secondCandidate: number;
  constructor(
    private catService: CatService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.cats = this.catService.loadCats();
    this.initCandidate();
  }

  initCandidate() {
    this.firstCandidate = Math.floor(Math.random() * this.cats.length);
    do {
      this.secondCandidate = Math.floor(Math.random() * this.cats.length);
    } while (this.firstCandidate === this.secondCandidate);
  }

  getTotalVotes() {
    if (+this.storageService.get('totalVotes') === null) {
      this.storageService.set('totalVotes', '0');
    }
    return +this.storageService.get('totalVotes');
  }

  incrementTotalVotes() {
    let totalvotes = this.getTotalVotes();
    totalvotes++;
    this.storageService.set('totalVotes', String(totalvotes));
  }

  vote(index) {
    const cat: Cat = this.cats[index];
    let voteCount = +this.storageService.get(`cat_${cat.id}`);

    if (voteCount === null) {
      this.storageService.set(`cat_${cat.id}`, '1');
    } else {
      voteCount++;
      this.storageService.set(`cat_${cat.id}`, String(voteCount));
    }
    this.incrementTotalVotes();
    this.initCandidate();
  }
}
