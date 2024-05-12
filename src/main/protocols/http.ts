export interface IHttpRequest {
  body?: any;
  params?: any;
  query?: any;
  headers?: any;
  user?: any;
}

export interface IHttpResponse {
  statusCode: number;
  body: any;
}
