
export type PlugPagTransactionResult = {
    message: string
    errorCode: string
    transactionCode: string
    transactionId: string
    date: string
    time: string
    hostNsu: string
    cardBrand: string
    bin: string
    holder: string
    userReference: string
    terminalSerialNumber: string
    amount: string
    availableBalance: string
    cardApplication: string
    label: string
    holderName: string
    extendedHolderName: string
    result: number
    readerModel: string
    nsu: string
    autoCode: string
    installments: string
    originalAmount: number
    buyerName: string
    paymentType: number
    typeTransaction: string
    appIdentification: string
    cardHash: string
    mPreAutoDueDate: string
    mPreAutoOriginalAmount: string
}
