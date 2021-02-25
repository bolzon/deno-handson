
import { serve } from 'https://deno.land/std@0.88.0/http/server.ts';

const server = serve({ hostname: '0.0.0.0', port: 8080 });

console.log('Server listening on http://localhost:8080/');

for await (const request of server) {
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const body = `Your user-agent is:\n\n${userAgent}`;
    request.respond({ status: 200, body });
}
