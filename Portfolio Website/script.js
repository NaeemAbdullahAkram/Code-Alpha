document.addEventListener("DOMContentLoaded", function() {
    const viewProjectLinks = document.querySelectorAll('.view-project');
    
    viewProjectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project-id');
            loadProjectDetails(projectId);
        });
    });
});

function loadProjectDetails(projectId) {
    // Simulate loading project details from an API or database
    const projectDetails = {
        1: {
            title: 'Project 1',
            description: 'Detailed description of Project 1 goes here.'
        },
        2: {
            title: 'Project 2',
            description: 'Detailed description of Project 2 goes here.'
        }
        // Add more project details as needed
    };

    const projectDetail = projectDetails[projectId];

    // Display project details dynamically
    const projectDetailContainer = document.createElement('div');
    projectDetailContainer.classList.add('project-detail');
    projectDetailContainer.innerHTML = `
        <h3>${projectDetail.title}</h3>
        <p>${projectDetail.description}</p>
    `;

    const projectContainer = document.querySelector(`[data-project-id="${projectId}"]`).parentNode;
    projectContainer.appendChild(projectDetailContainer);

    // Add animation
    projectDetailContainer.classList.add('fade-in');
}
