
import { Injectable } from '@nestjs/common';
import { EnvironmentService } from './environment.service';
import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class MailService {

    private transporter: Mail;

    constructor(private environmentService: EnvironmentService) {
        this.transporter = createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
                user: this.environmentService.mailConfiguration.email,
                pass: this.environmentService.mailConfiguration.password
            }
        });
    }

    async send(to: string, subject: string, message: string): Promise<void> {
        await this.transporter.sendMail({
            from: `"${this.environmentService.mailConfiguration.name}" <${this.environmentService.mailConfiguration.email}>`,
            to: `${to}`,
            subject: subject,
            html: message
        });
    }

}
