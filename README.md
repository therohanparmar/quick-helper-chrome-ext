# Quick Helper - Chrome Extension
Easily access the data you need to speed up your development work.

## Setup

### Download the Extension

- Download the extension from this link: [Download Quick Helper](https://github.com/therohanparmar/quick-helper-chrome-ext/archive/refs/tags/1.0.0.zip).

### Load the Extension in Chrome:

1. Open Chrome and go to `chrome://extensions/`.
2. Turn on `Developer mode` in the top right corner.
3. Click on `Load unpacked` and choose the folder where you saved the extension.

### Load the Extension in Firefox:

1. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
2. Click on `Load Temporary Add-on…` and select `manifest.json` from the extension folder.

### API Data

We use some sample data from [JSONBin](https://jsonbin.io/) to get started. If you prefer to use your own API, make sure that your API's response format matches the structure of the provided sample API response structure.

```javascript
const apiUrl = 'https://api.jsonbin.io/v3/b/670101afacd3cb34a8919055';
```

If you want to use your own data, follow these steps:

##### Steps:
1. Go to [JSONBin](https://jsonbin.io/ "JSONBin") and sign up.
2. Create a new bin with your JSON data.
3. JSONBin will give you an API endpoint to access this data.
4. Replace the `apiUrl` with your new API link.
