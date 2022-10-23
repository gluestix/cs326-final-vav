/* globals Chart:false, feather:false */
(() => {
    'use strict'
  
    feather.replace({ 'aria-hidden': 'true' })
  
    // Graphs
    const ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul'
        ],
        datasets: [{
          label: 'Wheat',
          data: [
            200,
            450,
            900,
            800,
            400,
            300,
            100
          ],
          lineTension: .3,
          backgroundColor: 'transparent',
          borderColor: '#8fce00',
        }]
      },
      options: {
        plugins: {
          tooltip: {
            yAlign: 'bottom',
            callbacks: {
                label: function(context) {
                    let label = context.dataset.label || '';
  
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.y !== null) {
                        label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                    }
                    return label;
                }
            }
          }
        },
        scales: {
          xAxis: {
            display: true,
            grid: {
              display: false,
              drawBorder: false
            },
          },
          yAxis: {
            display: true,
            grid: {
              display: false,
              drawBorder: false
            },
            ticks: {
              callback: function(value, index, ticks) {
                return '$' + value;
              }
            }
          }
        },
        legend: {
          display: true
        }
      }
    })
  })()
  