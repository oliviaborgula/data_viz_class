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
  