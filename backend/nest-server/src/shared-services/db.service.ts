
import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

@Injectable()
export class DbService {

    async query<T>(queryString: string): Promise<T[]> {

        // Use like: const users: User[] = await this.query<User>('');

        const dbConnection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'fitcom',
            password: '&6pD-j,=U9,E*FFTD.KqPVu!O;_0FEQ.',
            database: 'db_fitcom'
        });

        const [row] = await dbConnection.execute(queryString);

        return (row as unknown as T[]);
    }

}
