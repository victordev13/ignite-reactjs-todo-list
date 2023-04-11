import { Time as TimeInterface} from '../types'

export const formatTime = (time: TimeInterface) => `${time.hour}:${time.minutes}`

export const compareTime = (time: TimeInterface, compareTo: TimeInterface) =>
formatTime(time) > formatTime(compareTo)

const Time = {
  format: formatTime,
  eq: compareTime,
}

export default Time
