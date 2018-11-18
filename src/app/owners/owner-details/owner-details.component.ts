import {Component, OnInit} from '@angular/core';
import {Owner} from '../../shared/models/owners';
import {OwnerService} from '../../shared/services/owner.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {
  owner: Owner;

  constructor(private route: ActivatedRoute,
              private ownerService: OwnerService) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ownerService.getOwnersById(id)
      .subscribe(ownerFromRest => {
        this.owner = ownerFromRest;
      });
  }

}
