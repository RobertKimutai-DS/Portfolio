// Smooth scrolling for navigation links (optional if you have nav links)
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dynamic project loading
const projects = [
  { name: "Zero-Grazing Dairy Management App", description: "Created a web-based system for optimizing dairy farm operations, using R Shiny and SQL." },
  { name: "Solar Cooker Performance Analysis", description: "Designed a standardized test protocol using Arduino and Proteus to evaluate solar cooker performance." },
  { name: "Automated Irrigation System", description: "Developed an automated irrigation system using Arduino and R to optimize water use for small-scale farmers." }
];

const projectList = document.getElementById('project-list');
projects.forEach(project => {
  let listItem = document.createElement('li');
  listItem.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
  projectList.appendChild(listItem);
});

// Skills chart using Chart.js
const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['R Programming', 'SQL', 'JavaScript', 'Shiny Development', 'QGIS'],
    datasets: [{
      label: 'Skill Level',
      data: [90, 85, 75, 80, 70],
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
