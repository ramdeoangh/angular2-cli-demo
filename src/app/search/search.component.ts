import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubService]
})
export class SearchComponent implements OnInit {

    public searchText;
    public searchResult;
    public totalSearchCount;
    constructor(private gitHubService: GithubService) {
    }

    ngOnInit() {

       
    }

    onKeyup(event) {
        this.searchText = event.target.value;
    }

    getUsers() {
       // this.searchText = "ramdeo";
        this.gitHubService.getGithubUsers(this.searchText).subscribe(
            res => {
                console.log(res);
                this.searchResult = res;
                this.totalSearchCount = res.total_count;

            });
    }

}
