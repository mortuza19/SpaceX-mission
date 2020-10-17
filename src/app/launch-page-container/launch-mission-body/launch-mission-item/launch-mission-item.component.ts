import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-mission-item',
  templateUrl: './launch-mission-item.component.html',
  styleUrls: ['./launch-mission-item.component.css']
})
export class LaunchMissionItemComponent implements OnInit {

  constructor(private cdref: ChangeDetectorRef) {}

  _launchData: any = null;
  @Input()
  set launchData(data: any) {
    this._launchData = data;
    this.cdref.detectChanges();
  }

  ngOnInit() {
  }

}
