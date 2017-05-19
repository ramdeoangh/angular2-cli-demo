import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../github/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [GithubService]
})
export class UserComponent implements OnInit {

    public user;
    constructor(private activeRoute: ActivatedRoute, private gitHubService: GithubService) { }

  ngOnInit() {
      const userId = this.activeRoute.snapshot.params['userId'];
      this.gitHubService.getUserDetails(userId).subscribe(
          res => {
              this.user = res;
              console.log(res);
          }
      )
  }

}
