import { NativeEventEmitter, NativeModules } from "react-native"
const { RNModerninha } = NativeModules

// class PagSeguroModerninha {
//   TYPE_CREDITO: number = RNModerninha.TYPE_CREDITO
//   TYPE_DEBITO: number = RNModerninha.TYPE_DEBITO
//   TYPE_VOUCHER: number = RNModerninha.TYPE_VOUCHER
//   INSTALLMENT_TYPE_A_VISTA: number = RNModerninha.INSTALLMENT_TYPE_A_VISTA
//   INSTALLMENT_TYPE_PARC_COMPRADOR: number = RNModerninha.INSTALLMENT_TYPE_PARC_COMPRADOR
//   INSTALLMENT_TYPE_PARC_VENDEDOR: number = RNModerninha.INSTALLMENT_TYPE_PARC_VENDEDOR
// }

export default {
  // TYPE_CREDITO: RNModerninha.TYPE_CREDITO,
  // TYPE_DEBITO: RNModerninha.TYPE_DEBITO,
  // TYPE_VOUCHER: RNModerninha.TYPE_VOUCHER,
  // INSTALLMENT_TYPE_A_VISTA: RNModerninha.INSTALLMENT_TYPE_A_VISTA,
  // INSTALLMENT_TYPE_PARC_COMPRADOR: RNModerninha.INSTALLMENT_TYPE_PARC_COMPRADOR,
  // INSTALLMENT_TYPE_PARC_VENDEDOR: RNModerninha.INSTALLMENT_TYPE_PARC_VENDEDOR,
  TYPE_CREDITO: 1,
  TYPE_DEBITO: 1,
  TYPE_VOUCHER: 1,
  INSTALLMENT_TYPE_A_VISTA: 1,
  INSTALLMENT_TYPE_PARC_COMPRADOR: 1,
  INSTALLMENT_TYPE_PARC_VENDEDOR: 1,

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
