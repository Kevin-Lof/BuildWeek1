const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    //labels: ['Green', 'Red'],
    datasets: [{
      //label: '# of Votes',
      data: [75, 25],
      borderWidth: 1
    }]
  },
  options: {
    width: '400px',
    height: '400px',
    cutout: '90%',
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

