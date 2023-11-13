export interface Dashboard {
  _id?: string;
  id_ponto?: string;
  flag_ativo: boolean;
  flag_msg_fixa: boolean;
  nome: string;
  ip: string;
  porta: string;
  modelo: string;
  ultimo_status: string;
  msg_fixa?: string;
}
