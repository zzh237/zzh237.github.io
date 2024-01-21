document.addEventListener('DOMContentLoaded', function() {
  // 监听所有 '.about-me-link' 的点击事件
  document.querySelectorAll('.about-me-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
      // 取消默认的链接行为
      event.preventDefault();
      
      // 获取要导航到的链接的URL
      var targetUrl = link.getAttribute('href');

      // 在侧边栏中找到对应的链接
      var sidebarLink = document.querySelector('#sidebar-right .toc-link[href="' + targetUrl + '"]');
      if (sidebarLink) {
        // 如果找到了侧边栏中的链接，模拟点击它
        sidebarLink.click();
      } else {
        // 如果没有找到，可能需要重定向到目标URL
        window.location.href = targetUrl;
      }
    });
  });
});
