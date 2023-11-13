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
  isCheckedSlide: boolean = true;

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
      nome: new FormControl(['', Validators.required]),
      ip: ['', Validators.required],
      id_ponto: ['', Validators.required],
      modelo: ['', Validators.required],
      ultimo_status: ['', Validators.required],
      flag_ativo: ['', Validators.required],
      porta: ['', Validators.required],
      msg_fixa: ['', Validators.required],
      imagePath: [''],
    });
  }

  getDashboardId() {
    this.dasboardService
      .getListId(parseInt(this.id))
      .subscribe((dashboard: Dashboard) => {
        this.dashboard = dashboard;
        this.formDashboard.controls['name'].setValue(dashboard.nome);
        this.formDashboard.controls['ip'].setValue(dashboard.ip);
        this.formDashboard.controls['idPoint'].setValue(dashboard.id_ponto);
        this.formDashboard.controls['model'].setValue(dashboard.modelo);
        this.formDashboard.controls['status'].setValue(dashboard.ultimo_status);
        this.formDashboard.controls['active'].setValue(dashboard.flag_ativo);
        this.formDashboard.controls['door'].setValue(dashboard.porta);
        this.formDashboard.controls['flag_msg_fixa'].setValue(this.isCheckedSlide);
        console.log(this.dashboard);
      });
  }

  save() {
    //verifica se foi alterado para salvar
    if (this.formDashboard.touched && this.formDashboard.dirty) {
      
      const payload: Dashboard = {
        nome: this.formDashboard.controls['name'].value,
        ip: this.formDashboard.controls['ip'].value,
        id_ponto: this.formDashboard.controls['idPoint'].value,
        modelo: this.formDashboard.controls['model'].value,
        ultimo_status: this.formDashboard.controls['status'].value,
        flag_ativo: this.formDashboard.controls['flag_ativo'].value,
        porta: this.formDashboard.controls['porta'].value,
        flag_msg_fixa: this.formDashboard.controls['flag_msg_fixa'].value,
      };

      if (this.ehNewForm) {
        this.createUser(payload);
      } else {
        payload._id = this.dashboard._id;
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
    // this.dasboardService.updateListId(payload).subscribe((res) => {
    //   this.router.navigate(['screen-panels']);
    // });
  }


  changeSlide(event:any){
    this.isCheckedSlide = !this.isCheckedSlide;
  }

}
