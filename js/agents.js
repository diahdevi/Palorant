document.addEventListener('DOMContentLoaded', function () {
    const backIcon = document.getElementById('back-icon');
  
    backIcon.addEventListener('click', function () {
      window.history.back(); // ini yang bikin balik ke halaman sebelumnya
    });
  });

