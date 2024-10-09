import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/*

STEP 1 - REQUEST LIFE CYCLE

HOW WORKS:
They are the 1st stage of the requisition flow. 
They receive the request and response object and the method to move on to the next step of the request-response cycle. 

USE CASES:
1. **Authentication**: Verify that the user is authenticated before allowing access to certain routes.
2. **Request Logging**: Record details about each request that arrives at the server.
3. **Data Validation**: Verify and validate input data before processing it.
4. **Header Manipulation**: Add or modify response headers.

*/

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // logic
    next();
  }
}
