import { NativeModules } from "react-native"
// import { PlugPagAbortResult } from "./interfaces/PlugPagAbortResult"
import { PlugPagPaymentData } from "./interfaces/PlugPagPaymentData"
import { PlugPagTransactionResult } from "./interfaces/PlugPagTransactionResult"

const { RNModerninha } = NativeModules

export class PlugPag {

    private static instance: PlugPag
    // static TYPE_CREDITO: number
    // static TYPE_DEBITO: number
    // static TYPE_PIX: number
    // static TYPE_QRCODE: number
    // static TYPE_VOUCHER: number
    // static INSTALLMENT_TYPE_A_VISTA: number
    // static INSTALLMENT_TYPE_PARC_VENDEDOR: number

    static RET_OK: number
    static REQUEST_CODE_AUTHENTICATION: number
    static TYPE_CREDITO: number
    static TYPE_DEBITO: number
    static TYPE_VOUCHER: number
    static TYPE_QRCODE: number
    static TYPE_PIX: number
    static INSTALLMENT_TYPE_A_VISTA: number
    static INSTALLMENT_TYPE_PARC_VENDEDOR: number
    static ERROR_REQUIREMENTS_MISSING_PERMISSIONS: number
    static ERROR_REQUIREMENTS_ROOT_PERMISSION: number

    private constructor () {}

    /**
     * Código utilizado para indicar sucesso nas operações.
     */
    readonly RET_OK: number = 0

    /**
     * Código utilizado para iniciar a Activity de autenticação.
     */
    // readonly REQUEST_CODE_AUTHENTICATION: number = 46981
    
    /**
     * Tipo de pagamento: crédito.
     */
    readonly TYPE_CREDITO: number = 1
    
    /**
     * Tipo de pagamento: débito.
     */
    readonly TYPE_DEBITO: number = 2
    
    /**
     * Tipo de pagamento: voucher (vale refeição).
     */
    readonly TYPE_VOUCHER: number = 3
    
    /**
     * Tipo de pagamento: qrcode elo.
     */
    readonly TYPE_QRCODE: number = 4
    
    /**
     * Tipo de pagamento: qrcode pix.
     */
    readonly TYPE_PIX: number = 5
    
    /**
     * Forma de parcelamento: à vista.
     */
    readonly INSTALLMENT_TYPE_A_VISTA: number = 1
    
    /**
     * Forma de parcelamento: parcelamento vendedor.
     */
    readonly INSTALLMENT_TYPE_PARC_VENDEDOR: number = 2
    
    /**
     * Código de retorno para indicar erro de falta de permissões do aplicativo.
     */
    // readonly ERROR_REQUIREMENTS_MISSING_PERMISSIONS: number = 3000
    
    /**
     * Código de retorno para indicar que o aparelho possui permissões de root.
     */
    // readonly ERROR_REQUIREMENTS_ROOT_PERMISSION: number = 3001

    /**
     * Singleton PlugPag
     * @returns Uma instância do PlugPlag
     */
    public static getInstance (): PlugPag {
        if (!PlugPag.instance) {
            PlugPag.instance = new PlugPag();
        }
        return PlugPag.instance;
    }

    /**
     * @param appName: string
     * @param appVersion: string
     * @returns Uma instância do PlugPlag
     */
    initializePlugPag(appName: string, appVersion: string): void {
        console.log(`initializePlugPag("${appName}", "${appVersion}")`)
        RNModerninha.initializePlugPag(appName, appVersion)
    }

    /**
     * Solicita o cancelamento da operação atual.
     * O cancelamento da transação não ocorre
     * instantaneamente, pois depende do fluxo da transação.
     * @returns Retorna o resultado da solicitação de cancelamento.
     */
    // abort: () => PlugPagAbortResult

    // /**
    //  * Aborta uma operação de leitura/escrita NFC.
    //  */
    // abortNFC: () => PlugPagNFCResult

    // /**
    //  * Realiza a autenticação do sistema NFC usado.
    //  * @returns Retorna sucesso com código 1 e falha com código -1.
    //  */
    // authNFCCardDirectly: (authData: PlugPagNFCAuth) => 1 | -1

    // /**
    //  * Solicita o cancelamento da operação atual de forma assíncrona.
    //  */
    // asyncAbort: (listener: PlugPagAbortListener) => void

    // /**
    //  * Aborta uma operação de leitura/escrita NFC de forma assíncrona.
    //  */
    // asyncAbortNFC: (listener: PlugPagAbortListener) => void

    // /**
    //  * Calcula o valor das parcelas de forma assíncrona.
    //  */
    // asyncCalculateInstallments: (saleValue: String, listener: PlugPagInstallmentsListener) => void

