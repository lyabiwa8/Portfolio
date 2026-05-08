const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(process.cwd(), 'public', 'images', 'creations'),
  path.join(process.cwd(), 'public', 'images', 'photos-presentation')
];

function sanitize(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9.]/g, '-') // Replace non-alphanumeric with -
    .replace(/-+/g, '-') // Replace multiple - with single -
    .replace(/^-|-$/g, ''); // Remove leading/trailing -
}

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const ext = path.extname(file);
    const base = path.basename(file, ext);
    const newName = sanitize(base) + ext.toLowerCase();
    if (file !== newName) {
      console.log(`Renaming: ${file} -> ${newName}`);
      fs.renameSync(path.join(dir, file), path.join(dir, newName));
    }
  });
});
