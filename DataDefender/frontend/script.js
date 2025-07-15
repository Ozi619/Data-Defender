async function checkPhishing() {
  const text = document.getElementById('phishingText').value;
  const res = await fetch('http://localhost:3000/api/phishing', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  const data = await res.json();
  document.getElementById('phishingResult').innerText = `Risk: ${data.risk} - ${data.reason}`;
}

async function checkBreach() {
  const email = document.getElementById('breachEmail').value;
  const res = await fetch('http://localhost:3000/api/breach', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  const data = await res.json();
  if (data.breached) {
    document.getElementById('breachResult').innerText = `Breaches found:\n` + data.breaches.map(b => `- ${b.name} (${b.year}): ${b.info}`).join('\n');
  } else {
    document.getElementById('breachResult').innerText = `No breaches found for this email.`;
  }
}
