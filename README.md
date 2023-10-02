# **DASH mini project**
> 參照 figma 給予排版網頁的布局，使用 html、css、bootstrap 與 jquery 完成切出與 figma 相同的版型

## 目標
- RWD
- 跨瀏覽器
- 乾淨程式碼
- 設計細節，例如：像素、字體

以下說明 html 內每個 section 使用到的功能

### header
- 使用 bootstrap 的 **navbar** 來做到導覽列的功能
- 最上方有一個橘色梯形部分，則是使用 **border** 來完成
- 而有一條藍色細線則是使用 **skewX** 做傾斜與 **::before** 來置於梯形最前方

### banner
- 使用 bootstrap 的 **Column** 來做排版

### about
- 使用 bootstrap 的 **Column** 來做排版

### offer
- 使用 bootstrap 的 **Column** 與 **Card** 來做到一張卡片圖片外加文字敘述的功能和排版
- 圖片則是使用 svg 來做到 hover 可以用 css 屬性的 fill 來完成變色

### article
- 使用 bootstrap 的 **Column** 與 **Card** 來做到一張卡片圖片外加文字敘述的功能和排版
- 圖片使用 **object-fit: cover** 屬性來避免圖片被擠壓變形
- 圖片上方用一個蓋一層 div 並使用 **opacity** 來做到 hover 遮罩的效果

### testimonials
- 使用 bootstrap 的 **Column** 和 **carousel** 來做輪播和排版
- 這邊設定成自動 3 秒輪播一張並以 fade 的方式切換

### contact
- 使用 bootstrap 的 **Column** 和 **form** 來做表單和排版
- text 的 input 點擊後會做一個 label 上移的動畫
- 其餘有輸入框的 input 則是用 label 使用 absolute 來做到位移至浮在上框

### contact_intro
- 使用 bootstrap 的 **Column** 來做排版

### footer
- 使用 bootstrap 的 **Column** 來做排版

### 特效
- 在所有的 hover 都有加上 transition 讓使用者在 hover 感覺上更加舒適
- 在所有的 button 上與 navbar 補上變色，讓使用者可以知道正在選中哪個元件


### bonus
- 實作一個 top 按鈕，在最頂層的時候不會顯示，當開始往下滑動時才顯示，使用 **fixed** 屬性讓他維持在畫面上，點擊後會 scroll 到最上方
- 實作 loading 畫面，使用 bootstrap 的 **progress** 來做到進度條的部分，在最一開始瀏覽網站時，會根據讀取進度到達 100% 才會進入網站畫面
- 實作往下滾動時 header 維持在最上方，使用 sticky 達成效果，可以更方便點選換頁


## 心得
在最一開始的時候拿到 figma 當天就開始實作了，起初對 bootstrap 的一些功能上不是那麼的熟悉，所以實作初期在寫的過程中比較緩慢，因為必須要邊看 figma 邊讀文件查看是否有適合的功能可以直接用。實作中期的時候，功能有比較上手了，在RWD 的部分，以前都是使用 media 針對尺寸做 RWD，但在使用了 boostrap 的 column 幫你切好版也做好 RWD，實在是方便許多。後期快做完的時候，就看 figma 對應是否有哪些地方畫的不好或者在拖曳 RWD 是否有破圖進行微調，也時而查看是否有更好的寫法可以取代，隨時做更新，整體實作下來雖然有遇到比較不熟的東西，但在克服熟悉過後也在時限內完成 project。