    // /**
    //  * Realiza a desativação do terminal de forma assíncrona.
    //  */
    // asyncDeactivate: (activationData: PlugPagActivationData, listener: PlugPagActivationListener) => void

    // /**
    //  * Obtém a última transação aprovada de forma assíncrona.
    //  */
    // asyncGetLastApprovedTransaction: (listener: PlugPagLastTransactionListener) => void

    // /**
    //  * Verifica se há um usuário autenticado de forma assíncrona.
    //  */
    // asyncIsAuthenticated: (isActivatedListener: PlugPagIsActivatedListener) => void

    // /**
    //  * Realiza leitura do conteúdo de um cartão NFC de forma assíncrona.
    //  */
    // asyncReadNFC: (cardData: PlugPagNearFieldCardData, listener: PlugPagNFCListener) => void

    // /**
    //  * Realiza a reimpressão da via do cliente de forma assíncrona.
    //  */
    // asyncReprintCustomerReceipt: (listener: PlugPagPrinterListener) => void

    // /**
    //  * Realiza a reimpressão da via do estabelecimento de forma assíncrona.
    //  */
    // asyncReprintEstablishmentReceipt: (listener: PlugPagPrinterListener) => void

    // /**
    //  * Realiza escrita em um cartão NFC de forma assíncrona.
    //  */
    // asyncWriteNFC: (cardData: PlugPagNearFieldCardData, listener: PlugPagNFCListener) => void

    // /**
    //  * Toca um beep
    //  * @returns Retorna sucesso com código 1 e falha com código -1.
    //  */
    // beep: (beepData: PlugPagBeepData) => 1 | -1

    // /**
    //  * Calcula o valor das parcelas.
    //  * @returns Retorna os valores das parcelas.
    //  */
    // calculateInstallments: (saleValue: String) => String[]

    /**
     * Efetua um pagamento.
     * @returns Retorna o resultado da transação.
     */
    doPayment (paymentData: PlugPagPaymentData): PlugPagTransactionResult {
        const result: PlugPagTransactionResult = RNModerninha.doPayment(paymentData)
        return result
    }

    // /**
    //  * Realiza a desativação do terminal.
    //  * @returns Retorna o resultado de uma desativação.
    //  */
    // deactivate: (activationData: PlugPagActivationData) => PlugPagInitializationResult

    // /**
    //  * Realiza o dispose do subscriber atual.
    //  */
    // disposeSubscriber: () => void

    // /**
    //  * Realiza a inicialização e a ativação do terminal para uso
    //  * através do código de ativação de forma assíncrona.
    //  */
    // doAsyncInitializeAndActivatePinpad: (PlugPagActivationData: activationData, PlugPagActivationListener: listener) => void

    // /**
    //  * Efetua um estorno de forma assíncrona de um pagamento
    //  * identificado pelos dados contidos em voidData.
    //  */
    // doAsyncVoidPayment: (voidData: PlugPagVoidData, listener: PlugPagPaymentListener) => void 

    // /**
    //  * Retorna a identificação do aparelho definido no construtor da classe.
    //  * @returns Retorna a identificação do aparelho definido no construtor da classe.
    //  */
    // getAppIdentification: () => PlugPagAppIdentification

    // /**
    //  * Retorna o código da aplicação. Esse código é uma constante da biblioteca.
    //  * @returns Retorna o código da aplicação. Esse código é uma constante da biblioteca.
    //  */
    // getApplicationCode: () => String

    // /**
    //  * Obtém a última transação aprovada.
    //  */
    // getLastApprovedTransaction: () => PlugPagTransactionResult

    // // Retorna a versão da biblioteca PlugPagService.
    // getLibVersion: () => String

    // // Obtém as informações de um cartão NFC
    // // @returns Retorna o as informações de cartão NFC
    // getNFCInfos: (cardType: number) => PlugPagNFCInfosResult

    // // Verifica se o terminal tem uma funcionalidade especifica.
    // // Retorna true se houver a funcionalidade, false caso contrário.
    // hasCapability: (capability: number) => boolean

    // // Configura a conexão bluetooth utilizando os dados de deviceInformation.
    // // Retorna PlugPag.RET_OK em caso de sucesso.
    // initBTConnection: (deviceInformation: PlugPagDevice) => PlugPag.RET_OK

    // // Realiza a inicialização e a ativação do terminal para uso
    // // através do código de ativação.
    // // Retorna o resultado da inicialização.
    // initializeAndActivatePinpad: (activationData: PlugPagActivationData) => PlugPagInitializationResult
    
    // // Invalida uma autenticação. Equivalente a realizar um logout.
    // invalidateAuthentication: () => void
    
