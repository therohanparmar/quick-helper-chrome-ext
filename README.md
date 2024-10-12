# Quick Helper - Chrome Extension
Easily access the data you need to speed up your development work.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/en/download/) installed. The project requires `npm` to run the build process.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/therohanparmar/quick-helper-chrome-ext.git
   cd quick-helper-chrome-ext`
   ```
2. Install the dependencies:
```bash
	npm install
```
----
### Running the Build Process
To compile both JavaScript and SCSS, run the following command:
```bash
 npm run build
```

This command will bundle the JavaScript files and compile the SCSS into CSS. You will find the output in the dist folder.

### Watch for Changes
You can watch for changes during development to automatically recompile your files.

#### JavaScript
    npm run watch
This will watch for changes in JavaScript files and re-bundle them when changes are detected.

#### SCSS:

bash
```bash
npm run watch-scss
```
This will watch for changes in SCSS files and recompile them to CSS automatically.

##### Folder Structure
`src/`: Contains the source files for both JavaScript and SCSS.
`dist/`: Contains the compiled files after running the build process.

#### Notes
Make sure to run `npm install` before running any build or watch commands.

If you encounter any issues, ensure all dependencies are installed and up to date by running:

    npm install

----
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
