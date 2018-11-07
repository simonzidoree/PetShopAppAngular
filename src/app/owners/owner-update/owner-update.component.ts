import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OwnerService} from '../../shared/services/owner.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-owner-update',
  templateUrl: './owner-update.component.html',
  styleUrls: ['./owner-update.component.css']
})
export class OwnerUpdateComponent implements OnInit {

  id: number;

  ownerForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ownerService: OwnerService) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    const owner = this.ownerService.getOwnersById(this.id);
    this.ownerForm.patchValue({
      name: owner.name
    });
  }

  save() {
    const owner = this.ownerForm.value;
    owner.id = this.id;
    this.ownerService.updateOwner(owner);
    // this.ownerForm.reset();
    // this.router.navigateByUrl('/owners');
  }
}
