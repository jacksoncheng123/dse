function updateCountdown() {
  const hktOffset = 8 * 60; // HKT is UTC+8
  const nowUTC = new Date();
  const nowHKT = new Date(nowUTC.getTime() + (hktOffset - nowUTC.getTimezoneOffset()) * 60000);

  // 🎯 Replace with your target date and time in HKT
  const targetDate = new Date('2025-07-16T08:30:00+00:00');

  const diff = targetDate - nowHKT;

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
