[![Photo](https://raw.githubusercontent.com/rayc2045/raychang-space/master/img/demo/01.png)](https://dribbble.com/raychangdesign)

# Ray Chang Space - 2.5D Portfolio Website with Smooth-scrolling

> 我始終認為，設計與開發是一體兩面，設計本是為開發而存在，開發也是為了完成設計，兩者相輔相成、互相影響。因此在網站的主頁中，我使用建築圖與對設計和開發的解釋，來表現自己在前端學習上，執著於同時兼顧清晰的設計與流暢的開發；網站設計上，我以報紙風格做為基礎，加入噪點以實現擬真的閱讀體驗，並刻意封鎖毫不必要的使用者事件（如文字選取、圖片拖移、右鍵點擊），也更換易於操作的鼠標圖案、加入元素的鼠標反向移動、滾動視差、鼠標觸碰作品圖的漸變效果，以及連絡表單輸入錯誤的微互動。

- 使用預處理器 Sass 撰寫 CSS、使用 JavaScript `class` 物件導向式開發
- 網頁以報紙風格為基礎，並搭配聖保羅教堂點出自己對設計與開發的想法，再以自製格式輸出當前時間到網頁主畫面，以及使用 `data:image` [噪點](http://noisepng.com/)填充頁面，增添印刷紙張的質感
- 網頁元素以 `rem` 做單位，達成任何尺寸顯示上的絕佳比例<!-- - 使用 CSS `@media` 和 `transform` 讓使用者設備為手機時，自動旋轉 90 度以提供最佳瀏覽體驗 -->
- 封鎖任何破壞瀏覽體驗的使用者事件，如文字選取、圖片拖移和右鍵點擊，並加入頁面點擊互動作為補償
- 大型圖片、影片資源採用 [WebP](https://developers.google.com/speed/webp)/[WebM](https://web.dev/efficient-animated-content/) 格式呈現，檔案大小減少 82%！並使用延遲載入技術 [Lazy loading](https://web.dev/browser-level-image-lazy-loading/)，大幅提升網頁載入效率
- 加入 [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/) 平滑滾動功能，使用滑鼠捲動網頁就像滑手機一樣順
- 使用 [GSAP](https://greensock.com/gsap/) 做滾動視差<!-- - 使用 [Rellax](https://dixonandmoe.com/rellax/) 做滾動視差 -->，再透過過 [ScrollTrigger](https://greensock.com/scrolltrigger/) 綁定平滑滾動與滾動視差功能，實現立體感網站
- 為作品封面加上鼠標碰觸 (CSS Hover) 和捲動頁面 ([ScrollTrigger Toggle Class](https://greensock.com/docs/v3/Plugins/ScrollTrigger)) 時的灰階上色互動效果，再透過 JS 監聽事件結合兩者，使其能夠和諧地發揮功能
- 針對觸控設備做互動效果優化：將鼠標碰觸作品時的灰階上色效果以使用者設備為條件做分離，使用非觸控設備開啟網頁才會加入
- 將聯絡表單的 Textarea 做自適應設計，隨著文字量做擴展或內縮
- 使用 JS 做表單驗證，並在驗證結果為不通過時加入提示動畫，減少輸入錯誤的挫折感
- 表單自動復原設計：表單提交後轉換為感謝視窗，捲動頁面離開感謝視窗畫面時，自動換回連絡表單<!-- - 將長度為 2:54 的音樂 [Touch - Svyat Illin](https://icons8.com/music/search/touch) 剪輯為 00:31 並在網頁載入後無限循環播放。此外，在點擊連結、填寫連絡表單時加入不同音效，讓網站變得有聲有色 -->
- 使用自訂網域名稱 [rayc.dev](https://rayc.dev)
- [Ray Chang Space](https://rayc2045.github.io/raychang-space/)