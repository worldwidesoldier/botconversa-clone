import { mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const BASE = 'https://framerusercontent.com';
const OUT = './public/images';

const assets = [
  // Hero / Product screenshots
  { src: '/images/4S6XRkW17Mv3vwVxkPsRTDo2fic.png', name: 'product-dashboard.png' },
  { src: '/images/loh34ssNDvMAWCm3K6nEke7PBs.png', name: 'mobile-app-preview.png' },
  { src: '/images/zo3WxU6EOiy37HQUcUU9VDivEg.png', name: 'mobile-app-preview-2.png' },
  { src: '/images/uH0qDq1bczhWugt7xyTxN28XI.png', name: 'hero-image.png' },
  // Logo marquee
  { src: '/images/OPjeUJTDGsHMx3PbDOJoRhLdYw.png', name: 'logo-nuvio.png' },
  { src: '/images/ZvXKsK53rZLOBhAs3pcGOzk2suo.png', name: 'logo-klyra.png' },
  { src: '/images/CAGSvw7bZtJFY5ynouxW3RC2W0.png', name: 'logo-knot.png' },
  { src: '/images/lnYQmAZQbqPcVzQfeJi0fb9Q.png', name: 'logo-veltix.png' },
  { src: '/images/TMRVapgy4LVpILz6SRfNKYEpsw.png', name: 'logo-knot-2.png' },
  { src: '/images/6lzSVDcaBK5aFUAKkW5VazbTK2U.png', name: 'logo-nuvio-2.png' },
  { src: '/images/SXvNhwe0kFUGsQpzWI8xbuFnSuk.png', name: 'logo-klyra-2.png' },
  { src: '/images/vhcID6SDeRTW7aKyOCFatlczQ8.png', name: 'logo-veltix-2.png' },
  // Testimonial avatars
  { src: '/images/M53lpR5S6cgoswGdTYT86Ij6nc.jpg', name: 'testimonial-1.jpg' },
  { src: '/images/QxTFT68PE8L929VQ9Mll7tpgpgo.jpg', name: 'testimonial-2.jpg' },
  { src: '/images/Jx0sjmPaHsBJufevu9JiOtEUdk.png', name: 'testimonial-3.png' },
  { src: '/images/c8tWz0mTJOubjsoEA5iKsGPiS8k.png', name: 'testimonial-4.png' },
  { src: '/images/8jzU03uYomAhdoLFDzGYiN8OyE.png', name: 'testimonial-5.png' },
  // Webp assets (integration partner logos + screenshots)
  { src: '/images/2flumeKYp7vpTIuTHrYUqYMkc.webp', name: 'integration-1.webp' },
  { src: '/images/AeKI19Thx5uouRXmXF7dOlBHEQ.webp', name: 'integration-2.webp' },
  { src: '/images/Pmvk4fukJiVORA1zCp2uokSs.webp', name: 'integration-3.webp' },
  { src: '/images/YTV7u43FtvLFLf3DSGOmceskKI.webp', name: 'integration-4.webp' },
  { src: '/images/amMcQOlpfE6Mz3leOcwi7vx8isI.webp', name: 'integration-5.webp' },
  { src: '/images/f7xnivz5OjS3Ao1Yzoceikg2e5s.webp', name: 'integration-6.webp' },
  { src: '/images/0oRl1jS696hvxxCn5gjFBjcmw.webp', name: 'integration-7.webp' },
  { src: '/images/B7fST5r7caAHRrMECtN2EdQ6ws.webp', name: 'integration-8.webp' },
  { src: '/images/RqFV2omtmbZni00v5hxbusUvxY0.webp', name: 'integration-9.webp' },
  { src: '/images/l8Hu0JXAhpJmWiqlzGVnQ6o8tQQ.webp', name: 'integration-10.webp' },
  // More images
  { src: '/images/4qeiYhkID3sHTBbdKY0gFU5rGMM.png', name: 'feature-1.png' },
  { src: '/images/sOCzt0OCRAjMzJzfHya42yj3BQ.webp', name: 'feature-2.webp' },
  { src: '/images/6vM1jWXH11tk2PVDuFVnc6D0Q.png', name: 'feature-3.png' },
  { src: '/images/NE2GAKswBDqc83n8ppKcxucq8lY.webp', name: 'feature-4.webp' },
  { src: '/images/Lk29TuhQQvWnPgTUvMuGoB1IWw.png', name: 'feature-5.png' },
  { src: '/images/cDJa6sltHY43gct9Lgym2pEr78s.webp', name: 'feature-6.webp' },
  { src: '/images/oLcZnV53ulpbBq32WiHnCeT6ObU.webp', name: 'feature-7.webp' },
  { src: '/images/sJUqROkfIbtUgym5r2hTyYrpCv4.png', name: 'feature-8.png' },
  { src: '/images/lvGw9gvsDHRCfLPgm8863TKjfAA.png', name: 'feature-9.png' },
  { src: '/images/lXBgXwJoGTVFOIXs8UNvrMr3s.jpg', name: 'feature-10.jpg' },
  // Favicon
  { src: '/images/yF1ugNg1oyyAGQ6viopJzkllU18.png', name: 'favicon.png' },
];

async function downloadBatch(batch) {
  return Promise.all(
    batch.map(async ({ src, name }) => {
      const url = BASE + src;
      const outPath = path.join(OUT, name);
      try {
        const res = await fetch(url);
        if (!res.ok) { console.warn(`SKIP ${name}: ${res.status}`); return; }
        const buf = await res.arrayBuffer();
        await writeFile(outPath, Buffer.from(buf));
        console.log(`✓ ${name}`);
      } catch (e) {
        console.warn(`ERR ${name}: ${e.message}`);
      }
    })
  );
}

async function main() {
  if (!existsSync(OUT)) await mkdir(OUT, { recursive: true });
  // Download 4 at a time
  for (let i = 0; i < assets.length; i += 4) {
    await downloadBatch(assets.slice(i, i + 4));
  }
  console.log('Done!');
}

main();
