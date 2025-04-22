// === Line chart ===
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
      tension: 0.1
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
          beginAtZero: true  
        }
      }
    }
  };
  
  const ctx = document.getElementById('chart-1').getContext('2d');
  const myChart = new Chart(ctx, config);
  
  
// === Polar area chart ===
// POLAR AREA CHART CONFIGURATION

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
    ]
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
        pointLabels: {
          display: false 
        },
        ticks: {
          display: true 
        }
      }
    }
  }
};

const polarChart = new Chart(ctx2, config2);

