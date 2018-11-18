import {Component, OnInit} from '@angular/core';
import {OwnerService} from '../../shared/services/owner.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent implements OnInit {

  ownerForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(private ownerService: OwnerService,
              private router: Router) {
  }

  ngOnInit() {
  }

  save() {
    const owner = this.ownerForm.value;
    this.ownerService.addOwners(owner)
      .subscribe(() => {
        this.router.navigateByUrl('/owners');
      });
  }
}
