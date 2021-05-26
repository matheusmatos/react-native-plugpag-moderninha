
export interface PlugPagAbortResult {
    /**
     * @returns Retorna o código de resultado da solicitação de cancelamento de operação.
     */
    getResult: () => number
}
