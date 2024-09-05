const emissionFactors = {
    diesel: 2738.5,
    sawdust: 12.81,
    electricity: 436.8
};

const quantityInputs = document.querySelectorAll('.quantity-input');
const totalFootprintElement = document.getElementById('totalFootprint');
const treesNeededElement = document.getElementById('treesNeeded');

function calculateFootprint() {
    let totalFootprint = 0;
    
    quantityInputs.forEach(input => {
        const source = input.id.replace('Quantity', '');
        const quantity = parseFloat(input.value) || 0;
        totalFootprint += quantity * emissionFactors[source];
    });
    
    totalFootprintElement.textContent = totalFootprint.toFixed(2);
    
    const annualFootprint = totalFootprint * 12 / 1000000; // Convert to annual metric tons
    const treesNeeded = Math.ceil(annualFootprint / 0.022); // 0.022 metric tons CO2 absorbed per tree per year
    treesNeededElement.textContent = treesNeeded;
}

quantityInputs.forEach(input => {
    input.addEventListener('input', calculateFootprint);
});

// date and time auto update
document.getElementById('currentYear').textContent = new Date().getFullYear();