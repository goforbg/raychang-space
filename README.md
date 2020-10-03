[![Photo](https://github.com/raychang2017/raychang-space/blob/master/img/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%202020-05-05%20%E4%B8%8B%E5%8D%882.01.58.png?raw=true)](https://dribbble.com/raychangdesign)
[![Photo](https://cdn.dribbble.com/users/3800131/screenshots/11317150/media/08465ea718d17273f4800b2f490e65e7.png)](https://dribbble.com/raychangdesign)

# Ray Chang Space - 100% Responsive Portfolio Website

> 我始終認為，設計與開發是一體兩面，設計本是為開發而存在，開發也是為了完成設計，兩者相輔相成、互相影響。因此在網站的主頁中，我使用建築圖與對設計和開發的解釋，來表現自己在前端學習上，執著於同時兼顧清晰的設計與流暢的開發；網站設計上，我以報紙風格做為基礎，加入噪點以實現擬真的閱讀體驗，並刻意封鎖毫不必要的使用者事件（如文字選取、圖片拖移、右鍵點擊），也更換易於操作的鼠標圖案、加入元素的鼠標反向移動、滾動視差、鼠標觸碰作品圖的漸變效果，以及連絡表單輸入錯誤的微互動。

- 使用預處理器 Sass 撰寫 CSS、使用 JavaScript `class` 物件導向式開發
- 網頁設計以報紙風格為基礎，並搭配聖保羅教堂點出我對設計與開發的想法
- 使用 `data:image` 噪點填充頁面，增加報紙印刷的質感
- 網頁元素以 CSS `rem` 做單位，達成任何尺寸顯示上的絕佳比例
- 使用 CSS `@media` 和 `transform` 讓使用者設備為手機時，自動旋轉 90 度以提供較佳瀏覽體驗
- 使用 JS 封鎖可能會破壞瀏覽體驗的使用者事件，如文字的選取、圖片的拖移，以及右鍵點擊
- 使用 JS `new Date()` 抓取當前時間，再以自製格式輸出到主畫面左上角
- 使用 JS 對主頁名字的區塊做鼠標反向移動，讓觀看者除了有閱讀報紙的感覺，也得到與網站元素互動的樂趣
- 使用套件 [Rellax](https://dixonandmoe.com/rellax/) 對主頁的圓球和文字段落做滾動視差，使網站在捲動時更有立體感
- 作品圖片使用延遲載入技術 Lazy loading，確保網頁載入順暢
- 使用 JS 偵測觀看者使用設備是否為觸控，如果是電腦版，則加入鼠標碰觸作品圖的漸變效果
- 使用 JS 對聯絡表單的 Textarea 做自動擴展或內縮，文字量超過容器寬度時也不會遮蔽文字
- 使用 JS 做表單驗證，並在驗證結果為不通過時加入提示動畫，減少輸入錯誤的挫折感
- 將長度為 2:54 的音樂 [Touch - Svyat Illin](https://icons8.com/music/search/touch) 剪輯為 00:31 並在網頁載入後無限循環播放。此外，在點擊連結、填連絡表單時加入不同音效，讓網站變得有聲有色
- [線上版](https://rayc2045.github.io/raychang-space/)