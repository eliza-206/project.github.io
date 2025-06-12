// Sample initial subjects
let subjects = [
    { name: "Mathematics", grade: "A" },
    { name: "History", grade: "B+" },
    { name: "Science", grade: "A-" }
];

function displaySubjects() {
    const container = document.getElementById('subjects-container');
    container.innerHTML = '';
    
    subjects.forEach(subject => {
        const subjectElement = document.createElement('div');
        subjectElement.className = 'subject-item';
        subjectElement.innerHTML = `
            <span>${subject.name}</span>
            <span>${subject.grade || 'No grade yet'}</span>
        `;
        container.appendChild(subjectElement);
    });
}

// Add new subject
document.getElementById('add-subject-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('subject-name');
    const gradeInput = document.getElementById('subject-grade');
    
    const newSubject = {
        name: nameInput.value,
        grade: gradeInput.value
    };
    
    subjects.push(newSubject);
    displaySubjects();
    
    // Reset form
    nameInput.value = '';
    gradeInput.value = '';
});

// Display subjects when page loads
window.addEventListener('DOMContentLoaded', displaySubjects);
