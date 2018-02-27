const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

/** mousedown **/
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // 設定移動的初始值為目前頁面距離-當前item左邊距
  startX = e.pageX - slider.offsetLeft;
  // 設定目前捲軸的左距
  scrollLeft = slider.scrollLeft;
});

/** mouseleave **/
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

/** mouseup **/
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

/** 'mousemove **/
slider.addEventListener('mousemove', (e) => {
  // 若移動時的狀態非按下，不作動
  if (!isDown) return;
  e.preventDefault();
  // 設定X（當前定位）為目前頁面距離-當前item左邊距
  const x = e.pageX - slider.offsetLeft;
  // 設定移動距離為 X-初始值
  const walk = (x - startX) * 2;
  // 設定水平捲軸的偏移量
  slider.scrollLeft = scrollLeft - walk;
});