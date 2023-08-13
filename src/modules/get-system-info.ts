import os from 'os'
import chalk from 'chalk'


// 秒钟转换为天时分秒
const dealTime = (time: number) => {
  let d = Math.floor(time / (24 * 3600));
  let h = Math.floor((time % (24 * 3600)) / 3600);
  let m = Math.floor((time % 3600) / 60);
  let s = Math.floor(time % 60);
  return `${d}天${h}小时${m}分钟${s}秒`;
};


// 获取系统信息
export default function getSystemInfo() {
  console.log(`- 主机名：${chalk.green(os.hostname())}`)
  console.log(`- 操作系统类型：${chalk.green(os.type())}`)
  console.log(`- 操作系统平台：${chalk.green(os.platform())}`)
  console.log(`- 操作系统 CPU 架构：${chalk.green(os.arch())}`)
  console.log(`- 操作系统版本：${chalk.green(os.release())}`)
  console.log(`- CPU 的型号：${chalk.green(os.cpus()[0].model)}`)
  console.log(`- CPU 的核心数：${chalk.green(os.cpus().length)}`)
  console.log(`- CPU 的速度：${chalk.green(os.cpus()[0].speed)}`)
  console.log(`- 操作系统运行的时间：${chalk.green(dealTime(os.uptime()))}`)
  console.log(`- 系统内存总量：${chalk.green(Number(os.totalmem() / 1024 / 1024 / 1024).toFixed(2))} GB`)
  console.log(`- 系统空闲内存量：${chalk.green(Number(os.freemem() / 1024 / 1024 / 1024).toFixed(2))} GB`)
}


getSystemInfo()
