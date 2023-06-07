import { Component } from '@angular/core';
import { Star } from 'src/app/shared/models/star.model';
import { StarService } from '../../services/star.service';
import { Router } from '@angular/router';
import { ConstellationService } from 'src/app/modules/constellations/services/constellation.service';
import { Constellation } from 'src/app/shared/models/constellation.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-star-container',
  templateUrl: './star-container.component.html',
  styleUrls: ['./star-container.component.scss']
})
export class StarContainerComponent {
  displayedColumns: string[] = ['id', 'name', 'description', 'constelationId', 'Action'];
  dataSource: Star[] = [];
  public constellations: Constellation[] = [];

  constructor(private starService: StarService, public router: Router, private constellationService: ConstellationService, private snackBar: MatSnackBar) {
    this.getStars();

    this.constellationService.getConstellations().subscribe(res => {
      this.constellations = res;
    })
  }

  private getStars(): void {
    this.starService.getStars().subscribe(result => {
      this.dataSource = result;
    })
  }

  public getConstellatioName(id: string): string {
    return this.constellations.find(c => c.id == id)?.name!
  }

  public deleteStar(id: string): void {
    this.starService.deleteStar(id).subscribe(() => {
      this.getStars();
      this.snackBar.open('Usunięta gwiazda!', 'Ok')
    })
  }
}
