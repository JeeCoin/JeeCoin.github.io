 buyBtn.addEventListener('click', function() {
        // 使用window.location实现页面跳转
        // 请将'https://example.com'替换为您想要跳转到的页面的URL
        window.location.href = 'https://gmgn.ai/sol/token/73XXGKh1pfYQd8dCnvNRZSuuYhCjoagc96cBVMenpump';
});

twiterBtn.addEventListener('click', function() {
        // 使用window.location实现页面跳转
        // 请将'https://example.com'替换为您想要跳转到的页面的URL
        window.location.href = 'https://x.com/JeeCoin64599';
});


copyBtn.addEventListener('click', function() {
    const textarea = document.createElement('textarea');
      textarea.value = "73XXGKh1pfYQd8dCnvNRZSuuYhCjoagc96cBVMenpump";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      copyImg.style.display = "none"
      tickImg.style.display = "inline-block"
});

copyBtn.addEventListener('mouseenter', function() {
     copyTip.style.display = "initial"
     copyImg.style.display = "inline-block"
     tickImg.style.display = "none"
});


copyBtn.addEventListener('mouseleave', function() {
     copyTip.style.display = "none"
});
