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
  styleUrls: ['./new-c-dashboard.component.scss'],
})
export class NewCDashboardComponent implements OnInit {
  dashboard!: Dashboard;
  id: string = '';
  formDashboard!: FormGroup;
  route: string = '';
  ehNewForm: boolean = false;
  isCheckedSlide: boolean = true;
  isCheckedSlide: boolean = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dasboardService: DasboardService
  ) {}

  ngOnInit(): void {
    this.route = this.activatedRoute.snapshot.url[0].path;
    this.createForm();
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
      nome: ['', Validators.required],
      ip: ['', Validators.required],
      id_ponto: ['', Validators.required],
      modelo: ['', Validators.required],
      ultimo_status: ['', Validators.required],
      flag_ativo: ['', Validators.required],
      porta: ['', Validators.required],
      msg_fixa: ['', Validators.required],
      patrimonio: ['', Validators.required],
      // imagePath: [''],
    });
  }

  getDashboardId() {
    debugger
    this.dasboardService
      .getListId(this.id)
      .subscribe((dashboard: Dashboard) => {
        this.dashboard = dashboard;
        this.formDashboard.controls['nome'].setValue(dashboard.nome);
        this.formDashboard.controls['ip'].setValue(dashboard.ip);
        this.formDashboard.controls['id_ponto'].setValue(dashboard.id_ponto);
        this.formDashboard.controls['modelo'].setValue(dashboard.modelo);
        this.formDashboard.controls['ultimo_status'].setValue(dashboard.ultimo_status);
        this.formDashboard.controls['flag_ativo'].setValue(dashboard.flag_ativo);
        this.formDashboard.controls['porta'].setValue(dashboard.porta);
        this.formDashboard.controls['msg_fixa'].setValue(
          this.isCheckedSlide
        );
        console.log(this.dashboard);
      });
  }

  save() {
    debugger
    //verifica se foi alterado para salvar
    if (this.formDashboard.touched && this.formDashboard.dirty) {
      const payload: Dashboard = {
        nome: this.formDashboard.controls['nome'].value,
        ip: this.formDashboard.controls['ip'].value,
        id_ponto: this.formDashboard.controls['id_ponto'].value,
        modelo: this.formDashboard.controls['modelo'].value,
        msg_fixa:'',
        patrimonio:this.formDashboard.controls['patrimonio'].value,
        porta:this.formDashboard.controls['porta'].value,
        flag_ativo: true,
        flag_msg_fixa: false,
        ultimo_status: '',
        // porta: this.formDashboard.controls['porta'].value,
      };

      if (this.ehNewForm) {
        this.createUser(payload);
      } else {
        payload._id = this.dashboard._id;
        this.editUser(payload);
      }
    }
    this.router.navigate(['screen-panels']);
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

  changeSlide(event: any) {
    this.isCheckedSlide = !this.isCheckedSlide;
  }
}
