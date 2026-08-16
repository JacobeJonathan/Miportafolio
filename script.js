// Funciones para modales
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    if (modalId === 'modal1') {
        renderModalChart1();
    } else if (modalId === 'modal2') {
        renderModalChart2();
    } else if (modalId === 'modal3') {
        renderModalChart3();
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function renderModalChart1() {
    const salesData = {
        x: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
        y: [45000, 52000, 48000, 67000, 71000, 78000],
        type: 'bar',
        marker: {
            color: ['#e74c3c', '#e67e22', '#f39c12', '#f1c40f', '#2ecc71', '#3498db'],
        },
        text: ['$45k', '$52k', '$48k', '$67k', '$71k', '$78k'],
        textposition: 'outside'
    };

    Plotly.newPlot('modal-chart1', [salesData], {
        title: 'Evolución de Ventas Trimestrales',
        paper_bgcolor: 'rgba(0,0,0,0.3)',
        plot_bgcolor: 'rgba(0,0,0,0.3)',
        font: { color: '#fff', size: 14 },
        margin: { t: 50, r: 30, l: 60, b: 50 },
        xaxis: { gridcolor: 'rgba(255,255,255,0.1)', title: 'Periodo' },
        yaxis: { gridcolor: 'rgba(255,255,255,0.1)', title: 'Ventas (USD)' }
    }, {displayModeBar: false, responsive: true});
}

function renderModalChart2() {
    const dates = [];
    const values = [];
    const predictions = [];

    for (let i = 0; i < 16; i++) {
        dates.push(`Mes ${i + 1}`);
        values.push(100 + Math.sin(i * 0.5) * 30 + Math.random() * 10);
        if (i >= 12) {
            predictions.push(100 + Math.sin(i * 0.5) * 30);
        } else {
            predictions.push(null);
        }
    }

    const trace1 = {
        x: dates,
        y: values,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Datos Reales',
        line: { color: '#3498db', width: 3 }
    };

    const trace2 = {
        x: dates.slice(12),
        y: predictions.slice(12),
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Predicción',
        line: { color: '#e74c3c', width: 3, dash: 'dash' }
    };

    Plotly.newPlot('modal-chart2', [trace1, trace2], {
        title: 'Predicción de Demanda - Serie Temporal',
        paper_bgcolor: 'rgba(0,0,0,0.3)',
        plot_bgcolor: 'rgba(0,0,0,0.3)',
        font: { color: '#fff', size: 14 },
        margin: { t: 50, r: 30, l: 60, b: 50 },
        xaxis: { gridcolor: 'rgba(255,255,255,0.1)', title: 'Periodo' },
        yaxis: { gridcolor: 'rgba(255,255,255,0.1)', title: 'Demanda' },
        showlegend: true,
        legend: { x: 0.1, y: 1 }
    }, {displayModeBar: false, responsive: true});
}

function renderModalChart3() {
    const clusters = [
        { name: 'Cluster 1', color: '#e74c3c', x: [], y: [] },
        { name: 'Cluster 2', color: '#f39c12', x: [], y: [] },
        { name: 'Cluster 3', color: '#3498db', x: [], y: [] },
        { name: 'Cluster 4', color: '#2ecc71', x: [], y: [] }
    ];

    for (let i = 0; i < 30; i++) {
        const cluster = Math.floor(Math.random() * 4);
        clusters[cluster].x.push(20 + cluster * 25 + Math.random() * 20);
        clusters[cluster].y.push(30 + cluster * 20 + Math.random() * 25);
    }

    const traces = clusters.map(c => ({
        x: c.x,
        y: c.y,
        mode: 'markers',
        type: 'scatter',
        name: c.name,
        marker: { size: 12, color: c.color }
    }));

    Plotly.newPlot('modal-chart3', traces, {
        title: 'Segmentación de Clientes - Análisis de Clustering',
        paper_bgcolor: 'rgba(0,0,0,0.3)',
        plot_bgcolor: 'rgba(0,0,0,0.3)',
        font: { color: '#fff', size: 14 },
        margin: { t: 50, r: 30, l: 60, b: 50 },
        xaxis: { title: 'Frecuencia de Compra', gridcolor: 'rgba(255,255,255,0.1)' },
        yaxis: { title: 'Valor Promedio', gridcolor: 'rgba(255,255,255,0.1)' },
        showlegend: true
    }, {displayModeBar: false, responsive: true});
}

// Gráfico 1: Ventas por trimestre
const salesData = {
    x: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
    y: [45000, 52000, 48000, 67000, 71000, 78000],
    type: 'bar',
    marker: {
        color: ['#e74c3c', '#e67e22', '#f39c12', '#f1c40f', '#2ecc71', '#3498db'],
    }
};

Plotly.newPlot('chart1', [salesData], {
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    font: { color: '#fff' },
    margin: { t: 30, r: 20, l: 50, b: 40 },
    xaxis: { gridcolor: 'rgba(255,255,255,0.1)' },
    yaxis: { gridcolor: 'rgba(255,255,255,0.1)' }
}, {displayModeBar: false});

// Gráfico 2: Serie temporal
const dates = [];
const values = [];
const predictions = [];

for (let i = 0; i < 12; i++) {
    dates.push(`Mes ${i + 1}`);
    values.push(100 + Math.sin(i * 0.5) * 30 + Math.random() * 10);
    if (i >= 8) {
        predictions.push(100 + Math.sin(i * 0.5) * 30);
    } else {
        predictions.push(null);
    }
}

const trace1 = {
    x: dates,
    y: values,
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Real',
    line: { color: '#3498db', width: 3 }
};

const trace2 = {
    x: dates.slice(8),
    y: predictions.slice(8),
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Predicción',
    line: { color: '#e74c3c', width: 3, dash: 'dash' }
};

Plotly.newPlot('chart2', [trace1, trace2], {
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    font: { color: '#fff' },
    margin: { t: 30, r: 20, l: 50, b: 40 },
    xaxis: { gridcolor: 'rgba(255,255,255,0.1)' },
    yaxis: { gridcolor: 'rgba(255,255,255,0.1)' },
    showlegend: true
}, {displayModeBar: false});

// Gráfico 3: Scatter
const scatterData = {
    x: Array.from({length: 50}, () => Math.random() * 100),
    y: Array.from({length: 50}, () => Math.random() * 100),
    mode: 'markers',
    type: 'scatter',
    marker: {
        size: 12,
        color: Array.from({length: 50}, () => Math.floor(Math.random() * 4)),
        colorscale: [[0, '#e74c3c'], [0.33, '#f39c12'], [0.66, '#3498db'], [1, '#2ecc71']],
        showscale: false
    }
};

Plotly.newPlot('chart3', [scatterData], {
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    font: { color: '#fff' },
    margin: { t: 30, r: 20, l: 50, b: 40 },
    xaxis: { title: 'Frecuencia', gridcolor: 'rgba(255,255,255,0.1)' },
    yaxis: { title: 'Valor', gridcolor: 'rgba(255,255,255,0.1)' }
}, {displayModeBar: false});

// Gráfico de habilidades basado en el SVG interactivo del diseño de referencia
const skillLabels = ['Power BI', 'SQL', 'Python', 'DAX', 'Estadística', 'IA', 'Excel'];
const skillValues = [92, 85, 97, 62, 88, 65, 90];
const skillPalette = [
    { hex: '#d9a05b', name: 'ámbar' },
    { hex: '#6fe3bb', name: 'menta' },
    { hex: '#8b7fe8', name: 'violeta' },
    { hex: '#e8708f', name: 'coral' },
    { hex: '#5fb8e8', name: 'celeste' }
];
let skillColorIndex = 0;

const svgNamespace = 'http://www.w3.org/2000/svg';
const radarSvg = document.getElementById('radarSvg');
const radarCenterX = 200;
const radarCenterY = 200;
const radarMaxRadius = 150;

function polarPoint(index, valueFraction) {
    const angle = (-90 + index * (360 / skillLabels.length)) * Math.PI / 180;
    const radius = radarMaxRadius * valueFraction;

    return {
        x: radarCenterX + radius * Math.cos(angle),
        y: radarCenterY + radius * Math.sin(angle)
    };
}

function buildRadar() {
    radarSvg.innerHTML = '';

    [0.2, 0.4, 0.6, 0.8, 1].forEach(fraction => {
        const circle = document.createElementNS(svgNamespace, 'circle');
        circle.setAttribute('cx', radarCenterX);
        circle.setAttribute('cy', radarCenterY);
        circle.setAttribute('r', radarMaxRadius * fraction);
        circle.setAttribute('class', 'radar-grid-ring');
        radarSvg.appendChild(circle);
    });

    skillLabels.forEach((label, index) => {
        const point = polarPoint(index, 1);
        const line = document.createElementNS(svgNamespace, 'line');
        line.setAttribute('x1', radarCenterX);
        line.setAttribute('y1', radarCenterY);
        line.setAttribute('x2', point.x);
        line.setAttribute('y2', point.y);
        line.setAttribute('class', 'radar-grid-line');
        radarSvg.appendChild(line);

        const labelRadius = radarMaxRadius + 18;
        const angle = (-90 + index * (360 / skillLabels.length)) * Math.PI / 180;
        const text = document.createElementNS(svgNamespace, 'text');
        text.setAttribute('x', radarCenterX + labelRadius * Math.cos(angle));
        text.setAttribute('y', radarCenterY + labelRadius * Math.sin(angle));
        text.setAttribute('text-anchor', Math.abs(Math.cos(angle)) < 0.15 ? 'middle' : (Math.cos(angle) > 0 ? 'start' : 'end'));
        text.setAttribute('dominant-baseline', 'middle');
        text.setAttribute('class', 'radar-label');
        text.textContent = label;
        radarSvg.appendChild(text);
    });

    [0, 20, 40, 60, 80, 100].forEach(value => {
        const tick = document.createElementNS(svgNamespace, 'text');
        tick.setAttribute('x', radarCenterX + radarMaxRadius * (value / 100));
        tick.setAttribute('y', radarCenterY + 14);
        tick.setAttribute('text-anchor', 'middle');
        tick.setAttribute('class', 'radar-tick');
        tick.textContent = value;
        radarSvg.appendChild(tick);
    });

    const group = document.createElementNS(svgNamespace, 'g');
    group.setAttribute('id', 'radarGroup');
    group.setAttribute('class', 'radar-fill');

    const points = skillValues.map((value, index) => polarPoint(index, value / 100));
    const polygon = document.createElementNS(svgNamespace, 'polygon');
    polygon.setAttribute('points', points.map(point => `${point.x},${point.y}`).join(' '));
    polygon.setAttribute('fill', skillPalette[skillColorIndex].hex);
    polygon.setAttribute('fill-opacity', '0.55');
    polygon.setAttribute('stroke', skillPalette[skillColorIndex].hex);
    polygon.setAttribute('stroke-width', '2');
    polygon.setAttribute('id', 'radarPoly');
    group.appendChild(polygon);

    points.forEach(point => {
        const dot = document.createElementNS(svgNamespace, 'circle');
        dot.setAttribute('cx', point.x);
        dot.setAttribute('cy', point.y);
        dot.setAttribute('r', 4);
        dot.setAttribute('fill', skillPalette[skillColorIndex].hex);
        dot.setAttribute('class', 'radar-dot');
        group.appendChild(dot);
    });

    radarSvg.appendChild(group);
}

buildRadar();

const skillsButton = document.getElementById('skillsBtn');
const skillsStatus = document.getElementById('skillsStatus');

skillsButton.addEventListener('click', () => {
    skillsButton.disabled = true;
    skillsStatus.textContent = 'ejecutando script...';

    setTimeout(() => {
        skillColorIndex = (skillColorIndex + 1) % skillPalette.length;
        const selectedColor = skillPalette[skillColorIndex];
        const radarGroup = document.getElementById('radarGroup');
        const radarPolygon = document.getElementById('radarPoly');

        radarPolygon.setAttribute('fill', selectedColor.hex);
        radarPolygon.setAttribute('stroke', selectedColor.hex);
        document.querySelectorAll('.radar-dot').forEach(dot => dot.setAttribute('fill', selectedColor.hex));

        radarGroup.classList.remove('spin');
        void radarGroup.getBoundingClientRect();
        radarGroup.classList.add('spin');

        skillsStatus.textContent = `gráfico renderizado — color: ${selectedColor.name}`;
        skillsButton.disabled = false;
    }, 500);
});

// Fondo de partículas y montaña para Contacto, Proyectos y Habilidades
const sceneCanvas = document.getElementById('scene');
const sceneContext = sceneCanvas.getContext('2d');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const sceneColumns = 84;
const sceneRows = 30;
let sceneWidth;
let sceneHeight;
let sceneTime = 0;
let scenePulse = 0;
let sceneStars = [];
let sceneAnimationId;

function buildSceneStars() {
    const count = Math.floor((sceneWidth * sceneHeight) / 6500);
    sceneStars = [];

    for (let index = 0; index < count; index++) {
        const centerX = sceneWidth * 0.5;
        const spread = sceneWidth * 0.42;
        sceneStars.push({
            x: centerX + (Math.random() - 0.5) * 2 * spread + (Math.random() - 0.5) * sceneWidth * 0.15,
            y: sceneHeight * 0.1 + Math.random() * sceneHeight * 0.5,
            radius: Math.random() * Math.random() * 2.6 + 0.4,
            phase: Math.random() * Math.PI * 2,
            speed: 0.35 + Math.random() * 0.9
        });
    }
}

function resizeScene() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    sceneWidth = window.innerWidth;
    sceneHeight = window.innerHeight;
    sceneCanvas.width = sceneWidth * pixelRatio;
    sceneCanvas.height = sceneHeight * pixelRatio;
    sceneCanvas.style.width = `${sceneWidth}px`;
    sceneCanvas.style.height = `${sceneHeight}px`;
    sceneContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    buildSceneStars();
    drawScene();
}

