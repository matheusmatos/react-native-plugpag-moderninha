import { PlugPag } from "src/PlugPag"

enum PaymentType {
    TYPE_CREDITO = PlugPag.TYPE_CREDITO,
    TYPE_DEBITO = PlugPag.TYPE_DEBITO,
    TYPE_PIX = PlugPag.TYPE_PIX,
    TYPE_QRCODE = PlugPag.TYPE_QRCODE,
    TYPE_VOUCHER = PlugPag.TYPE_VOUCHER
}

enum InstallmentType {
    INSTALLMENT_TYPE_A_VISTA = PlugPag.INSTALLMENT_TYPE_A_VISTA,
    INSTALLMENT_TYPE_PARC_VENDEDOR = PlugPag.INSTALLMENT_TYPE_PARC_VENDEDOR
}

/**
 * Cria um conjunto de informações necessários para iniciar um pagamento. O pagamento 
 * configurado será do tipo paymentType, com o valor amount, com parcelamento do tipo 
 * installmentType, com installments número de parcelas, identificado por userReference. 
 */
export type PlugPagPaymentData = {
    paymentType: PaymentType
    amount: number
    installmentType: InstallmentType
    installments: number
    userReference: string
}
