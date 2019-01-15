const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env')});

const program = require('commander');
const { updateDnsRecord } = require(path.resolve(__dirname, 'scripts','dyn-dns.js'));
const { do_init, do_renew } = require(path.resolve(__dirname, 'scripts', 'letsencrypt.js'));
const { upgradeplex } = require(path.resolve(__dirname,'scripts', 'plex.js'));

program
    .version('1.0.0')
    .option('-d --update_dns', 'Update the dynmic dns record')
    .option('-c --install_certs', 'Install new letsencrypt certs')
    .option('-r --renew_certs', 'Renew letsencrypt certs')
    .option('-p --upgrade_plex', 'Upgrade plex installation')
    .parse(process.argv);

if(program.update_dns) {
    updateDnsRecord();
} else if(program.install_certs) {
    do_init();
} else if(program.renew_certs) {
    do_renew();
} else if(program.upgrade_plex){
    upgradeplex();
} else {
    console.log('use -h --help to get a list of commands');
}