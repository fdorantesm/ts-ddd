export interface WithAudit {
  createdBy: string | number;
  updatedBy: string | number;
  deletedBy: string | number;
}
