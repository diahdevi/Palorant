document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('agentModal');
    const closeModal = document.getElementById('closeAgentModal');

    cards.forEach(card => {
        card.addEventListener('click', function (e) {
            e.preventDefault(); // stop link navigation
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Optional: klik luar modal untuk tutup
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tooltip = document.getElementById("tooltip");
    const icons = document.querySelectorAll(".ability-icon");
  
    icons.forEach(icon => {
      icon.addEventListener("mouseenter", function (e) {
        const text = this.getAttribute("data-tooltip");
        tooltip.textContent = text;
        tooltip.style.opacity = 1;
        tooltip.style.left = e.pageX + 15 + "px";
        tooltip.style.top = e.pageY - 20 + "px";
      });
  
      icon.addEventListener("mousemove", function (e) {
        tooltip.style.left = e.pageX + 15 + "px";
        tooltip.style.top = e.pageY - 20 + "px";
      });
  
      icon.addEventListener("mouseleave", function () {
        tooltip.style.opacity = 0;
      });
    });
  });
  