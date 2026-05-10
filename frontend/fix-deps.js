const fs = require('fs');
const { execSync } = require('child_process');

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

function fixDeps(deps) {
  if (!deps) return;
  for (const [name, version] of Object.entries(deps)) {
    try {
      // Remove ^ or ~ for checking if it exists
      const cleanVer = version.replace(/^[\^~]/, '');
      const versionsStr = execSync(`npm view ${name} versions --json`, { stdio: ['pipe', 'pipe', 'ignore'] }).toString();
      const versions = JSON.parse(versionsStr);
      
      if (!versions.includes(cleanVer)) {
        console.log(`Version ${cleanVer} of ${name} does not exist. Getting latest valid...`);
        const latestStr = execSync(`npm view ${name} version`, { stdio: ['pipe', 'pipe', 'ignore'] }).toString().trim();
        console.log(`Setting ${name} to ^${latestStr}`);
        deps[name] = `^${latestStr}`;
      }
    } catch (e) {
      console.log(`Failed to process ${name}: ${e.message}`);
    }
  }
}

fixDeps(pkg.dependencies);
fixDeps(pkg.devDependencies);

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
console.log('Done fixing package.json');
