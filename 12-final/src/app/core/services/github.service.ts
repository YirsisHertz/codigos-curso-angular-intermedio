import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private readonly httpClient: HttpClient) {}

  getAllRepositories() {
    return this.httpClient.get<any>(
      'https://api.github.com/users/YirsisHertz/repos'
    );
  }
}
