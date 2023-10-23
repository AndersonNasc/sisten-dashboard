import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DasboardService } from 'src/app/core/service/dashboard.service';
import { Dashboard } from '../../models/dashboard';

@Component({
  selector: 'app-new-c-dashboard',
  templateUrl: './new-c-dashboard.component.html',
  styleUrls: ['./new-c-dashboard.component.scss']
})
export class NewCDashboardComponent implements OnInit {

  dashboard!: Dashboard;
  id: string = '';
  formDashboard!: FormGroup;
  route: string = '';
  ehNewForm: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dasboardService: DasboardService
  ) { }

  ngOnInit(): void {
    this.route = this.activatedRoute.snapshot.url[0].path;
    this.createForm();

    if (this.route === 'edit-dashboard') {
      this.id = this.activatedRoute.snapshot.url[1].path;
      this.getDashboardId();
    } else {
      this.ehNewForm = true;
    }

  }

  createForm() {
    this.formDashboard = this.formBuilder.group({
      name: ['', Validators.required],
      ip: ['', Validators.required],
      idPoint: ['', Validators.required],
      model: ['', Validators.required],
      status: ['', Validators.required],
      imagePath: [''],
    });
  }

  getDashboardId() {
    this.dasboardService
      .getListId(parseInt(this.id))
      .subscribe((dashboard: Dashboard) => {
        this.dashboard = dashboard;
        this.formDashboard.controls['name'].setValue(dashboard.name);
        this.formDashboard.controls['ip'].setValue(dashboard.ip);
        this.formDashboard.controls['idPoint'].setValue(dashboard.idPoint);
        this.formDashboard.controls['model'].setValue(dashboard.model);
        this.formDashboard.controls['status'].setValue(dashboard.status);
        console.log(this.dashboard);
      });
  }

  save() {
    //verifica se foi alterado para salvar
    if (this.formDashboard.touched && this.formDashboard.dirty) {
      
      const payload: Dashboard = {
        name: this.formDashboard.controls['name'].value,
        ip: this.formDashboard.controls['ip'].value,
        idPoint: this.formDashboard.controls['idPoint'].value,
        model: this.formDashboard.controls['model'].value,
        status: this.formDashboard.controls['status'].value,
      };

      if (this.ehNewForm) {
        this.createUser(payload);
      } else {
        payload.id = this.dashboard.id;
        this.editUser(payload);
      }
    }
  }

  createUser(payload: Dashboard) {
    this.dasboardService.create(payload).subscribe((res) => {
      this.router.navigate(['screen-panels']);
    });
  }
  editUser(payload: Dashboard) {
    this.dasboardService.updateListId(payload).subscribe((res) => {
      this.router.navigate(['screen-panels']);
    });
  }

}
