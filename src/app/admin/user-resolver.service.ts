import {Resolve} from '@angular/router';
export class UserResolver implements Resolve<Object> {
    resolve(route, state){
        return new Promise((res, rej ) => {
            res({
                name: 'trial'
            });
        });
    }
}