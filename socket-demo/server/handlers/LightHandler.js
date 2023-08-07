import { valuesService } from "../services/ValuesService.js";
import { SocketHandler } from "../utils/SocketHandler.js";

let isOn = true

export class LightHandler extends SocketHandler {

  // STUB this is the backend
  constructor(io, socket) {
    super(io, socket, true)
    this
      .on('GET_LIGHT_STATUS', this.getLightStatus)
      .on('TOGGLE_LIGHTBULB', this.toggleLightbulb)
  }



  getLightStatus() {
    this.socket.emit('LIGHT_STATUS', isOn)
  }


  toggleLightbulb() {
    isOn = !isOn
    this.io.emit('LIGHT_STATUS', isOn)
  }


}