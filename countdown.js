function updateCountdown() {
  // Get current time
  const now = new Date();
  
  // 🎯 Target date: 8:30 AM on September 16, 2025 in HKT (UTC+8)
  const targetDate = new Date('2025-09-19T08:00:00+08:00');

  // Update website title to "Countdown to (date)"
  const day = targetDate.getDate();
  const month = targetDate.getMonth() + 1;
  document.title = `Countdown to ${day}/${month}`;

  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "🎉 It's time!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Build countdown string, omitting zero units
  let parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0 || parts.length > 0) parts.push(`${hours}h`); // Show hours if any previous unit exists
  if (minutes > 0 || parts.length > 0) parts.push(`${minutes}m`); // Show minutes if any previous unit exists
  parts.push(`${seconds}s`); // Always show seconds
  document.getElementById("countdown").textContent = parts.join(' ');
}

setInterval(updateCountdown, 1000);
