import { Context, Callback } from 'aws-lambda';
export declare const config: {
    api: {
        bodyParser: boolean;
    };
};
export default function handler(event: any, context: Context, callback: Callback): Promise<any>;
