import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-launch-mission-body',
  templateUrl: './launch-mission-body.component.html',
  styleUrls: ['./launch-mission-body.component.css']
})
export class LaunchMissionBodyComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private dataService: DataService,
    private cdref: ChangeDetectorRef,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  launchDataList: any[] = [];
  displayProgressSpinner = false;
  noDataFound: string;
  filterSubscription: Subscription;

  ngOnInit() {
    this.displayProgressSpinner = true;
    this.noDataFound = 'No data found!';
    this.activatedRoute.params
    .subscribe(data => {
      console.log(data);
    });

    this.getMissionData('');
  }

  ngAfterViewInit() {
    this.filterSubscription = this.dataService.applyFilter
    .subscribe((data) => {
      this.displayProgressSpinner = true;
      this.getMissionData(data);
    });
  }

  getMissionData(queryParam: string) {
    this.dataService.getLaunchData(queryParam)
    .subscribe((data: any[]) => {
      this.launchDataList = data;
      this.displayProgressSpinner = false;
      this.cdref.detectChanges();
    },
    (error) => {
      this.noDataFound = 'There is an unknown error occured. Please try again later!';
      this.displayProgressSpinner = false;
    }
    );
  }

  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }

}
