import { CurrentUser } from './user';

export interface CompanyState {
  company_id: number;
  company_name: string;
}
export interface CompanyInfoState {
  admin_info: CurrentUser | null;
  client_count: number;
  company_id: number;
  company_name: string;
  member_count: number;
  project_count: number;
  task_count: number;
}
