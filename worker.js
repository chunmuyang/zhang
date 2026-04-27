export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const cmd = url.searchParams.get("cmd");

        if (cmd) {
            await env.KV.put("beep", cmd);
            return new Response("ok:" + cmd);
        }
        
        return new Response(await env.KV.get("beep") || "");
    }
};