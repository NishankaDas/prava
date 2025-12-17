const modal = document.getElementById("galleryModal");
          const modalImg = document.getElementById("galleryImage");
          const closeBtn = document.querySelector(".gallery-modal .close");
          const nextBtn = document.getElementById("nextBtn");
          const prevBtn = document.getElementById("prevBtn");

          let images = [];
          let currentIndex = 0;

          document.querySelectorAll(".product-img").forEach(img => {
            img.addEventListener("click", () => {
              images = JSON.parse(img.dataset.gallery);
              currentIndex = 0;
              modalImg.src = images[currentIndex];
              modal.style.display = "flex";
            });
          });

          closeBtn.onclick = () => {
            modal.style.display = "none";
          };

          nextBtn.onclick = () => {
            currentIndex = (currentIndex + 1) % images.length;
            modalImg.src = images[currentIndex];
          };

          prevBtn.onclick = () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            modalImg.src = images[currentIndex];
          };

          modal.addEventListener("click", e => {
            if (e.target === modal) {
              modal.style.display = "none";
            }
          });
