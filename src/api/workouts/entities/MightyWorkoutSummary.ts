export interface MightyWorkoutSummary {
  start: Date,
  end: Date,
  totalPoundsLifted: number,
}

export class RealMightyWorkoutSummary implements MightyWorkoutSummary {
  readonly start: Date
  readonly end: Date
  readonly totalPoundsLifted: number

  constructor(start: Date, end: Date, totalPoundsLifted: number) {
    this.start = start
    this.end = end
    this.totalPoundsLifted = totalPoundsLifted
  }
}
