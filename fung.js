document.addEventListener("DOMContentLoaded", () => {
    const starContainer = document.body;

    // Fungsi untuk membuat bintang
    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");

        // Atur posisi bintang secara acak
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;

        // Atur ukuran bintang acak
        const size = Math.random() * 3 + 1; // Ukuran antara 1px hingga 4px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Atur posisi bintang
        star.style.left = `${posX}px`;
        star.style.top = `${posY}px`;

        // Animasi acak dengan durasi berbeda
        const animationDuration = Math.random() * 5 + 2; // Durasi 2-7 detik
        star.style.animationDuration = `${animationDuration}s`;

        starContainer.appendChild(star);

        // Hapus bintang setelah animasi selesai
        setTimeout(() => {
            star.remove();
        }, animationDuration * 1000);
    }

    // Tambahkan bintang secara berkala
    setInterval(createStar, 300);
});

document.addEventListener("DOMContentLoaded", () => {
    const starContainer = document.body;

    // Fungsi untuk membuat bintang
    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");

        // Atur posisi bintang secara acak
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;

        // Atur ukuran bintang acak
        const size = Math.random() * 3 + 1; // Ukuran antara 1px hingga 4px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Atur posisi bintang
        star.style.left = `${posX}px`;
        star.style.top = `${posY}px`;

        // Animasi acak dengan durasi berbeda
        const animationDuration = Math.random() * 5 + 2; // Durasi 2-7 detik
        star.style.animationDuration = `${animationDuration}s`;

        starContainer.appendChild(star);

        // Hapus bintang setelah animasi selesai
        setTimeout(() => {
            star.remove();
        }, animationDuration * 1000);
    }

    // Fungsi untuk membuat meteor
    function createMeteor() {
        const meteor = document.createElement("div");
        meteor.classList.add("meteor");

        // Posisi awal meteor (di luar layar atas)
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * -100; // Di luar layar atas
        meteor.style.left = `${startX}px`;
        meteor.style.top = `${startY}px`;

        // Atur lintasan dan kecepatan meteor
        const endX = startX + Math.random() * 200 - 100; // Gerak acak ke samping
        const endY = window.innerHeight + 100; // Turun di luar layar
        const duration = Math.random() * 3 + 2; // Durasi 2-5 detik

        meteor.style.setProperty("--end-x", `${endX}px`);
        meteor.style.setProperty("--end-y", `${endY}px`);
        meteor.style.animationDuration = `${duration}s`;

        starContainer.appendChild(meteor);

        // Hapus meteor setelah animasi selesai
        setTimeout(() => {
            meteor.remove();
        }, duration * 1000);
    }

    // Tambahkan bintang secara berkala
    setInterval(createStar, 300);

    // Tambahkan meteor secara berkala
    setInterval(createMeteor, 5000); // Setiap 5 detik
});
