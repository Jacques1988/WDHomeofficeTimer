import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TimesService } from '../../timer/times.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  getDate: boolean = false;
  userId: string = '';
  currentDate: string = new Date().toISOString().substring(0, 10);

  constructor(
    private timeService: TimesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id')!;
  }



  workdayForm: FormGroup = new FormGroup({
    'workdate': new FormControl(
      null, [Validators.required])
  });


  getWorkTimes() {
    this.getDate = true;
    console.log(this.workdayForm.value);
  }

}
