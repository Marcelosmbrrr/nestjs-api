import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/*

STEP 3 - REQUEST LIFE CYCLE

HOW WORKS:
They are the 3rd stage of the request flow.
Interceptors are classes that implement the 'NestInterceptor' interface. 
Interceptors can wrap the handler call on a Promise, allowing you to modify the result or handle errors before sending it to the client.
They receive the Context object and the CallHandler, which allows them to interact with the controller's response.

USE CASES:
1. **Response Transformation**: Modify or format the response before sending it to the customer.
2. **Error Handling**: Capture and process errors centrally.
3. **Adding Metadata**: Include additional information in the response, such as execution times.
4. **Cache**: Implement caching logic to optimize performance.

*/

@Injectable()
export class ExampleInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
  }
}
