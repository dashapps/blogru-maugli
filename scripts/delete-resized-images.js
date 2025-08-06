// Скрипт для удаления всех адаптивных версий изображений (-400.webp, -800.webp, -1200.webp)
const fs = require('fs');
const path = require('path');

const srcDirs = [
  'public/assets/examples/blog/',
  'public/assets/examples/products/',
  'public/assets/examples/projects/'
];
const suffixes = ['-400.webp', '-800.webp', '-1200.webp'];

srcDirs.forEach(srcDir => {
  if (!fs.existsSync(srcDir)) return;
  const files = fs.readdirSync(srcDir);
  files.forEach(file => {
    suffixes.forEach(suffix => {
      if (file.endsWith(suffix)) {
        const filePath = path.join(srcDir, file);
        fs.unlinkSync(filePath);
        console.log('Удалено:', filePath);
      }
    });
  });
});

console.log('Удаление адаптивных изображений завершено!');
