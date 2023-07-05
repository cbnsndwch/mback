#!/usr/bin/env node
import { program } from 'commander';

import './config.js';
import commands from './commands/index.js';

program
    .name('mback')
    .description('CLI tool to take online backups from a MongoDB server')
    .version('0.1.0', '-v, --version', 'display the version number');

for (const addCommand of commands) {
    addCommand(program);
}

program
    .parseAsync()
    .then(() => {
        // if no command is specified, show help
        if (program.args.length === 0) {
            program.outputHelp();
        }
    })
    .catch(err => {
        console.error(err);
    });
