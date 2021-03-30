
import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';
import { EnvironmentService } from './environment.service';

@Injectable()
export class DbService {

    constructor(private environmentService: EnvironmentService) { }

    async query<T>(queryString: string): Promise<T[]> {

        // Use like: const users: User[] = await this.query<User>('');
        
        const dbConnection = await mysql.createConnection(
            this.environmentService.dbConfiguration()
        );

        const [row] = await dbConnection.execute(queryString);

        return (row as unknown as T[]);
    }

}
