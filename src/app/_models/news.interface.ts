export class News {
  info: any;
  getObject(objeto: Object) {
    this.info = { ...objeto };
  }
}
