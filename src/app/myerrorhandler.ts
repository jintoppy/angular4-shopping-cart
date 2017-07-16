import {ErrorHandler} from '@angular/core';

export class MyErrorHandler implements ErrorHandler{
    handleError(err){
        console.log('within error handler');
        console.error(err);
    }
}