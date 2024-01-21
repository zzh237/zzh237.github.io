document.addEventListener('DOMContentLoaded', function() {
  var sidebarLinks = document.querySelectorAll('#sidebar-right .toc-link');
  var sidebarCategories = document.querySelectorAll('#sidebar-tags .sidebar-tag');

  document.querySelectorAll('.about-me-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
      var clickedPostTitle = link.innerText;

      // 激活侧边栏的 "Publication" 标签
      sidebarCategories.forEach(function(category) {
        category.classList.remove('active');
        if (category.dataset.filter === 'publication') {
          category.classList.add('active');
        }
      });

      // 显示 "Publications" 分类下的文章
      sidebarLinks.forEach(function(sidebarLink) {
        sidebarLink.style.display = 'none';
        var postCategories = sidebarLink.dataset.tags.split(' ');
        if (postCategories.includes('publication')) {
          sidebarLink.style.display = 'block';
        }
      });

      // 找到对应的侧边栏文章链接并点击
      var found = false;
      sidebarLinks.forEach(function(sidebarLink) {
        if (sidebarLink.innerText.trim() === clickedPostTitle && !found) {
          sidebarLink.click();
          found = true;
        }
      });

      if (!found) {
        console.error('No matching post found in the sidebar for:', clickedPostTitle);
      }
    });
  });
});
