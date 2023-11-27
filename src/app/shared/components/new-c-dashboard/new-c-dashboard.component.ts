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
  showLabelSlide: boolean = true;
  isCheckedCampoMsgFixaSlide: boolean = false;
  showCampoMsgFixaSlide: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dasboardService: DasboardService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.route = this.activatedRoute.snapshot.url[0].path;
    
    // this.route = this.activatedRoute.snapshot.url[0].path;
    // this.createForm();

    if (this.route === 'edit-dashboard') {
      this.id = this.activatedRoute.snapshot.url[1].path;
      this.getDashboardId();
    } else {
      this.ehNewForm = true;
    }
  }

  createForm() {
    this.formDashboard = this.formBuilder.group({
      nome: new FormControl('', Validators.required),
      ip: new FormControl('', Validators.required),
      id_ponto: new FormControl('', Validators.required),
      modelo: new FormControl('', Validators.required),
      ultimo_status: new FormControl('', Validators.required),
      flag_ativo: new FormControl(true, Validators.required),
      porta: new FormControl('', Validators.required),
      msg_fixa: new FormControl('', Validators.required),
      patrimonio: new FormControl('', Validators.required),
      flag_msg_fixa: new FormControl('', Validators.required)
    });
  }

  getDashboardId() {
    this.dasboardService
      .getListId(this.id)
      .subscribe((dashboard: Dashboard) => {
        this.dashboard = dashboard;
        debugger
        this.formDashboard.controls['nome'].setValue(dashboard.nome);
        this.formDashboard.controls['ip'].setValue(dashboard.ip);
        this.formDashboard.controls['id_ponto'].setValue(dashboard.id_ponto);
        this.formDashboard.controls['modelo'].setValue(dashboard.modelo);
        this.formDashboard.controls['ultimo_status'].setValue(dashboard.ultimo_status);
        this.formDashboard.controls['flag_ativo'].setValue(dashboard.flag_ativo);
        this.formDashboard.controls['porta'].setValue(dashboard.porta);
        this.formDashboard.controls['flag_msg_fixa'].setValue(dashboard.flag_msg_fixa);
        this.formDashboard.controls['patrimonio'].setValue(dashboard.patrimonio);
        this.formDashboard.controls['msg_fixa'].setValue(dashboard.msg_fixa);
        this.showCampoMsgFixaSlide = dashboard.flag_msg_fixa ?? false;
        this.isCheckedCampoMsgFixaSlide = dashboard.flag_msg_fixa ?? false;
        console.log(this.dashboard);
      });
  }

  save() {
    //verifica se foi alterado para salvar
    
    const payload: Dashboard = {
      nome: this.formDashboard.controls['nome'].value,
      ip: this.formDashboard.controls['ip'].value,
      id_ponto: this.formDashboard.controls['id_ponto'].value,
      modelo: this.formDashboard.controls['modelo'].value,
      msg_fixa: (this.isCheckedCampoMsgFixaSlide ? this.formDashboard.controls['msg_fixa'].value : ''),
      patrimonio:this.formDashboard.controls['patrimonio'].value ?? "",
      porta:this.formDashboard.controls['porta'].value,
      flag_ativo: this.isCheckedSlide,
      flag_msg_fixa: this.isCheckedCampoMsgFixaSlide,
      ultimo_status: '',
      // porta: this.formDashboard.controls['porta'].value,
    };
    debugger
    if (this.ehNewForm) {
      this.createUser(payload);
    } else {
      payload._id = this.dashboard._id;
      this.editUser(payload);
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
    this.showLabelSlide = this.isCheckedSlide;
  }

  changeCampoMsgFixaSlide(event: any) {
    this.isCheckedCampoMsgFixaSlide = !this.isCheckedCampoMsgFixaSlide;
    this.showCampoMsgFixaSlide = this.isCheckedCampoMsgFixaSlide;
  }
}
