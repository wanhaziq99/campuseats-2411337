// Makes <matric>_submission.zip for the Practical Test: `npm run pack`. Works the same on Windows and macOS.
// It includes your code and your Git history, never node_modules or .env.local.
// Your matric number is read from the "Matric No." line at the top of src/App.jsx;
// if it is not there, you are asked for it once and it is written into that line.
import { readdirSync, readFileSync, statSync, writeFileSync, existsSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { deflateRawSync } from 'node:zlib'
import { createInterface } from 'node:readline/promises'

const APP = join('src', 'App.jsx')
const MATRIC_LINE = /^(\/\/\s*Matric No\.?\s*:)[ \t]*(.*)$/m
async function getMatric() {
  const app = existsSync(APP) ? readFileSync(APP, 'utf8') : ''
  const found = app.match(MATRIC_LINE)
  let matric = found ? found[2].trim() : ''
  if (!/^\d{7}$/.test(matric)) {
    const rl = createInterface({ input: process.stdin, output: process.stdout })
    while (!/^\d{7}$/.test(matric)) {
      if (matric) console.log(`"${matric}" is not a 7-digit matric number.`)
      matric = (await rl.question('Your matric number (7 digits): ')).trim()
    }
    rl.close()
  }
  if (found && found[2].trim() !== matric) writeFileSync(APP, app.replace(MATRIC_LINE, `$1 ${matric}`))
  return matric
}
const matric = await getMatric()
const OUT = `${matric}_submission.zip`

const INCLUDE = ['src', 'public', 'package.json', 'index.html', 'vite.config.js', 'README.md', '.git']
const SKIP = new Set(['node_modules', 'dist', '.env.local'])

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  return c >>> 0
})
const crc32 = (buf) => {
  let c = 0xffffffff
  for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

function walk(path, out) {
  const base = path.split(sep).pop()
  if (!existsSync(path) || SKIP.has(base) || base.endsWith('submission.zip')) return
  if (statSync(path).isDirectory()) for (const f of readdirSync(path)) walk(join(path, f), out)
  else out.push(path)
}

const files = []
for (const p of INCLUDE) walk(p, files)

const locals = []
const centrals = []
let offset = 0
for (const file of files) {
  const name = Buffer.from(relative('.', file).split(sep).join('/'))
  const data = readFileSync(file)
  const packed = deflateRawSync(data)
  const crc = crc32(data)
  const local = Buffer.alloc(30)
  local.writeUInt32LE(0x04034b50, 0); local.writeUInt16LE(20, 4); local.writeUInt16LE(0, 6)
  local.writeUInt16LE(8, 8); local.writeUInt32LE(0, 10); local.writeUInt32LE(crc, 14)
  local.writeUInt32LE(packed.length, 18); local.writeUInt32LE(data.length, 22)
  local.writeUInt16LE(name.length, 26); local.writeUInt16LE(0, 28)
  const central = Buffer.alloc(46)
  central.writeUInt32LE(0x02014b50, 0); central.writeUInt16LE(20, 4); central.writeUInt16LE(20, 6)
  central.writeUInt16LE(0, 8); central.writeUInt16LE(8, 10); central.writeUInt32LE(0, 12)
  central.writeUInt32LE(crc, 16); central.writeUInt32LE(packed.length, 20); central.writeUInt32LE(data.length, 24)
  central.writeUInt16LE(name.length, 28); central.writeUInt32LE(offset, 42)
  locals.push(local, name, packed)
  centrals.push(central, name)
  offset += local.length + name.length + packed.length
}
const centralSize = centrals.reduce((n, b) => n + b.length, 0)
const end = Buffer.alloc(22)
end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(files.length, 8); end.writeUInt16LE(files.length, 10)
end.writeUInt32LE(centralSize, 12); end.writeUInt32LE(offset, 16)
writeFileSync(OUT, Buffer.concat([...locals, ...centrals, end]))
console.log(`${OUT}: ${files.length} files. Upload it to iTa'LeeM now.`)
