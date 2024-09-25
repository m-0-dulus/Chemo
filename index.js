// index.js
const molecules = [
  {
    name: 'Methane',
    structure: {
      atoms: [
        { x: 0, y: 0, z: 0, element: 'C' },
        { x: 1, y: 0, z: 0, element: 'H' },
        { x: -1, y: 0, z: 0, element: 'H' },
        { x: 0, y: 1, z: 0, element: 'H' },
        { x: 0, y: -1, z: 0, element: 'H' }
      ],
      bonds: [
        { atom1: 0, atom2: 1 },
        { atom1: 0, atom2: 2 },
        { atom1: 0, atom2: 3 },
        { atom1: 0, atom2: 4 }
      ]
    },
    molecularWeight: 16.04,
    boilingPoint: -161.5,
    meltingPoint: -182.5
  },
  {
    name: 'Water',
    structure: {
      atoms: [
        { x: 0, y: 0, z: 0, element: 'O' },
        { x: 1, y: 0, z: 0, element: 'H' },
        { x: -1, y: 0, z: 0, element: 'H' }
      ],
      bonds: [
        { atom1: 0, atom2: 1 },
        { atom1: 0, atom2: 2 }
      ]
    },
    molecularWeight: 18.02,
    boilingPoint: 100,
    meltingPoint: 0
  },
  {
    name: 'Carbon Dioxide',
    structure: {
      atoms: [
        { x: 0, y: 0, z: 0, element: 'C' },
        { x: 1, y: 0, z: 0, element: 'O' },
        { x: -1, y: 0, z: 0, element: 'O' }
      ],
      bonds: [
        { atom1: 0, atom2: 1 },
        { atom1: 0, atom2: 2 }
      ]
    },
    molecularWeight: 44.01,
    boilingPoint: -78.5,
    meltingPoint: -56.6
  },
  {
    name: 'Ammonia',
    structure: {
      atoms: [
        { x: 0, y: 0, z: 0, element: 'N' },
        { x: 1, y: 0, z: 0, element: 'H' },
        { x: -1, y: 0, z: 0, element: 'H' },
        { x: 0, y: 1, z: 0, element: 'H' }
      ],
      bonds: [
        { atom1: 0, atom2: 1 },
        { atom1: 0, atom2: 2 },
        { atom1: 0, atom2: 3 }
      ]
    },
    molecularWeight: 17.03,
    boilingPoint: -33.3,
    meltingPoint: -77.7
  },
  {
    name: 'Ethane',
    structure: {
      atoms: [
        { x: 0, y: 0, z: 0, element: 'C' },
        { x: 1, y: 0, z: 0, element: 'C' },
        { x: 0, y: 1, z: 0, element: 'H' },
        { x: 1, y: 1, z: 0, element: 'H' },
        { x: 0, y: -1, z: 0, element: 'H' },
        { x: 1, y: -1, z: 0, element: 'H' }
      ],
      bonds: [
        { atom1: 0, atom2: 1 },
        { atom1: 0, atom2: 2 },
        { atom1: 0, atom2: 3 },
        { atom1: 1, atom2: 4 },
        { atom1: 1, atom2: 5 }
      ]
    },
    molecularWeight: 30.07,
    boilingPoint: -88.5,
    meltingPoint: -183.3
  }
  // Add more molecules to the array as needed
];

const moleculeViewer = document.getElementById('molecule-viewer');
const moleculeInput = document.getElementById('molecule-input');
const searchButton = document.getElementById('search-button');
const moleculeNameElement = document.getElementById('molecule-name');
const molecularWeightElement = document.getElementById('molecular-weight');
const boilingPointElement = document.getElementById('boiling-point');
const meltingPointElement = document.getElementById('melting-point');

function getMolecule(name) {
  console.log('Searching for molecule:', name);
  return molecules.find(molecule => molecule.name === name);
}

function renderMolecule(molecule) {
  console.log('Rendering molecule:', molecule.name);
  const canvas = moleculeViewer;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw atoms
  molecule.structure.bonds.forEach(bond => {
    const atom1 = molecule.structure.atoms[bond.atom1];
    const atom2 = molecule.structure.atoms[bond.atom2];
    ctx.beginPath();
    ctx.moveTo(atom1.x * 20 + canvas.width / 2, atom1.y * 20 + canvas.height / 2);
    ctx.lineTo(atom2.x * 20 + canvas.width / 2, atom2.y * 20 + canvas.height / 2);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // Update molecule info
  moleculeNameElement.textContent = molecule.name;
  molecularWeightElement.textContent = `Molecular Weight: ${molecule.molecularWeight}`;
  boilingPointElement.textContent = `Boiling Point: ${molecule.boilingPoint}°C`;
  meltingPointElement.textContent = `Melting Point: ${molecule.meltingPoint}°C`;
}

searchButton.addEventListener('click', () => {
  const moleculeName = moleculeInput.value.trim();
  const molecule = getMolecule(moleculeName);
  if (molecule) {
    renderMolecule(molecule);
  } else {
    alert(`Molecule not found: ${moleculeName}`);
  }
});
