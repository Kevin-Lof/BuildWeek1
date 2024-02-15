const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    //labels: ['Green', 'Red'],
    datasets: [{
      label: '%',
      data: [75, 25],
      backgroundColor: [
        'rgba(0, 255, 34, 0.8)',
        'rgba(255, 0, 0, 0.8)' // Colore di sfondo per il restante
      ],
      borderColor: [
        'rgba(0, 255, 34, 0.8)',
        'rgba(255, 0, 0, 0.8)' 
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: false,
    cutout: '90%',
    scales: { }
  }
});