function sceneElevation(x, y, time) {
    return (
        Math.sin(x * 1.05 + time * 0.55) * 0.42 +
        Math.sin(x * 2.1 - time * 0.35 + y * 1.6) * 0.22 +
        Math.sin(y * 1.9 + time * 0.45) * 0.30 +
        Math.exp(-Math.pow((x - 0.60) * 3.4, 2)) * 1.55 +
        Math.exp(-Math.pow((x - 1.18) * 3.4, 2)) * 1.20
    );
}

function scenePoint(column, row, mountainHeight) {
    const horizontal = column / sceneColumns;
    const vertical = row / sceneRows;
    const depth = 1 - vertical;
    const elevation = sceneElevation(horizontal * 3.2, vertical * 2.3, sceneTime) * (0.5 + depth * 0.5);
    const sceneSpanX = sceneWidth * 1.08;

    return {
        x: sceneWidth * 0.5 - sceneSpanX * 0.5 + horizontal * sceneSpanX,
        y: sceneHeight * 0.46 + vertical * sceneHeight * 0.52 * 0.72 - elevation * mountainHeight * (0.32 + vertical * 0.75),
        depth
    };
}

function drawScene() {
    sceneContext.clearRect(0, 0, sceneWidth, sceneHeight);
    sceneContext.fillStyle = '#f2f2f2';
    const mountainHeight = sceneHeight * 0.30 + scenePulse * 20;

    sceneStars.forEach(star => {
        sceneContext.globalAlpha = 0.5 + 0.5 * Math.sin(sceneTime * star.speed + star.phase);
        sceneContext.beginPath();
        sceneContext.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        sceneContext.fill();
    });

    sceneContext.fillStyle = '#f5f5f5';
    for (let row = 0; row <= sceneRows; row++) {
        for (let column = 0; column <= sceneColumns; column++) {
            const point = scenePoint(column, row, mountainHeight);
            sceneContext.globalAlpha = 0.3 + point.depth * 0.6;
            sceneContext.beginPath();
            sceneContext.arc(point.x, point.y, 0.55 + point.depth * 1.25, 0, Math.PI * 2);
            sceneContext.fill();
        }

        sceneContext.globalAlpha = 0.14 + (1 - row / sceneRows) * 0.32;
        sceneContext.strokeStyle = 'rgba(255,255,255,0.55)';
        sceneContext.lineWidth = 1;
        sceneContext.beginPath();
        for (let column = 0; column <= sceneColumns; column++) {
            const point = scenePoint(column, row, mountainHeight);
            if (column === 0) sceneContext.moveTo(point.x, point.y);
            else sceneContext.lineTo(point.x, point.y);
        }
        sceneContext.stroke();
    }

    sceneContext.globalAlpha = 0.16;
    sceneContext.strokeStyle = 'rgba(255,255,255,0.55)';
    for (let column = 0; column <= sceneColumns; column += 2) {
        sceneContext.beginPath();
        for (let row = 0; row <= sceneRows; row++) {
            const point = scenePoint(column, row, mountainHeight);
            if (row === 0) sceneContext.moveTo(point.x, point.y);
            else sceneContext.lineTo(point.x, point.y);
        }
        sceneContext.stroke();
    }
    sceneContext.globalAlpha = 1;

    if (scenePulse > 0.01) scenePulse *= 0.94;
    else scenePulse = 0;
}