    // // Verifica se há um usuário autenticado.
    // // Retorna true se houver um usuário autenticado, false caso contrário.
    // isAuthenticated: () => boolean

    // // Solicita a impressão de um arquivo.
    // printFromFile: (printerData: PlugPagPrinterData) => PlugPagPrintResult
    
    // // Solicita a reimpressão da via do cliente.
    // reprintCustomerReceipt: () => PlugPagPrintResult

    // // Solicita a reimpressão da via do estabelecimento.
    // reprintStablishmentReceipt: () => PlugPagPrintResult

    // // Solicita autenticação. O resultado da autenticação é
    // // notificado ao listener que é passado no parâmetro listener.
    // requestAuthentication: (listener: PlugPagAuthenticationListener) => void

    // // Armazena a referência de uma instância de interface que
    // // receberá os eventos gerados durante as transações.
    // setEventListener: (listener: PlugPagEventListener) => void
    
    // // Define os LEDs que serão acesos.
    // // Retorna sucesso com código 1 e falha com código -1.
    // setLed: (ledData: PlugPagLedData) => number

    // // Permite customizar elementos da dialog de impressão da via do cliente.
    // setPlugPagCustomPrinterLayout: (layout: PlugPagCustomPrinterLayout) => void

    // // Configura a tipo de rede Preferido com 1 (4G/3G/2G), 2
    // // (3G/2G), 3 (2G)
    // // Retorna sucesso com true e falha com false.
    // // Boolean setPreferredNetwork(preferedNetwork: number)
    
    // // Armazena a referência de uma instância de interface que
    // // receberá os eventos gerados durante uma impressão.
    // // void setPrinterListener(listener: PlugPagPrinterListener)
    
    // // Define o nome e a versão do aplicativo que está integrando
    // // com o PlugPagService.
    // // appName pode ter no máximo 25 caracteres.
    // // appVersion pode ter no máximo 10 caracteres.
    // // Retorna um código de erro se um dos parâmetros for nulo
    // // ou vazio.
    // setVersionName: (String appName, String appVersion) => number

    // // Inicia a antena NFC para uso.
    // // Retorna sucesso com código 1 e falha com código -1.
    // startNFCCardDirectly: () => number

    // // Finaliza o sistema de NFC em uso.
    // // Retorna sucesso com código 1 e falha com código -1.
    // // number stopNFCCardDirectly()
    
    // // Realiza leitura do conteúdo de um cartão NFC.
    // // Retorna sucesso com código 1 e falha com código -1.
    // // PlugPagNFCResult readFromNFCCard(PlugpagNearFieldCardData cardData)
    
    // // Realiza leitura do conteúdo de um cartão NFC diretamente.
    // // Retorna sucesso com código 1 e falha com código -1.
    // // number readNFCCardDirectly(cardData: PlugPagSimpleNFCData)
    
    // // Efetua um estorno de um pagamento identificado pelos
    // // dados contidos em voidData.
    // // Retorna o resultado da transação.
    // // PlugPagTransactionResult voidPayment(PlugPagVoidData voidData)
    
    // // Realiza escrita em um cartão NFC.
    // // Retorna sucesso com código 1 e falha com código -1.
    // // PlugPagNFCResult writeToNFCCard(PlugpagNearFieldCardData cardData)
    
    // // Realiza escrita em um cartão NFC diretamente.
    // // Retorna sucesso com código 1 e falha com código -1.
    // // number writeToNFCCardDirectly(cardData: PlugPagSimpleNFCData)
    
    // // True - Ativa o fluxo de mock.
    // // False - Desativa o fluxo de mock.
    // // Retorna true se mock foi atualizado com sucesso.
    // // Boolean setMockState(mock: Boolean)
    
    // // Retorna true estado do mock estiver ativado ou false para o
    // // fluxo do mock desativado
    // // Boolean getMockState()
    
    // // Escolhe o retorno simulado esperado typeMock é o caso de
    // // mock selecionado
    // // Retorna se o caso de mock foi alterado com sucesso
    // // Boolean setMockResult(typeMock: number)
    
    // // Retorna o caso de mock escolhido.
    // // PlugPagMockResult getMockResult()
    
    // // Retorna uma lista dos últimos 3 dias com transações no
    // // terminal ordenados pela data desc.
    // // page = 0 retorna a primeira página
    // // page = N retorna “Nº” página
    // // Onde N >= 0
    // // page é um parâmetro opcional. Caso não seja enviado, será
    // // retornada os 100 primeiros itens (N = 0).
    // // Caso seja retornada uma lista vazia, ou a página não existe
    // // (para N > 0) ou o histórico está vazio (para N = 0).
    // PlugPagTransactionHistory: > getTransactionHistory(page: number) => List
}
