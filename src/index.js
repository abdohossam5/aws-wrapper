#!/usr/bin/env node

import program from 'commander';
import config from './config';
import Db from './mongodb';
import aws from './lib/aws'

program
  .version(config.version)
  .option('-a, --action', 'action')
  .parse(process.argv);


const run = async () => {
  console.log(program.action);
  try {
    switch(program.action) {
      case 'logEvents':
         await aws.listLogEvents();
         break;
      case 'logs':
        console.log('fetching logs ...');
        break;
      default:
        console.log('no valid option ...');
        break;
    }
  } catch (err) {
    console.dir(err, { depth: null, colors: true });
  }
  process.exit();
};

run();
