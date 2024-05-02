<p align="center">
  <img src="https://github.com/nitayneeman/vscode-playwright-snippets/blob/main/images/playwright-logo.png?raw=true" alt="Playwright Logo">
</p>

<h1 align="center">VS Code - Playwright Snippets</h1>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=nitayneeman.playwright-snippets"><img src="https://vsmarketplacebadge.apphb.com/version/nitayneeman.playwright-snippets.svg?label=Playwright%20Snippets&&color=2b3137" alt="Marketplace"></a>
  <a href="https://travis-ci.com/nitayneeman/vscode-playwright-snippets"><img src="https://travis-ci.com/nitayneeman/vscode-playwright-snippets.svg?token=vHfpxFNvotCsScqrpvMs&branch=main" alt="Build"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nitayneeman.playwright-snippets"><img src="https://vsmarketplacebadge.apphb.com/installs/nitayneeman.playwright-snippets.svg?color=blue" alt="Installs"></a>
  <a href="https://github.com/nitayneeman/vscode-playwright-snippets/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-lightgray.svg" alt="License"></a>
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=nitayneeman.playwright-snippets">Installation</a> ·
  <a href="https://github.com/nitayneeman/vscode-playwright-snippets#-how-to-use">Usage</a> ·
  <a href="https://github.com/nitayneeman/vscode-playwright-snippets#-snippets-list">Snippets</a> ·
  <a href="https://github.com/nitayneeman/vscode-playwright-snippets/blob/main/CHANGELOG.md">CHANGELOG</a>
</p>

## ℹ️️ Description

