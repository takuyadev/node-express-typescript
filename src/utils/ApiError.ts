// @desc Structures data from error with more relevant data
export class ApiError extends Error {
    statusCode: number;
    error: unknown;
    data: [] | {};
 
    constructor(data: {} | [], statusCode: number, message: string) {
       super(message);
       this.statusCode = statusCode;
       this.data = data;
    }
 }