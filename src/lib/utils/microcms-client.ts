import { createClient } from 'microcms-js-sdk';

const domain = 'yuuki-okubo';
const apiKey = import.meta.env.VITE_MICROCMS_API_KEY; // 環境変数からAPIキーを読み込む
const client = createClient({ serviceDomain: domain, apiKey: apiKey });

export { client };
