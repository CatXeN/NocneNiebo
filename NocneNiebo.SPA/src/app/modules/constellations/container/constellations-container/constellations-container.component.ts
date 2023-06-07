import { Component } from '@angular/core';
import { Constellation } from 'src/app/shared/models/constellation.model';
import { ConstellationService } from '../../services/constellation.service';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-constellations-container',
  templateUrl: './constellations-container.component.html',
  styleUrls: ['./constellations-container.component.scss']
})
export class ConstellationsContainerComponent {
  displayedColumns: string[] = ['id', 'name', 'description', 'Action'];
  dataSource: Constellation[] = [];

  constructor(private constellationService: ConstellationService, public router: Router, private snackBar: MatSnackBar) {
    this.getConstellations();
  }

  private getConstellations(): void {
    this.constellationService.getConstellations().subscribe(result => {
      this.dataSource = result;
    })
  }

  public deleteConstellation(id: string): void {
    this.constellationService.deleteConstellation(id).subscribe(() => {
      this.getConstellations();
      this.snackBar.open('Usunięto konstelacje!', 'Ok')
    })
  }
}
