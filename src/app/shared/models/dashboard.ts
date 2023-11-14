export interface Dashboard {
  _id?: string;
  id_ponto?: number;
  flag_ativo?: boolean;
  flag_msg_fixa?: boolean;
  nome?: string;
  ip?: string;
  porta?: number;
  modelo?: string;
  ultimo_status?: string;
  msg_fixa?: string;
  patrimonio?: string;
}
