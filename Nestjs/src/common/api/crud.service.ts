export interface CrudService<T, CreatePayload, UpdatePayload, IdType> {
  create(payload: CreatePayload): Promise<T>;
  delete(id: IdType): Promise<void>;
  detail(id: IdType): Promise<T>;
  getAll(): Promise<T[]>;
  update(payload: UpdatePayload): Promise<T>;
}