function animateScene() {
    sceneTime += 0.012;
    drawScene();
    sceneAnimationId = requestAnimationFrame(animateScene);
}

function startSceneAnimation() {
    if (!reduceMotion && !document.hidden && !sceneAnimationId) {
        sceneAnimationId = requestAnimationFrame(animateScene);
    }
}

function stopSceneAnimation() {
    if (sceneAnimationId) {
        cancelAnimationFrame(sceneAnimationId);
        sceneAnimationId = undefined;
    }
}

function pulseScene() {
    if (reduceMotion) return;
    scenePulse = 1;
    startSceneAnimation();
}

window.addEventListener('resize', resizeScene);
document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopSceneAnimation();
    else startSceneAnimation();
});

resizeScene();
startSceneAnimation();

// Demostración SQL interactiva de la sección Contacto
const sqlEmployees = [
    { id: 1, nombre: 'Jonathan', apellido: 'Jacobe', correo: 'jonathanjacobemontes@gmail.com' }
];
const sqlRunButton = document.getElementById('runBtn');
const sqlResultBody = document.getElementById('resultBody');
const sqlStatus = document.getElementById('sqlStatus');

if (sqlRunButton && sqlResultBody && sqlStatus) {
    sqlRunButton.addEventListener('click', () => {
        sqlRunButton.disabled = true;
        sqlStatus.textContent = 'ejecutando consulta...';

        setTimeout(() => {
            sqlResultBody.replaceChildren();

            sqlEmployees.forEach((employee, index) => {
                const row = document.createElement('tr');
                row.className = 'row-in';
                row.style.animationDelay = `${index * 90}ms`;

                [employee.id, employee.nombre, employee.apellido, employee.correo].forEach(value => {
                    const cell = document.createElement('td');
                    cell.textContent = value;
                    row.appendChild(cell);
                });

                sqlResultBody.appendChild(row);
            });

            sqlStatus.textContent = `${sqlEmployees.length} fila(s) devuelta(s)`;
            sqlRunButton.disabled = false;
            pulseScene();
        }, 550);
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });

        const navMenu = document.getElementById('navMenu');
        const hamburger = document.getElementById('hamburger');
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Toggle menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});
