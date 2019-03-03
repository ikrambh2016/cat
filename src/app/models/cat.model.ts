export class Cat {
  id: string;
  url: string;
  vote: number;
constructor(options) {
  this.id = options.id || '';
  this.url = options.url || '';
  this.vote = options.vote || null;
}
}
