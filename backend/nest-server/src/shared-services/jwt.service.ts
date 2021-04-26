
import { Injectable, UnauthorizedException, Request } from '@nestjs/common';
import { EnvironmentService } from './environment.service';
import * as jsonwebtoken from 'jsonwebtoken';

@Injectable()
export class JwtService {

    constructor(private environmentService: EnvironmentService) {}
    
    // eslint-disable-next-line @typescript-eslint/ban-types
    sign(content: any): string {
        return jsonwebtoken.sign(
            content,
            this.environmentService.jwtPrivateKey,
            { expiresIn: '2d' }
        );
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    getContentAndVerify<T>(jwt: string): T {
        try {
            return jsonwebtoken.verify(jwt, this.environmentService.jwtPrivateKey) as unknown as T;
        } catch {
            throw new UnauthorizedException;
        }
    }

    authorizeAndGetJWTContent<T>(httpRequest: Request): T {
        const jwt = ((httpRequest.headers) as unknown as { authorization: string }).authorization;
        try {
            return jsonwebtoken.verify(jwt, this.environmentService.jwtPrivateKey) as unknown as T;
        } catch {
            throw new UnauthorizedException;
        }
    }

}
