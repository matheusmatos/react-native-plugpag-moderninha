
/**
 * Código utilizado para indicar sucesso nas operações.
 */
export const RET_OK: number = 0

/**
 * Código utilizado para iniciar a Activity de autenticação.
 */
export const REQUEST_CODE_AUTHENTICATION: number = 46981

/**
 * Tipo de pagamento: crédito.
 */
export const TYPE_CREDITO: number = 1

/**
 * Tipo de pagamento: débito.
 */
export const TYPE_DEBITO: number = 2

/**
 * Tipo de pagamento: voucher (vale refeição).
 */
export const TYPE_VOUCHER: number = 3

/**
 * Tipo de pagamento: qrcode elo.
 */
export const TYPE_QRCODE: number = 4

/**
 * Tipo de pagamento: qrcode pix.
 */
export const TYPE_PIX: number = 5

/**
 * Forma de parcelamento: à vista.
 */
export const INSTALLMENT_TYPE_A_VISTA: number = 1

/**
 * Forma de parcelamento: parcelamento vendedor.
 */
export const INSTALLMENT_TYPE_PARC_VENDEDOR: number = 2

/**
 * Código de retorno para indicar erro de falta de permissões do aplicativo.
 */
export const ERROR_REQUIREMENTS_MISSING_PERMISSIONS: number = 3000

/**
 * Código de retorno para indicar que o aparelho possui permissões de root.
 */
export const ERROR_REQUIREMENTS_ROOT_PERMISSION: number = 3001