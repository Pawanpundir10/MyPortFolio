// src/data/fileStructure.js
// This defines the files and folders shown in the sidebar.
// The `id` is crucial as it maps to the page components.

export const fileStructure = [
  {
    id: 'portfolio',
    name: 'PORTFOLIO',
    type: 'folder',
    children: [
      { id: 'home', name: 'home.jsx', type: 'file' },
      { id: 'about', name: 'about.html', type: 'file' },
      { id: 'projects', name: 'projects.js', type: 'file' },
      { id: 'contact', name: 'contact.css', type: 'file' },
      { id: 'github', name: 'github.md', type: 'file' },
    ],
  },
];