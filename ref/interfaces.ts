/**
 * Interface com métodos que são chamados durante uma transação assíncrona de abort.
 */
export interface PlugPagAbortListener {}
/**
 * Interface com métodos que são chamados durante uma ativação e/ou durante uma desativação assíncrona.
 */
export interface PlugPagActivationListener {}
/**
 * Interface com métodos que são chamados ao realizar o cálculo de parcelas de forma assíncrona.
 */
export interface PlugPagInstallmentsListener {}
/**
 * Interface com métodos que são chamados durante uma verificação se está ou não ativado assíncrona.
 */
export interface PlugPagIsActivatedListener {}
/**
 * Interface com métodos que são chamados ao tentar obter de forma assíncrona a última transação aprovada.
 */
export interface PlugPagLastTransactionListener {}
/**
 * Interface com métodos que são chamados durante uma leitura ou uma escrita assíncrona em um cartão NFC.
 */
export interface PlugPagNFCListener {}
/**
 * Interface com métodos que são chamados durante uma transação assíncrona de pagamento.
 */
export interface PlugPagPaymentListener {}
/**
 * Interface com método chamado quando um evento é enviado durante uma transação.
 */
export interface PlugPagEventListener {}
/**
 * Interface com métodos chamados quando um evento é enviado durante uma impressão.
 */
export interface PlugPagPrinterListener {}
