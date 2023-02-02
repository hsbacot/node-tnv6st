// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const shell = require('shelljs');
const logger = require('@docusaurus/logger');

// Inspired by https://github.com/xxorax/node-shell-escape/blob/master/shell-escape.js
function escapeShellArg(s) {
  let res = `'${s.replace(/'/g, "'\\''")}'`;
  res = res.replace(/^(?:'')+/g, '').replace(/\\'''/g, "\\'");
  return res;
}

const gitCommand = 'git clone';
const dest = './dest';

const source = {
  url: 'git@github.com:hsbacot/backstage-template.git',
};

const gitCloneCommand = `${gitCommand} ${escapeShellArg(
  source.url
)} ${escapeShellArg(dest)}`;

if (shell.exec(gitCloneCommand).code !== 0) {
  logger.error`Cloning Git template failed!`;
  process.exit(1);
}
if (source.strategy === 'copy') {
  // await fs.remove(path.join(dest, '.git'));
}
