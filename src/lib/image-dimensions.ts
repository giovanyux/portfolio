// Leitor de dimensões de imagem sem dependência externa — só PNG, WEBP e
// JPEG (os três formatos usados em public/cases). Roda em build time (Node),
// nunca no client. Evitado de propósito um pacote como `image-size`: a
// versão atual dele carrega um advisory de severidade alta (DoS em parsers
// de ICNS/JXL/HEIF que nem usamos aqui) — ver relatório de segurança.
import { readFileSync } from 'node:fs';

export interface Dimensions {
  width: number;
  height: number;
}

function readPng(buf: Buffer): Dimensions | null {
  if (buf.length < 24) return null;
  const isPng = buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47;
  if (!isPng) return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function readWebp(buf: Buffer): Dimensions | null {
  if (buf.length < 30) return null;
  if (buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') return null;
  const fourCC = buf.toString('ascii', 12, 16);

  if (fourCC === 'VP8 ') {
    // Lossy simples: payload começa em 20, largura/altura 14-bit LE no offset 6/8 do payload.
    const width = buf.readUInt16LE(26) & 0x3fff;
    const height = buf.readUInt16LE(28) & 0x3fff;
    return { width, height };
  }
  if (fourCC === 'VP8L') {
    // Lossless: 1 byte de assinatura (0x2f) em 20, depois 4 bytes LE com width-1/height-1 empacotados.
    const bits = buf.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }
  if (fourCC === 'VP8X') {
    // Extended (alpha/anim/exif): canvas width/height menos 1, 24-bit LE, no offset 4/7 do payload.
    return { width: buf.readUIntLE(24, 3) + 1, height: buf.readUIntLE(27, 3) + 1 };
  }
  return null;
}

function readJpeg(buf: Buffer): Dimensions | null {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let offset = 2;
  while (offset + 9 < buf.length) {
    if (buf[offset] !== 0xff) {
      offset++;
      continue;
    }
    const marker = buf[offset + 1];
    const isSofMarker = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    if (isSofMarker) {
      return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) };
    }
    const segmentLength = buf.readUInt16BE(offset + 2);
    offset += 2 + segmentLength;
  }
  return null;
}

const cache = new Map<string, Dimensions | null>();

/** Lê width/height reais do arquivo em disco (caminho absoluto). Cacheado por caminho. */
export function getImageDimensions(absolutePath: string): Dimensions | null {
  if (cache.has(absolutePath)) return cache.get(absolutePath) ?? null;
  let dims: Dimensions | null = null;
  try {
    const buf = readFileSync(absolutePath);
    dims = readPng(buf) ?? readWebp(buf) ?? readJpeg(buf);
  } catch {
    dims = null;
  }
  cache.set(absolutePath, dims);
  return dims;
}
