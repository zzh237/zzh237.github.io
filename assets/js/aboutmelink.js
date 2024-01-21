document.addEventListener('DOMContentLoaded', function() {
  // 获取所有侧边栏链接
  var sidebarLinks = document.querySelectorAll('#sidebar-right .toc-link');
  var sidebarCategories = document.querySelectorAll('#sidebar-tags .sidebar-tag');

  // 为每个 "About Me" 链接添加点击事件监听器
  document.querySelectorAll('.about-me-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
      // 取消默认的链接跳转行为
      event.preventDefault();

      // 激活侧边栏的 "Publications" 标签
      sidebarCategories.forEach(function(category) {
        category.classList.remove('active');
        if (category.dataset.filter === 'publication') {
          category.classList.add('active');
        }
      });

      // 显示 "Publications" 分类下的文章
      var publicationPosts = [];
      sidebarLinks.forEach(function(sidebarLink) {
        var postCategories = sidebarLink.dataset.tags.split(' ');
        if (postCategories.includes('publication')) {
          publicationPosts.push(sidebarLink);
        }
      });

      // 隐藏所有侧边栏链接，只显示 "Publications" 文章
      sidebarLinks.forEach(function(link) {
        link.style.display = 'none';
      });
      publicationPosts.forEach(function(link) {
        link.style.display = 'block';
      });

      // 跳转到链接的目标页面
      window.location.href = link.getAttribute('href');

    });
  });
});
