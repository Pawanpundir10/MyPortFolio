// src/utils/getFileIcon.js
export const getFileIcon = (filename) => {
  if (!filename) return '📄';
  const extension = filename.split('.').pop();
  switch (extension) {
    case 'jsx': return '⚛️';
    case 'js': return '🔶';
    case 'css': return '🎨';
    case 'html': return '📄';
    case 'md': return '📝';
    default: return '📄';
  }
};