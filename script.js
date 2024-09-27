
function toggleButtons(type) {
    const dropdowns = document.getElementById('dropdowns');
    const employeeActions = document.getElementById('employeeActions');
    const departmentActions = document.getElementById('departmentActions');
    
    dropdowns.style.display = 'block';

    if (type === 'employees') {
        document.getElementById('manageEmployees').classList.add('btn-success');
        document.getElementById('manageDepartments').classList.remove('btn-success');
        employeeActions.style.display = 'block';
        departmentActions.style.display = 'none';
    } else {
        document.getElementById('manageDepartments').classList.add('btn-success');
        document.getElementById('manageEmployees').classList.remove('btn-success');
        employeeActions.style.display = 'none';
        departmentActions.style.display = 'block';
    }
}

function showForm(action, type) {
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = ''; // Clear previous form

    if (type === 'employee' && action === 'addEmployee') {
        formContainer.innerHTML = `
            <h4>Add Employee</h4>
            <form>
                <div class="form-group">
                    <label for="firstName">First Name:</label>
                    <input type="text" class="form-control" id="firstName" required>
                </div>
                <div class="form-group">
                    <label for="salary">Salary:</label>
                    <input type="number" class="form-control" id="salary" required>
                </div>
                <div class="form-group">
                    <label for="departmentLocation">Department Location:</label>
                    <input type="text" class="form-control" id="departmentLocation" required>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        `;
    }
    // Add similar conditions for other employee actions
    else if (type === 'department' && action === 'addDepartment') {
        formContainer.innerHTML = `
            <h4>Add Department</h4>
            <form>
                <div class="form-group">
                    <label for="departmentName">Department Name:</label>
                    <input type="text" class="form-control" id="departmentName" required>
                </div>
                <div class="form-group">
                    <label for="departmentLocation">Department Location:</label>
                    <input type="text" class="form-control" id="departmentLocation" required>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        `;
    }
    // Add similar conditions for other department actions
}
