
import { Command } from 'commander'
import getTimeNode from './modules/time-node'
import getIP from './modules/get-ip'
import getSystemInfo from './modules/get-system-info'


const program = new Command()

// 初始化命令
program
  .alias('db')
  .description('A super powerful cli tool-set to quickly do some common operations in the terminal.')
  .version('0.0.1', '-v, --version', '-V');

// 添加命令
program
  .command('time')
  .description('Get system information.')
  .action(getTimeNode);

// IP 
program
  .command('ip')
  .description('获取公网IP & 内网IP')
  // 处理参数
  .option('-i, --internal', '获取公网IP')
  .action(getIP);

// 获取系统信息 
program
  .command('system')
  .description('Get system information.')
  .action(getSystemInfo);

program.parse();





// program
//   .name('string-utils')
//   .description('CLI to some JavaScript string utilities')
//   .version('0.8.0');


// program.command('split')
//   .description('Split a string into substrings and display as an array')  // 执行命令的描述
//   .argument('<string>', 'string to split')   // 命令的参数
//   .option('--first', 'display just the first substring')   // 命令的选项
//   .option('-s, --separator <char>', 'separator character', ',')  // 命令的选项
//   .action((str: string, options: any) => {  // 命令的执行函数
//     // str 是参数的值
//     // options 是选项的值
//     console.log(str, options);
//     const limit = options.first ? 1 : undefined;  // 选项的值
//     console.log(str.split(options.separator, limit));
//   });

// program.parse();
