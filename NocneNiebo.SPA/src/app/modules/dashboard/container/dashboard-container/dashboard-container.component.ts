import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { simulation } from 'src/app/shared/models/simulation.model';
import { SimulationService } from '../../service/simulation.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
  public simulationForm = new FormGroup({
    date: new FormControl(''),
    cloudliness: new FormControl(0),
    moonPhase: new FormControl(0),
    rain: new FormControl(false)
  });

  constructor(private simulationService: SimulationService, private matSnackBar: MatSnackBar) {
    this.loadSimulation();
  }

  ngOnInit(): void {
    this.simulationForm.get('rain')?.disable();
  }

  private loadSimulation(): void {
    this.simulationService.getSimulation().subscribe(result => {
      this.simulationForm.controls.date.setValue(result.find(s => s.key === 'date').value)
      this.simulationForm.controls.cloudliness.setValue(result.find(s => s.key === 'cloudliness').value)
      this.simulationForm.controls.moonPhase.setValue(result.find(s => s.key === 'moonPhase').value)
      this.simulationForm.controls.rain.setValue(result.find(s => s.key === 'rain').value === 'false' ? false : true)

      this.canSetRain(result.find(s => s.key === 'cloudliness').value);
    })
  }

  public formatLabel(value: number): string {
    if (value === 1) {
      return 'Nów';
    } else if (value === 2) {
      return 'Kwadra pierwsza'
    } else if (value === 3) {
      return 'Pełnia'
    }

    return 'Ostatnia kwadra'
  }

  public canSetRain(event: number): void {
    if (event === 0) {
      const isRain = this.simulationForm.get('rain');
      isRain?.disable();
      isRain?.setValue(false);
    } else {
      this.simulationForm.get('rain')?.enable();
    }
  }

  public update(): void {
    const data: simulation = {
      date: this.simulationForm.controls.date.value!,
      cloudliness: this.simulationForm.controls.cloudliness.value!,
      moonPhase: this.simulationForm.controls.moonPhase.value!,
      rain: this.simulationForm.controls.rain.value!
    }

    this.simulationService.update(data).subscribe(result => {
      this.matSnackBar.open('Zakutalizowano ustawienia symulacji', 'Ok')
    })
  }
}
