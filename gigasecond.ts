export class Gigasecond {
  private gigaDate: Date;
  constructor(date: Date) {
    console.log(date.getTime())
    date.setSeconds(date.getSeconds() + 1000000000);
    this.gigaDate = date
  }
  date(): Date {
    return this.gigaDate;
  }
}
