export interface ErrorResponse {
    statusCode: number;
    message: string;
    exception?: any;
}

export abstract class HttpHelper {
    
    public static mapErrorResponse(error: any): ErrorResponse {
        
        let errorResponse: ErrorResponse = {
            statusCode: 500,
            message: 'Algo errado 🙁...',
            exception: error
        };

        if (error.statusCode)
            errorResponse.statusCode = error.statusCode;

        if (error.message)
            errorResponse.message = error.message;

        if (error.exception)
            errorResponse.exception = error.exception;

        return errorResponse;
    }
}