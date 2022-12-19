
function solve() {
    // Obtener valores
    const { value: a } = document.getElementById('a');
    const { value: b } = document.getElementById('b');
    const { value: c } = document.getElementById('c');

    // Calcular raíces
    const x1 = math.parse('(-b + sqrt(b^2 - 4 * a * c))/(2 * a)').evaluate({ a, b, c });
    const x2 = math.parse('(-b - sqrt(b^2 - 4 * a * c))/(2 * a)').evaluate({ a, b, c });

    // Mostrar pasos
    showSteps(a, b, c, x1, x2);
}

function showSteps(a, b, c, x1, x2) {
    // Obtener div para solución
    const steps = document.getElementById('steps');
    steps.innerHTML = '';

    // Primer paso
    steps.innerHTML += `<hr>`;
    steps.innerHTML += `<p class="card-text">Buscamos la solución de la ecuación homogénea.</p>`;
    steps.innerHTML += `<p class="card-text text-info">${a}<var>y''</var> ${b < 0 ? '-' : '+'} ${Math.abs(b)}<var>y'</var> ${c < 0 ? '-' : '+'} ${Math.abs(c)}<var>y</var> = 0</p>`;
    
    // Segundo paso
    steps.innerHTML += `<hr>`;
    steps.innerHTML += `<p class="card-text">Obtenemos la ecuación característica y resolvemos.</p>`;
    steps.innerHTML += `<p class="card-text text-info">${a}<var>m</var><sup>2</sup> ${b < 0 ? '-' : '+'} ${Math.abs(b)}<var>m</var> ${c < 0 ? '-' : '+'} ${Math.abs(c)} = 0</p>`;
    steps.innerHTML += `<p class="card-text text-info">(<var>m</var> + (${x1}))(<var>m</var> + (${x2})) = 0</p>`;
    steps.innerHTML += `<p class="card-text text-info"><var>m</var><sub>1</sub> = ${x1}, <var>m</var><sub>2</sub> = ${x2}</p>`;
    
    // Tercer paso
    steps.innerHTML += `<hr>`;
    steps.innerHTML += `<p class="card-text">Obtenemos la solución general.</p>`;
    steps.innerHTML += `<p class="card-text text-info"><var>y</var><sub>1</sub> = e<sup>${x1}x</sup>, <var>y</var><sub>2</sub> = e<sup>${x2}x</sup></p>`;
    steps.innerHTML += `<p class="card-text text-success">y = <var>C</var><sub>1</sub>e<sup>${x1}x</sup> + <var>C</var><sub>2</sub>e<sup>${x2}x</sup></p>`;

    // Mostrar recuadro de resultado
    document.getElementById('result').classList.remove('d-none');
}

function change(tab) {
    document.getElementById(tab === 0 ? 'resultTab' : 'theoryTab').classList.add('active');
    document.getElementById(tab === 0 ? 'theoryTab' : 'resultTab').classList.remove('active');
    document.getElementById(tab === 0 ? 'theory' : 'steps').classList.add('d-none');
    document.getElementById(tab === 0 ? 'steps' : 'theory').classList.remove('d-none');
}
