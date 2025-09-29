import asyncio
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class Plugin:
    async def _main(self):
        """Main plugin entry point"""
        logger.info(
            "Claude Assistant plugin initialized. Requests will be proxied to "
            "http://192.168.1.252:2000/claude via the frontend."
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
