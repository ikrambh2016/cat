import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

 set(key: string, value: string){
  localStorage.setItem(key, value);
 }
 get(key: string): string{
    return localStorage.getItem(key);
 }
}
