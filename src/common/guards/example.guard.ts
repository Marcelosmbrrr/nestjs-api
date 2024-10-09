import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

/*

STEP 2 - REQUEST LIFE CYCLE

HOW WORKS:
They are the 2nd stage of the requisition flow.
Guards are classes that implement the 'CanActivate' interface. 
They are responsible for determining whether a particular route can be accessed or not. 
Guards should return a Boolean or a Promise that resolves to one, indicating whether the request should continue or be blocked.
Receive the Context object.

USE CASES:
1. **Authentication**: Verify that the user is logged in before accessing protected resources.
2. **Authorization**: Control access based on user roles or permissions.
3. **Access Limitation**: Restricting access to certain routes to only specific users or groups.
4. **State Validation**: Check if the user has a valid state (e.g., active account) before proceeding.

*/

@Injectable()
export class ExampleGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];

    if (token) {
      console.log('Token encontrado, acesso permitido.');
      return true;
    }

    console.log('Token não encontrado, acesso negado.');
    return false;
  }
}
