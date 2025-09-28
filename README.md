# Claude Assistant Decky Plugin

A Decky plugin that allows you to interact with your Claude API server directly from your Steam Deck.

## Features

- Send text prompts to Claude API
- Optional screenshot capture to include images in your requests
- Real-time response display
- Simple, clean interface integrated into Steam Deck's UI

## Prerequisites

1. **Decky Loader** must be installed on your Steam Deck
2. **Claude API Server** must be running at `localhost:2000`
   - Your Claude API server should be located at `~/ClaudeApi/claude_server.py`
   - Start it with: `python3 ~/ClaudeApi/claude_server.py`

## Installation

1. Copy the entire `claude-decky-plugin` folder to your Decky plugins directory:
   ```bash
   cp -r claude-decky-plugin ~/.local/share/Steam/steamapps/common/SteamLinux/steamapps/common/SteamLinux/steamapps/common/Steam/config/systemapps/steamapps/common/DeckyLoader/plugins/
   ```

2. Restart Steam or reload Decky plugins

## Usage

1. Make sure your Claude API server is running on port 2000
2. Open the Steam Deck side panel and look for the "Claude Assistant" plugin (robot icon)
3. Enter your prompt in the text field
4. Optionally check "Include Screenshot" to capture and send a screenshot with your request
5. Click "Send Request" to submit your prompt to Claude
6. Wait for the response to appear in the output area

## Development

To build the plugin from source:

```bash
npm install
npm run build
```

To watch for changes during development:

```bash
npm run watch
```

## API Compatibility

This plugin is designed to work with the Claude API server that:
- Accepts multipart form data at `/claude` endpoint
- Supports both text-only and image+text requests
- Returns JSON responses with a `response` field

## Troubleshooting

- **Plugin not appearing**: Ensure Decky Loader is properly installed and the plugin folder is in the correct location
- **API connection errors**: Make sure the Claude API server is running on `localhost:2000`
- **Screenshot capture failing**: The plugin may require additional permissions for screen capture on Steam Deck

## License

GPL-2.0