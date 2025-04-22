// LINE CHART
const labels = [
  1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006,
  2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015
];

const data = {
  labels: labels,
  datasets: [{
    label: 'Guest Count',
    data: [
      165, 169, 157, 159, 166, 164, 162, 161,
      141, 164, 163, 165, 163, 164, 166, 163, 100
    ],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    backgroundColor: 'rgba(75, 192, 192, 0.2)', 
    fill: true,
    tension: 0.1,
    pointRadius: 0,
    pointHoverRadius: 5,
    pointHitRadius: 35
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false 
      }
    },
    scales: {
      y: {
        min: 60,
        max: 200,
        grid: {
          color: '#7e7e7e'
        }
      }
    }
  } 
};

const ctx = document.getElementById('chart-1').getContext('2d');
const myChart = new Chart(ctx, config);

// POLAR AREA CHART 
const ctx2 = document.getElementById('chart-2').getContext('2d');

const data2 = {
  labels: ['Government and politics', 'Media', 'Acting and comedy', 'Music', 'Other'],
  datasets: [{
    label: 'Guest Categories',
    data: [416, 766, 1174, 172, 302],
    backgroundColor: [
      'rgba(255, 99, 132, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)'
    ],
    borderWidth: 0 
  }]
};

const config2 = {
  type: 'polarArea',
  data: data2,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'right'
      }
    },
    scales: {
      r: {
        grid: {
          color: '#888888' 
        },
        angleLines: {
          color: '#444444' 
        },
        pointLabels: {
          color: '#fffff' 
        },
        ticks: {
          color: 'black' 
        }
      }
    }
  }
};

const polarChart = new Chart(ctx2, config2);

// MULTI-LINE CHART
const ctx3 = document.getElementById('chart-3').getContext('2d');

const data3 = {
  labels: labels,
  datasets: [
    {
      label: 'Acting/Comedy/Music',
      data: [150, 125, 114, 99, 93, 63, 60, 58, 36, 34, 34, 58, 55, 44, 71, 64, 45],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.1)',
      tension: 0.3,
      pointRadius: 0,
      pointHoverRadius: 5,
      pointHitRadius: 35
    },
    {
      label: 'Media',
      data: [11, 21, 31, 42, 41, 45, 54, 47, 47, 77, 59, 50, 51, 52, 51, 53, 24],
      borderColor: 'rgba(255, 159, 64, 1)',
      backgroundColor: 'rgba(255, 159, 64, 0.1)',
      tension: 0.3,
      pointRadius: 0,
      pointHoverRadius: 5,
      pointHitRadius: 35
    },
    {
      label: 'Politicians',
      data: [2, 15, 6, 12, 17, 34, 26, 30, 27, 34, 35, 32, 31, 36, 24, 25, 21],
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.1)',
      tension: 0.3,
      pointRadius: 0,
      pointHoverRadius: 5,
      pointHitRadius: 35
    }
  ]
};

const config3 = {
  type: 'line',
  data: data3,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#7e7e7e' 
        }
      }
    }
  }
};

const chart3 = new Chart(ctx3, config3);
