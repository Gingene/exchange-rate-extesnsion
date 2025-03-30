# Exchange Rate Converter

一個使用 Vue 3、Vite、Pinia 和 Tailwind CSS 建構的匯率轉換應用程式，可作為瀏覽器擴充功能使用。

## 主要功能

- 即時匯率轉換
- 選擇來源和目標貨幣
- 自訂數字格式化選項
- 淺色/深色主題切換

## 技術棧

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Oxlint](https://oxc-project.github.io/docs/guide/usage/linter.html)

## 目前可以在 github-page 試用功能

## 推薦 IDE 設定

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (並禁用 Vetur)。建議安裝 `.vscode/extensions.json` 中推薦的擴充套件。

## 專案設定與腳本

### 安裝依賴

```sh
pnpm install
```

### 啟動開發伺服器 (用於網頁開發)

```sh
pnpm dev
```

### 編譯和最小化 (生產模式 / 打包擴充功能)

執行此指令會將專案打包成用於生產環境的靜態檔案，並輸出到專案根目錄下的 `dist` 資料夾中。這個 `dist` 資料夾就是瀏覽器擴充功能所需的檔案集合。

```sh
pnpm build
```

### 程式碼檢查

```sh
pnpm lint
```

### 程式碼格式化

```sh
pnpm format
```

## 作為瀏覽器擴充功能使用 (Chrome/Edge)

1.  **打包擴充功能**:

    - 在專案根目錄執行 `pnpm build` 指令。
    - 這會在專案根目錄下產生一個 `dist` 資料夾，其中包含擴充功能所需的所有檔案 (包括 `manifest.json`, `index.html`, JavaScript, CSS 等)。

2.  **載入擴充功能**:

    - 開啟您的瀏覽器 (Chrome 或 Edge)。
    - 在網址列輸入 `chrome://extensions` (Chrome) 或 `edge://extensions` (Edge) 並前往。
    - 確保頁面右上角的「開發人員模式」(Developer mode) 開關已啟用。
    - 點擊「載入未封裝項目」(Load unpacked) 按鈕。
    - 在彈出的檔案選擇器中，選擇您專案根目錄下的 `dist` 資料夾。
    - 點擊「選取資料夾」。

3.  **使用擴充功能**:
    - 擴充功能現在應該已經載入並出現在您的擴充功能列表中。
    - 點擊瀏覽器工具列上的「匯率插件」圖示 (可能需要先在擴充功能選單中固定它)。
    - 擴充功能的彈出視窗 (`index.html`) 將會顯示，您可以在其中使用匯率轉換功能。

## 自訂配置

請參閱 [Vite 配置參考](https://vite.dev/config/)。
