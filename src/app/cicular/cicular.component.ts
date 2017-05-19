import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cicular',
  templateUrl: './cicular.component.html',
  styleUrls: ['./cicular.component.css']
})
export class CicularComponent implements OnInit {
    public showCircular = "Circular1";

    public myList = [
        { name: 'all previous declared circulars' },
        { name: 'circular-1' },
        { name: 'circular-2' },
        { name: 'circular-3' },

    ]

    constructor() {
       
    }

    ngOnInit() {
        this.showCircular = "circular 2";
    }

    chnageCircular() {
        this.showCircular = "circular4";
    }

}
