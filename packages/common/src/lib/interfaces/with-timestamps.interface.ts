export interface WithTimestamps {
  createdAt: Date;
  updatedAt: Date;
}

export interface WithSoftDeleteTimestamps extends WithTimestamps {
  deletedAt: Date;
}
