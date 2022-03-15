import { description } from '../definitions/description'
import { instruction } from '../definitions/instruction'
import { image } from '../definitions/image'

/**
 * Serving procedures (Served while warm/cold). Finish with serving instructions including how to 
 * plate, what temperature to serve, how to garnish
 * 
 * TODO: This needs work; need to re-think instructions
 */
export interface serving {
  desc: description
  plating: {
    text: instruction
    image: image[]
  }
}
