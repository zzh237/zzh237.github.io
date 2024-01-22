document.addEventListener('DOMContentLoaded', function() {
  // Define the publication category
  var publicationCategory = 'publications'; // Make sure this matches your category name

  document.querySelectorAll('.about-me-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var targetUrl = link.getAttribute('href');
      
      // Hide all non-publication links in the sidebar
      var sidebarLinks = document.querySelectorAll('#sidebar-right .toc-link');
      sidebarLinks.forEach(function(sidebarLink) {
        var postCategories = sidebarLink.dataset.tags.split(' ');
        if (!postCategories.includes(publicationCategory)) {
          sidebarLink.style.display = 'none'; // Hide non-publication links
        }
      });

      // Find and click the sidebar link for the publication
      var publicationLink = Array.from(sidebarLinks).find(function(sidebarLink) {
        return sidebarLink.href.endsWith(targetUrl);
      });

      if (publicationLink) {
        publicationLink.click(); // Click the publication link if it exists
      } else {
        window.location.href = targetUrl; // Redirect to the publication if the sidebar link doesn't exist
      }
    });
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelectorAll('.about-me-link').forEach(function(link) {
//     link.addEventListener('click', function(event) {
//       event.preventDefault();

//       var targetUrl = link.getAttribute('href');
//       var sidebarLink = document.querySelector('#sidebar-right .toc-link[href="' + targetUrl + '"]');

//       var sidebarLinks = document.querySelectorAll('#sidebar-right .toc-link');
//       var publicationCategory = 'publications'; // This should match your publications category exactly.

//       // Hide all links in the sidebar that are not publications
//       sidebarLinks.forEach(function(sidebarLink) {
//         var isPublication = sidebarLink.dataset.tags.split(' ').includes(publicationCategory);
//         sidebarLink.style.display = isPublication ? 'block' : 'none';
//       });

//       // Click the sidebar link if it exists
//       if (sidebarLink) {
//         sidebarLink.click();
//       } else {
//         window.location.href = targetUrl;
//       }
//     });
//   });
// });



// document.addEventListener('DOMContentLoaded', function() {
//   // 监听所有 '.about-me-link' 的点击事件
//   document.querySelectorAll('.about-me-link').forEach(function(link) {
//     link.addEventListener('click', function(event) {
//       // 取消默认的链接行为
//       event.preventDefault();
      
//       // 获取要导航到的链接的URL
//       var targetUrl = link.getAttribute('href');

//       // 在侧边栏中找到对应的链接
//       var sidebarLink = document.querySelector('#sidebar-right .toc-link[href="' + targetUrl + '"]');
//       if (sidebarLink) {
//         // 如果找到了侧边栏中的链接，模拟点击它
//         sidebarLink.click();
//       } else {
//         // 如果没有找到，可能需要重定向到目标URL
//         window.location.href = targetUrl;
//       }
//     });
//   });
// });
