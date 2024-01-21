document.addEventListener('DOMContentLoaded', function() {
  // 获取所有侧边栏链接
  var sidebarLinks = document.querySelectorAll('#sidebar-right .toc-link');
  var sidebarCategories = document.querySelectorAll('#sidebar-tags .sidebar-tag');

  // 为每个 "About Me" 链接添加点击事件监听器
  document.querySelectorAll('.about-me-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
      // 获取点击的链接对应的文章标题
      var clickedPostTitle = link.innerText;

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

      // 尝试在侧边栏中找到对应的文章链接
      var found = false;
      publicationPosts.forEach(function(sidebarLink) {
        if (sidebarLink.innerText.trim() === clickedPostTitle) {
          found = true;
          window.location.href = sidebarLink.href; // 直接跳转到相应页面
        }
      });

      // 如果没有找到对应的文章链接，则可能需要考虑重定向或其他行为
      if (!found) {
        console.error('No matching post found in the sidebar for:', clickedPostTitle);
        // 可以在这里添加重定向或错误处理
      }
    });
  });
});
