function updateCountdown() {
  // Get current time
  const now = new Date();
  
  // 🎯 Target date: 8:30 AM on July 16, 2025 in HKT (UTC+8)
  const targetDate = new Date('2025-09-10T01:00:00+08:00');

  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "🎉 It's time!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
