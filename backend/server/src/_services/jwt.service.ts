
import { Injectable, UnauthorizedException, Request } from '@nestjs/common';
import { EnvironmentService } from './environment.service';
import * as jsonwebtoken from 'jsonwebtoken';

@Injectable()
export class JwtService {

    constructor(private environmentService: EnvironmentService) {}

    sign(content: any): string {
        return jsonwebtoken.sign(
            content,
            this.environmentService.jwtPrivateKey,
            { expiresIn: '2d' }
        );
    }

    verify<T>(jwt: string): T {
        try {
            return jsonwebtoken.verify(jwt, this.environmentService.jwtPrivateKey) as unknown as T;
        } catch {
            throw new UnauthorizedException;
        }
    }

    verifyHttpRequest<T>(httpRequest: Request): T {
        const jwt = ((httpRequest.headers) as unknown as { authorization: string }).authorization;
        return this.verify(jwt);
    }

}
