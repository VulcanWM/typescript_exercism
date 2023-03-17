export class Clock {
  public hour!:number
  public minute!:number
  
  constructor(hour: number, minute = 0) {
    this.adjust(hour, minute)
  }

  adjust(hour:number, minute:number){
    let min_rem:number = minute % 60
    hour += Math.floor(minute/60)
    if (min_rem<0){
      this.minute = min_rem + 60
    } else {
      this.minute = min_rem
    }
    if (hour<0){
      hour += 24 * Math.ceil(Math.abs(hour/24))
    }
    let hour_rem:number = hour % 24
    this.hour = hour_rem
    return this
  }

  public toString(): string {
    if (this.hour < 10){
      var str_hour:string = "0" + this.hour.toString();
    } else {
      var str_hour:string = this.hour.toString();
    }
    if (this.minute < 10){
      var str_minute:string = "0" + this.minute.toString();
    } else {
      var str_minute:string = this.minute.toString();
    }
    return str_hour + ":" + str_minute
  }

  public plus(minutes: number): Clock {
    this.minute += minutes
    return this.adjust(this.hour, this.minute)
  }

  public minus(minutes: number): Clock {
    this.minute -= minutes
    return this.adjust(this.hour, this.minute)
  }

  public equals(clock: Clock): Boolean {
    return this.toString() === clock.toString()
  }
}
