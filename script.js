const pitch = document.getElementById('pitch');

// Координаты игроков на поле в процентах (x %, y %)
const formations = {
  '433': [
    { num: 1, name: "GK", x: 50, y: 88 },
    { num: 2, name: "RB", x: 85, y: 70 },
    { num: 4, name: "CB", x: 62, y: 75 },
    { num: 5, name: "CB", x: 38, y: 75 },
    { num: 3, name: "LB", x: 15, y: 70 },
    { num: 6, name: "CDM", x: 50, y: 52 },
    { num: 8, name: "CM", x: 70, y: 42 },
    { num: 10, name: "CAM", x: 30, y: 42 },
    { num: 7, name: "RW", x: 82, y: 20 },
    { num: 9, name: "ST", x: 50, y: 15 },
    { num: 11, name: "LW", x: 18, y: 20 }
  ],
  '4231': [
    { num: 1, name: "GK", x: 50, y: 88 },
    { num: 2, name: "RB", x: 85, y: 72 },
    { num: 4, name: "CB", x: 62, y: 78 },
    { num: 5, name: "CB", x: 38, y: 78 },
    { num: 3, name: "LB", x: 15, y: 72 },
    { num: 6, name: "CDM", x: 65, y: 58 },
    { num: 8, name: "CDM", x: 35, y: 58 },
    { num: 7, name: "RM", x: 80, y: 35 },
    { num: 10, name: "CAM", x: 50, y: 35 },
    { num: 11, name: "LM", x: 20, y: 35 },
    { num: 9, name: "ST", x: 50, y: 15 }
  ]
};

function renderPitch(tacticKey) {
  pitch.innerHTML = '';
  const currentFormation = formations[tacticKey];

  currentFormation.forEach(p => {
    const playerEl = document.createElement('div');
    playerEl.className = 'player-node';
    playerEl.style.left = `${p.x}%`;
    playerEl.style.top = `${p.y}%`;
    playerEl.innerHTML = `${p.num} <span>${p.name}</span>`;
    pitch.appendChild(playerEl);
  });
}

function changeFormation(tacticKey) {
  document.querySelectorAll('.tactic-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderPitch(tacticKey);
}

// Отрисовка расстановки по умолчанию 4-3-3
renderPitch('433');
