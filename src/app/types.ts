export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface PagedAPIResponse<T> {
  page: number;
  nextPage?: number;
  data: T[];
}
