import {copyFile, mkdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Docusaurus copies root static files into each locale output. That would
// overwrite existing localized legal URLs with English pages (`pt-BR` also
// collides with `pt-br` on case-insensitive filesystems). Restore those files
// byte-for-byte after all locale builds finish.
for (const localeDirectory of ['de', 'pt-br']) {
  for (const fileName of ['privacy.html', 'legal.html', 'licenses.html']) {
    const source = path.join(projectRoot, 'static', localeDirectory, fileName);
    const destination = path.join(projectRoot, 'build', localeDirectory, fileName);
    await mkdir(path.dirname(destination), {recursive: true});
    await copyFile(source, destination);
  }
}
