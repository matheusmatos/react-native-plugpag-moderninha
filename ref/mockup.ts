import { NativeEventEmitter, NativeModules } from "react-native"
const { RNModerninha } = NativeModules

console.log("estou sendo executado, mockup.ts")

export default {
  TYPE_CREDITO: 1,
  TYPE_DEBITO: 2,
  TYPE_VOUCHER: 3,
  INSTALLMENT_TYPE_A_VISTA: 4,
  INSTALLMENT_TYPE_PARC_COMPRADOR: 5,
  INSTALLMENT_TYPE_PARC_VENDEDOR: 6,

  getLibVersion: function (callback) {
    return RNModerninha.getLibVersion(version => {
      callback(version)
    })
  },
  isAuthenticated: function (callback) {
    if (RNModerninha) {
      return RNModerninha.isAuthenticated(isAuthenticated => {
        callback(isAuthenticated)
      })
    } else {
      callback(true)
    }
  },
  initializeAndActivatePinPad: function (activationCode) {
    return new Promise((resolve, reject) => {
      RNModerninha.initializeAndActivatePinPad(
        activationCode,
        (code) => {
          resolve(code)
          console.log("successCode:", code)
        },
        (code, message) => {
          // reject(code, message)
          console.log("errorCode:", code, "message:", message)
        }
      )
    })
  },
  abort: function (callback) {
    if (!callback) {
      callback = () => console.log("callback do abort")
    }
    return RNModerninha.abort(callback)
  },
  doPayment: function (options) {
    // This method trigger the payment workflow, you must
    // follow the progress using the onPlugPagEvent listener
    RNModerninha.doPayment(options)
  },
  onPlugPagEvent: function (callback) {
    const eventEmitter = new NativeEventEmitter(RNModerninha)
    return eventEmitter.addListener('onPlugPagEvent', callback)
  },
  getTerminalSerialNumber: function () {
    return new Promise(resolve => {
      RNModerninha.getTerminalSerialNumber(serialNumber => {
        resolve(serialNumber)
      })
    })
  }
}
