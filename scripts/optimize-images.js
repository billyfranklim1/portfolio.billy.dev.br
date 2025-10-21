const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputPath, options = {}) {
  const {
    width = null,
    height = null,
    quality = 80,
    format = 'webp'
  } = options;

  try {
    let pipeline = sharp(inputPath);

    if (width || height) {
      pipeline = pipeline.resize(width, height, {
        fit: 'cover',
        position: 'center'
      });
    }

    // Converter para WebP ou manter JPEG otimizado
    if (format === 'webp') {
      pipeline = pipeline.webp({ quality });
    } else if (format === 'jpeg' || format === 'jpg') {
      pipeline = pipeline.jpeg({ quality, mozjpeg: true });
    }

    await pipeline.toFile(outputPath);

    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(2);

    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(`   ${(inputStats.size / 1024).toFixed(2)}KB → ${(outputStats.size / 1024).toFixed(2)}KB (${reduction}% redução)\n`);

    return { success: true, reduction };
  } catch (error) {
    console.error(`❌ Erro ao otimizar ${inputPath}:`, error.message);
    return { success: false, error };
  }
}

async function main() {
  console.log('🚀 Iniciando otimização de imagens...\n');

  const appDir = path.join(__dirname, '../app');

  // 1. Otimizar avatar.jpg (909KB → <100KB)
  console.log('📸 Otimizando avatar.jpg...');
  await optimizeImage(
    path.join(appDir, 'avatar.jpg'),
    path.join(appDir, 'avatar-optimized.jpg'),
    { width: 400, height: 400, quality: 85, format: 'jpeg' }
  );

  // Criar versão WebP também
  await optimizeImage(
    path.join(appDir, 'avatar.jpg'),
    path.join(appDir, 'avatar.webp'),
    { width: 400, height: 400, quality: 80, format: 'webp' }
  );

  // 2. Otimizar opengraph-image.jpg
  console.log('🖼️  Otimizando opengraph-image.jpg...');
  await optimizeImage(
    path.join(appDir, 'opengraph-image.jpg'),
    path.join(appDir, 'opengraph-image-optimized.jpg'),
    { width: 1200, height: 630, quality: 85, format: 'jpeg' }
  );

  // 3. Otimizar placeholder.jpg
  console.log('🎨 Otimizando placeholder.jpg...');
  await optimizeImage(
    path.join(appDir, 'placeholder.jpg'),
    path.join(appDir, 'placeholder-optimized.jpg'),
    { quality: 80, format: 'jpeg' }
  );

  console.log('✨ Otimização concluída!\n');
  console.log('📝 Próximos passos:');
  console.log('   1. Revisar as imagens otimizadas');
  console.log('   2. Se estiver satisfeito, substituir os originais');
  console.log('   3. Atualizar as referências no código (se necessário)');
}

main().catch(console.error);
