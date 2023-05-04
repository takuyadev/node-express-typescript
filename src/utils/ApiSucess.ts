// @desc Structures data from success with more relevant data
export class ApiSuccess<T> {
    success: boolean;
    message?: string;
    data: T | T[];
 
    constructor(data: T, message: string) {
       this.success = true;
       this.data = data;
 
       if (message) {
          this.message = message;
       }
    }
 }