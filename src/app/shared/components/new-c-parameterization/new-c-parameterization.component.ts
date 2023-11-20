import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ParametrizationService } from 'src/app/core/service/parameterization.service';



@Component({
  selector: 'app-new-c-parameterization',
  templateUrl: './new-c-parameterization.component.html',
  styleUrls: ['./new-c-parameterization.component.scss']
})
export class NewCParameterizationComponent implements OnInit {

  formDashboard!: FormGroup;
  typesOfShoes: string[] = ['Painel Consolação', 'Painel Liberdade', 'Painel Tatuapé'];

  form!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private _parametrizationService: ParametrizationService) { }

  ngOnInit(): void {
    this.createForm();
    this.getValue();
  }

  createForm() {
    this.formDashboard = this.formBuilder.group({
      tempoTransmitirMensagemMin: new FormControl('', Validators.required),
      tempoZerarPaineisHoras: new FormControl('', Validators.required),
      tempoTransmitirMensagemFixaHora: new FormControl('', Validators.required),
      tempoAjusteDataHoraHoras: new FormControl('', Validators.required),
      socketTimeout: new FormControl('', Validators.required),
      socketWaitReceive: new FormControl('', Validators.required),
      retryPainelSendMensage: new FormControl('', Validators.required),
      endPointServerRepository: new FormControl('', Validators.required)
    });
  }

  update() {  
    var obj:any =null;

    this._parametrizationService.getValue().subscribe(
      (response: any) => {})

      this._parametrizationService.getValue().subscribe(
        (response: any) => {
          Object.keys(response).forEach(key => {
            let value = response[key];
  
            if (value.nome == "TEMPO_TRANSMITIR_MENSAGENS_MINUTOS"){
              obj = {
                "nome": value.nome,
                "valor": this.formDashboard.get('tempoTransmitirMensagemMin')?.value
              }
              this._parametrizationService.upValue(obj,value._id).subscribe(
                (response: any) => {})
            }
              
            if (value.nome == "TEMPO_ZERAR_PAINEIS_HORAS"){
              obj = {
                "nome": value.nome,
                "valor": this.formDashboard.get('tempoZerarPaineisHoras')?.value
              }
              this._parametrizationService.upValue(obj,value._id).subscribe(
                (response: any) => {})
            }
              
            if (value.nome == "TEMPO_TRANSMITIR_MENSAGENS_FIXAS_HORAS"){
              obj = {
                "nome": value.nome,
                "valor": this.formDashboard.get('tempoTransmitirMensagemFixaHora')?.value
              }
              this._parametrizationService.upValue(obj,value._id).subscribe(
                (response: any) => {})
            }
             
            if (value.nome == "TEMPO_AJUSTE_DATAHORA_HORAS"){
              obj = {
                "nome": value.nome,
                "valor": this.formDashboard.get('tempoAjusteDataHoraHoras')?.value
              }
              this._parametrizationService.upValue(obj,value._id).subscribe(
                (response: any) => {})
            }
              
            if (value.nome == "SOCKET_TIMEOUT"){
              obj = {
                "nome": value.nome,
                "valor": this.formDashboard.get('socketTimeout')?.value
              }
              this._parametrizationService.upValue(obj,value._id).subscribe(
                (response: any) => {})
            }
             
            if (value.nome == "SOCKET_WAIT_RECEIVE"){
              obj = {
                "nome": value.nome,
                "valor": this.formDashboard.get('socketWaitReceive')?.value
              }
              this._parametrizationService.upValue(obj,value._id).subscribe(
                (response: any) => {})
            }
             
            if (value.nome == "RETRY_PANEL_SEND_MESSAGE"){
              obj = {
                "nome": value.nome,
                "valor": this.formDashboard.get('retryPainelSendMensage')?.value
              }
              this._parametrizationService.upValue(obj,value._id).subscribe(
                (response: any) => {})
            }
             
            if (value.nome == "ENDPOINT_CITTATI"){
              obj = {
                "nome": value.nome,
                "valor": this.formDashboard.get('endPointServerRepository')?.value
              }
              this._parametrizationService.upValue(obj,value._id).subscribe(
                (response: any) => {})
            }  
          });

          setTimeout(() => {
            this.getValue();        
          }, 400);
        }
      );
  }

  getValue() {
    this._parametrizationService.getValue().subscribe(
      (response: any) => {
        Object.keys(response).forEach(key => {
          let value = response[key];

          if (value.nome == "TEMPO_TRANSMITIR_MENSAGENS_MINUTOS")
            this.formDashboard.patchValue({
              tempoTransmitirMensagemMin: value.valor
            });
          if (value.nome == "TEMPO_ZERAR_PAINEIS_HORAS")
            this.formDashboard.patchValue({
              tempoZerarPaineisHoras: value.valor
            });
          if (value.nome == "TEMPO_TRANSMITIR_MENSAGENS_FIXAS_HORAS")
            this.formDashboard.patchValue({
              tempoTransmitirMensagemFixaHora: value.valor
            });
          if (value.nome == "TEMPO_AJUSTE_DATAHORA_HORAS")
            this.formDashboard.patchValue({
              tempoAjusteDataHoraHoras: value.valor
            });
          if (value.nome == "SOCKET_TIMEOUT")
            this.formDashboard.patchValue({
              socketTimeout: value.valor
            });
          if (value.nome == "SOCKET_WAIT_RECEIVE")
            this.formDashboard.patchValue({
              socketWaitReceive: value.valor
            });
          if (value.nome == "RETRY_PANEL_SEND_MESSAGE")
            this.formDashboard.patchValue({
              retryPainelSendMensage: value.valor
            });
          if (value.nome == "ENDPOINT_CITTATI")
            this.formDashboard.patchValue({
              endPointServerRepository: value.valor
            });

        });
      }
    );
  }



}
