const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strength-bar');
const feedback = document.getElementById('feedback');
const suggestionsList = document.getElementById('suggestions');
const lockIcon = document.getElementById('lock');

function togglePassword() {
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}

passwordInput.addEventListener('input', () => {
  const val = passwordInput.value;
  let score = 0;
  let suggestions = [];

  if (val.length >= 8) score++;
  else suggestions.push("Use at least 8 characters");

  if (/[A-Z]/.test(val)) score++;
  else suggestions.push("Add an uppercase letter");

  if (/[0-9]/.test(val)) score++;
  else suggestions.push("Include a number");

  if (/[^A-Za-z0-9]/.test(val)) score++;
  else suggestions.push("Add a special character (!@#$%)");

  let strength = '';
  let color = '';
  let width = (score / 4) * 100;

  switch(score) {
    case 0:
    case 1:
      strength = 'Very Weak';
      color = '#ff4d4d';
      break;
    case 2:
      strength = 'Weak';
      color = '#ffa500';
      break;
    case 3:
      strength = 'Medium';
      color = '#f1c40f';
      break;
    case 4:
      strength = 'Strong';
      color = '#2ecc71';
      break;
    default:
      strength = 'Very Strong';
      color = '#27ae60';
  }

  strengthBar.style.width = width + '%';
  strengthBar.style.background = color;
  strengthBar.style.boxShadow = `0 0 12px ${color}`;
  feedback.textContent = `Strength: ${strength}`;

  // Lock icon animation
  lockIcon.style.color = color;
  if (score < 3) {
    lockIcon.classList.add('pulse');
  } else {
    lockIcon.classList.remove('pulse');
  }

  // Input border glow
  passwordInput.style.borderColor = color;
  passwordInput.style.boxShadow = `0 0 8px ${color}`;

  // Update suggestions
  suggestionsList.innerHTML = '';
  suggestions.forEach(s => {
    const li = document.createElement('li');
    li.textContent = s;
    suggestionsList.appendChild(li);
  });
});