This Visual Studio Code extension adds predefined useful code snippets for [Playwright](https://playwright.dev/).

<p align="center">
  <img src="https://github.com/nitayneeman/vscode-playwright-snippets/blob/main/images/preview.gif?raw=true" alt="Preview">
</p>

Check out the [API](https://playwright.dev/docs/api/class-playwright) for getting more information about the available capabilities.

<br>

## 👨🏻‍🏫 How to Use

The first thing you need to do is installing the [extension](https://marketplace.visualstudio.com/items?itemName=nitayneeman.playwright-snippets).

Basically, there are two ways to apply the snippets:

### 1. Direct Typing

Start typing the prefix or just part of the snippet. Then, locate the snippets on the suggestions list and click on `TAB` or `ENTER`.

### 2. Command Palette

Open the Command Palette and type `Insert Snippet`. Then, simply choose the dedicated snippet.

<br>

## 📄 Snippets List

Below is attached a list of all supported snippets.

### Playwright

| Snippet                    | Content                        |
| -------------------------- | ------------------------------ |
| `pw-import`                | require('playwright')          |
| `pw-import-chromium`       | require('playwright').chromium |
| `pw-import-firefox`        | require('playwright').firefox  |
| `pw-import-webkit`         | require('playwright').webkit   |
| `pw-import-devices`        | require('playwright').devices  |
| `pw-connect-chromium`      | chromium.connect               |
| `pw-launch-chromium`       | chromium.launch                |
| `pw-launchServer-chromium` | chromium.launchServer          |
| `pw-connect-firefox`       | firefox.connect                |
| `pw-launch-firefox`        | firefox.launch                 |
| `pw-launchServer-firefox`  | firefox.launchServer           |
| `pw-connect-webkit`        | webkit.connect                 |
| `pw-launch-webkit`         | webkit.launch                  |
| `pw-launchServer-webkit`   | webkit.launchServer            |

### Browser

| Snippet                      | Content                        |
| ---------------------------- | ------------------------------ |
| `pw-browser-close`           | browser.close                  |
| `pw-browser-contexts`        | browser.contexts               |
| `pw-browser-isConnected`     | browser.isConnected            |
| `pw-browser-newContext`      | browser.newContext             |
| `pw-browser-newPage`         | browser.newPage                |
| `pw-browser-version`         | browser.version                |
| `pw-browser-on-disconnected` | browser.on('disconnected',...) |

### BrowserContext

| Snippet                      | Content                 |
| ---------------------------- | ----------------------- |
| `pw-browserContext-close`    | context.close           |
| `pw-browserContext-cookies`  | context.cookies         |
| `pw-browserContext-newPage`  | context.newPage         |
| `pw-browserContext-pages`    | context.pages           |
| `pw-browserContext-route`    | context.route           |
| `pw-browserContext-unroute`  | context.unroute         |
| `pw-browserContext-on-close` | context.on('close',...) |
| `pw-browserContext-on-page`  | context.on('page',...)  |

### BrowserServer

| Snippet                     | Content                       |
| --------------------------- | ----------------------------- |
| `pw-browserServer-close`    | browserServer.close           |
| `pw-browserServer-kill`     | browserServer.kill            |
| `pw-browserServer-on-close` | browserServer.on('close',...) |

### Page

| Snippet                       | Content                         |
| ----------------------------- | ------------------------------- |
| `pw-page-$`                   | page.\$                         |
| `pw-page-$$`                  | page.\$\$                       |
| `pw-page-$$eval`              | page.\$\$eval                   |
| `pw-page-$eval`               | page.\$eval                     |
| `pw-page-bringToFront`        | page.bringToFront               |
| `pw-page-click`               | page.click                      |
| `pw-page-close`               | page.close                      |
| `pw-page-content`             | page.content                    |
| `pw-page-dblclick`            | page.dblclick                   |
| `pw-page-emulateMedia`        | page.emulateMedia               |
| `pw-page-evaluate`            | page.evaluate                   |
| `pw-page-fill`                | page.fill                       |
| `pw-page-focus`               | page.focus                      |
| `pw-page-goBack`              | page.goBack                     |
| `pw-page-goForward`           | page.goForward                  |
| `pw-page-goto`                | page.goto                       |
| `pw-page-hover`               | page.hover                      |
| `pw-page-keyboard-down`       | page.keyboard.down              |
| `pw-page-keyboard-insertText` | page.keyboard.insertText        |
| `pw-page-keyboard-press`      | page.keyboard.press             |
| `pw-page-keyboard-type`       | page.keyboard.type              |
| `pw-page-keyboard-up`         | page.keyboard.up                |
| `pw-page-mouse-click`         | page.mouse.click                |
| `pw-page-mouse-dblclick`      | page.mouse.dblclick             |
| `pw-page-mouse-down`          | page.mouse.down                 |
| `pw-page-mouse-move`          | page.mouse.move                 |
| `pw-page-mouse-up`            | page.mouse.up                   |
| `pw-page-pause`               | page.pause                      |
| `pw-page-pdf`                 | page.pdf                        |
| `pw-page-press`               | page.press                      |
| `pw-page-reload`              | page.reload                     |
| `pw-page-route`               | page.route                      |
| `pw-page-screenshot`          | page.screenshot                 |
| `pw-page-title`               | page.title                      |
| `pw-page-type`                | page.type                       |
| `pw-page-unroute`             | page.unroute                    |
| `pw-page-url`                 | page.url                        |
| `pw-page-waitForEvent`        | page.waitForEvent               |
| `pw-page-waitForFunction`     | page.waitForFunction            |
| `pw-page-waitForLoadState`    | page.waitForLoadState           |
| `pw-page-waitForNavigation`   | page.waitForNavigation          |
| `pw-page-waitForRequest`      | page.waitForRequest             |
| `pw-page-waitForResponse`     | page.waitForResponse            |
| `pw-page-waitForSelector`     | page.waitForSelector            |
| `pw-page-waitForTimeout`      | page.waitForTimeout             |
| `pw-page-on-close`            | page.on('close',...)            |
| `pw-page-on-console`          | page.on('console',...)          |
| `pw-page-on-crash`            | page.on('crash',...)            |
| `pw-page-on-dialog`           | page.on('dialog',...)           |
| `pw-page-on-domcontentloaded` | page.on('domcontentloaded',...) |
| `pw-page-on-frameattached`    | page.on('frameattached',...)    |
| `pw-page-on-framedetached`    | page.on('framedetached',...)    |
| `pw-page-on-framenavigated`   | page.on('framenavigated',...)   |
| `pw-page-on-load`             | page.on('load',...)             |
| `pw-page-on-pageerror`        | page.on('pageerror',...)        |
| `pw-page-on-popup`            | page.on('popup',...)            |
| `pw-page-on-request`          | page.on('request',...)          |
| `pw-page-on-requestfailed`    | page.on('requestfailed',...)    |
| `pw-page-on-requestfinished`  | page.on('requestfinished',...)  |
| `pw-page-on-response`         | page.on('response',...)         |
| `pw-page-on-worker`           | page.on('worker',...)           |

### General Examples

| Snippet                   | Content                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------- |
| `pw-examples-basic`       | Creates a basic usage example of a page                                            |
| `pw-examples-dragAndDrop` | Creates an example that drags the mouse from a point and drops it to another point |

<br>

## 💁🏻 Contributing

This is an open source project. Any contribution would be greatly appreciated!
