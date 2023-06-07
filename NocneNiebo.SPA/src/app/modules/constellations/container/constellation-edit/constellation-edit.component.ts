import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstellationService } from '../../services/constellation.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Star } from 'src/app/shared/models/star.model';
import { Constellation } from 'src/app/shared/models/constellation.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-constellation-edit',
  templateUrl: './constellation-edit.component.html',
  styleUrls: ['./constellation-edit.component.scss']
})
export class ConstellationEditComponent {
  private id: string = '';
  constructor(private route: ActivatedRoute, private constellationService: ConstellationService, private _snackBar: MatSnackBar, private router: Router) {}
  public stars: Star[] = [];
  public isNew: boolean = true;

  constellationForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!

    if (this.id !== 'undefined') {
      this.isNew = false;
      this.constellationService.getConstellation(this.id).subscribe(result => {
        this.constellationForm.controls.name.setValue(result.name);
        this.constellationForm.controls.description.setValue(result.description);
        this.stars = result.stars;
      })
    }
  }

  public save(): void {
    const constellation = {
      id: this.id,
      name: this.constellationForm.controls.name.value,
      description: this.constellationForm.controls.description.value
    }

    this.constellationService.updateConstellation(constellation).subscribe(() => {
      this.router.navigate(['/constellations'])
      this._snackBar.open('Zakutalizowano konstelacje')
    })
  }

  public add(): void {
    const constelltion = {
      name: this.constellationForm.controls.name.value,
      description: this.constellationForm.controls.description.value
    }

    this.constellationService.addConstellation(constelltion).subscribe(() => {
      this.router.navigate(['/constellations'])
      this._snackBar.open('Dodano nową konstelacje!', 'Ok')
    });
  }
}
