import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Star } from 'src/app/shared/models/star.model';
import { StarService } from '../../services/star.service';
import { Constellation } from 'src/app/shared/models/constellation.model';
import { ConstellationService } from 'src/app/modules/constellations/services/constellation.service';

@Component({
  selector: 'app-star-edit',
  templateUrl: './star-edit.component.html',
  styleUrls: ['./star-edit.component.scss']
})
export class StarEditComponent {
  private id: string = '';
  constructor(private route: ActivatedRoute, private starService: StarService, private _snackBar: MatSnackBar, private router: Router, private constellationService: ConstellationService) {}
  public stars: Star[] = [];
  public isNew: boolean = true;
  public constellations: Constellation[] = [];

  starForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    constellationId: new FormControl('')
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!

    if (this.id !== 'undefined') {
      this.isNew = false;
      this.starService.getStar(this.id).subscribe(result => {
        this.starForm.controls.name.setValue(result.name);
        this.starForm.controls.description.setValue(result.description);
        this.starForm.controls.constellationId.setValue(result.constelationId);
      })
    }

    this.constellationService.getConstellations().subscribe(result => {
      this.constellations = result;
    })
  }

  public save(): void {
    const constellation = {
      id: this.id,
      name: this.starForm.controls.name.value,
      description: this.starForm.controls.description.value,
      constellationId: this.starForm.controls.constellationId.value
    }

    this.starService.editStar(constellation).subscribe(() => {
      this.router.navigate(['/stars'])
      this._snackBar.open('Zakutalizowano gwiazde')
    })
  }

  public add(): void {
    const constelltion = {
      name: this.starForm.controls.name.value,
      description: this.starForm.controls.description.value,
      constelationId: this.starForm.controls.constellationId.value
    }

    this.starService.addStar(constelltion).subscribe(() => {
      this.router.navigate(['/stars'])
      this._snackBar.open('Dodano nową gwiazd!', 'Ok')
    });
  }
}
