# Quick Helper - Chrome Extension
Quickly access your required data and boost your development speed.

## Setup

### Download the Extension

- Download the extension from [https://github.com/therohanparmar/quick-helper-chrome-ext/archive/refs/tags/1.0.0.zip](https://github.com/therohanparmar/quick-helper-chrome-ext/archive/refs/tags/1.0.0.zip)

### Load the Extension in Chrome:

- Open Chrome and go to `chrome://extensions/`.
- Enable `Developer mode` at the top right.
- Click `Load unpacked` and select your extension folder.

### Load the Extension in Firefox:

- Open Firefox and go to `about:debugging#/runtime/this-firefox`.
- Click `Load Temporary Add-on…` and select `manifest.json` from the extension.

### API Data

The API response must be in this format

```
[
  {
    "section": "Section-1",
    "data":[
        {
          "key": "######",
          "value": "######"
        },
        {
          "key": "######",
          "value": "######"
        },
        .......
      ]
    },
  {
    "section": "Section-2",
    "data":[
      {
        "key": "######",
        "value": "######"
      },
      {
        "key": "######",
        "value": "######"
      },
      .......
    ]
  },
  .......
]
```
