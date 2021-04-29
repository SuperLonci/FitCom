
import { Controller, Param, Post, Request } from '@nestjs/common';
import { IdentityProviderService } from './identity-provider.service';
import { AuhtenticationResponse, Credentials, UserForRegistration } from './identity-provider.interfaces';

@Controller('identity-provider')
export class IdentityProviderController {

    constructor(private readonly identityProviderService: IdentityProviderService) {}

    @Post('auhtenticate')
    async auhtenticate(@Request() request: Request): Promise<AuhtenticationResponse> {
        const credentials = request.body as unknown as Credentials;
        return await this.identityProviderService.auhtenticate(credentials);
    }

    @Post('authorize')
    async authorize(@Request() request: Request): Promise<AuhtenticationResponse> {
        const jwt = (request.headers as unknown as { authorization: string }).authorization;
        return this.identityProviderService.authorize(jwt);
    }

    @Post('register/:activationToken')
    async register(@Param('activationToken') activationToken: string, @Request() request: Request): Promise<AuhtenticationResponse> {
        const staff = request.body as unknown as UserForRegistration;
        return await this.identityProviderService.register(activationToken, staff);
    }

}
