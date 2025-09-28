import asyncio
import aiohttp
from aiohttp import web
import aiofiles
import json
import os
import logging
import base64

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class Plugin:
    async def _main(self):
        """Main plugin entry point"""
        logger.info("Claude Assistant plugin started")

        # Set up HTTP server for Claude API
        app = web.Application()
        app.router.add_post('/claude', self.handle_claude_request)

        # Start server on port 2000
        runner = web.AppRunner(app)
        await runner.setup()
        site = web.TCPSite(runner, 'localhost', 2000)
        await site.start()

        logger.info("Claude API server started on http://localhost:2000")

    async def handle_claude_request(self, request):
        """Handle Claude API requests from the frontend"""
        try:
            # Parse multipart form data
            reader = await request.multipart()
            prompt = None
            image_data = None

            async for field in reader:
                if field.name == 'prompt':
                    prompt = await field.text()
                elif field.name == 'image':
                    image_data = await field.read()

            if not prompt:
                return web.json_response(
                    {'error': 'No prompt provided'},
                    status=400
                )

            # Here you would integrate with actual Claude API
            # For now, return a mock response
            response_text = f"Mock Claude response to: {prompt}"
            if image_data:
                response_text += " (with image analysis)"

            return web.json_response({
                'response': response_text
            })

        except Exception as e:
            logger.error(f"Error handling Claude request: {e}")
            return web.json_response(
                {'error': f'Internal server error: {str(e)}'},
                status=500
            )

    async def _unload(self):
        """Cleanup when plugin unloads"""
        logger.info("Claude Assistant plugin unloaded")

# Plugin entry point
async def main():
    plugin = Plugin()
    await plugin._main()

    # Keep the plugin running
    try:
        while True:
            await asyncio.sleep(1)
    except KeyboardInterrupt:
        await plugin._unload()

if __name__ == "__main__":
    asyncio.run(main())