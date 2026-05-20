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

// Gráfico 4: Habilidades (Radar)
const skillsData = {
    type: 'scatterpolar',
    r: [90, 85, 88, 92, 87, 95, 89],
    theta: ['Python', 'SQL', 'Power BI', 'Excel', 'IA', 'Estadística', 'DAX'],
    fill: 'toself',
    marker: { color: '#f39c12' },
    line: { color: '#f39c12' }
};

function createSkillsChart() {
    const isMobile = window.innerWidth < 768;

    Plotly.newPlot('chart4', [skillsData], {
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: {
            color: '#fff',
            size: isMobile ? 10 : 14
        },
        polar: {
            radialaxis: {
                visible: true,
                range: [0, 100],
                gridcolor: 'rgba(255,255,255,0.1)'
            },
            angularaxis: {
                gridcolor: 'rgba(255,255,255,0.1)'
            },
            bgcolor: 'rgba(0,0,0,0)'
        },
        margin: {
            t: isMobile ? 30 : 50,
            r: isMobile ? 40 : 80,
            l: isMobile ? 40 : 80,
            b: isMobile ? 30 : 50
        }
    }, {
        displayModeBar: false,
        responsive: true
    });
}

createSkillsChart();

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        createSkillsChart();
    }, 250);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
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
