const form = document.getElementById('trackerForm');
    const summaryDiv = document.getElementById('summary');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const steps = parseInt(document.getElementById('steps').value);
      const water = parseFloat(document.getElementById('water').value);
      const sleep = parseFloat(document.getElementById('sleep').value);

      // Basic validation
      if (steps < 0 || water < 0 || sleep < 0 || sleep > 24) {
        alert('Please enter valid input values.');
        return;
      }

      // Show summary
      summaryDiv.style.display = 'block';
      summaryDiv.innerHTML = `
        <strong>Your Daily Summary:</strong><br />
        Steps Walked: ${steps} steps<br />
        Water Intake: ${water.toFixed(1)} liters<br />
        Sleep Time: ${sleep.toFixed(1)} hours<br /><br />
        ${steps >= 10000 ? "Great job on walking 10,000+ steps!" : "Try to reach 10,000 steps daily."}<br />
        ${water >= 2 ? "Good water intake!" : "Drink more water."}<br />
        ${sleep >= 7 ? "You're getting enough sleep." : "Try to get at least 7 hours of sleep."}
      `;

      // Optionally reset form
      form.reset();
    });