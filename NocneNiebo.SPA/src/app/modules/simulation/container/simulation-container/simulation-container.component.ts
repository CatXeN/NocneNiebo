import { Component, OnInit } from '@angular/core';
import { SimulationService } from 'src/app/modules/dashboard/service/simulation.service';
import { simulation } from 'src/app/shared/models/simulation.model';

@Component({
  selector: 'app-simulation-container',
  templateUrl: './simulation-container.component.html',
  styleUrls: ['./simulation-container.component.scss']
})
export class SimulationContainerComponent implements OnInit {
  public simulation: simulation = {
    date: '',
    cloudliness: 0,
    moonPhase: 0,
    rain: false
  }

  public cloud: number = 0;

  constructor(private simulationService: SimulationService) {}

  ngOnInit(): void {
    this.loadSimulation();
  }

  private loadSimulation(): void {
    this.simulationService.getSimulation().subscribe(result => {
      this.simulation.date = result.find(s => s.key === 'date').value
      this.simulation.cloudliness = Number(result.find(s => s.key === 'cloudliness').value)
      this.simulation.moonPhase = Number(result.find(s => s.key === 'moonPhase').value)
      this.simulation.rain = result.find(s => s.key === 'rain').value === 'false' ? false : true

      if (this.simulation.cloudliness > 0 && this.simulation.cloudliness <= 4) {
        this.cloud = 1;
      } else if (this.simulation.cloudliness > 4 && this.simulation.cloudliness <= 7) {
        this.cloud = 2;
      } else if (this.simulation.cloudliness > 7 && this.simulation.cloudliness < 11) {
        this.cloud = 3;
      }
    })
  }

  public setSky(): string {
    let classes = ''

    if (this.simulation.date === '') {
      return 'empty'
    }

    let hour = Number(this.simulation.date.split(':')[0]);

    if (hour >= 4 && hour < 17) {
      classes += 'clear-sky'
    } else if (hour >= 17 && hour <= 22) {
      classes += 'clear-afternoon-sky'
    } else {
      classes += 'clear-noon-sky'
    }

    if (this.simulation.rain === true) {
      classes += ' rain-effect'
    }

    return classes;
  }

  public setMoon(): string {
    let hour = Number(this.simulation.date.split(':')[0]);

    if (hour > 4 && hour < 22) {
      return 'empty';
    }

    if (this.simulation.moonPhase === 1) {
      return 'first-quarter'
    } else if (this.simulation.moonPhase === 2) {
      return 'second-quarter'
    } else if (this.simulation.moonPhase === 3) {
      return 'third-quarter'
    } else {
      return 'fourth-quarter'
    }
  }
}
