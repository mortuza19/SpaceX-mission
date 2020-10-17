import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

import {Helper} from '../../shared/data.service';
@Component({
  selector: 'app-launch-filter-body',
  templateUrl: './launch-filter-body.component.html',
  styleUrls: ['./launch-filter-body.component.css']
})
export class LaunchFilterBodyComponent implements OnInit {

  yearList: number[] = [];
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  years: number = null;
  land: boolean = null;
  launch: boolean = null;

  ngOnInit() {
    Helper.isNextStep = false;
    this.yearList = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  }

  getDataByYear(year: number) {
    this.years = this.years === year ? null : year;
    this.sendFilterData();
  }

  getDataByLaunch(isLaunchSuccess: boolean) {
    this.launch = this.launch === isLaunchSuccess ? null : isLaunchSuccess;
    this.sendFilterData();
  }

  getDataByLand(isLandSuccess: boolean) {
    this.land = this.land === isLandSuccess ? null : isLandSuccess;
    this.sendFilterData();
  }

  sendFilterData() {
    const yearQueryString = this.years ? '&launch_year=' + this.years : '';
    const launchQueryString = this.launch !== null ? '&launch_success=' + this.launch : '';
    const landQueryString = this.land !== null ? '&land_success=' + this.land : '';
    if (yearQueryString || launchQueryString || landQueryString) {
      this.router.navigate(['/filter'],
      {queryParams: {year: this.years, launch: this.launch, land: this.land}});
    } else {
      this.router.navigate(['/']);
    }
    this.dataService.applyFilter.next(yearQueryString + launchQueryString + landQueryString);
  }

}
