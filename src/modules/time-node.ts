import axios from "axios";
import chalk from "chalk";



// 获取当前时间 
const now = new Date().getTime()  // 时间戳 

// 获取当前年份
const year = new Date().getFullYear()

// 获取当前月份
const month = new Date().getMonth() + 1  // //  0 - 11

// 获取当前日期
const date = new Date().getDate()

// 获取当前星期几
const day = ['日', '一', '二', '三', '四', '五', '六'][new Date().getDay()]

// 获取当前小时
const hours = new Date().getHours()

// 获取当前分钟
const minutes = new Date().getMinutes()

// 今天是一年中的第几天
const dayOfYear = Math.floor(
  (now - new Date(new Date().getFullYear(), 0, 0).getTime()) /
  1000 /
  60 /
  60 /
  24
);

// 剩余天数
const remainingDays = 365 - dayOfYear



// 打印进度条
export function printTimeProgress() {
  // 进度条的进度
  const timeProgress = dayOfYear / 365  // 0.5945205479452055

  // 进度条还剩 百分之几
  const timeProgressStr = Number((timeProgress * 100).toFixed(2)) + '%'  // 59.45%

  // 开始 & 结束 标记
  const tag = chalk.red("█");
  const endTag = chalk.green("░");

  // 进度条长度
  const timeProgressBarLength = 20

  // 定义进度条
  const timeProgressBar = new Array(timeProgressBarLength)
    .fill(tag)
    .fill(endTag, Math.floor(timeProgressBarLength * timeProgress))
    .join("");

  return {
    timeProgress,  // 0.5945205479452055
    timeProgressStr, // 59.45%
    timeProgressBar, // ████
  }
}

export default function getTimeNode() {
  const { timeProgressBar, timeProgressStr } = printTimeProgress()

  console.log(
    `\n🌸现在是${year}年${month}月${date}日 ${hours}:${minutes} 星期${day}`
  )
  console.log(
    `\n${chalk.blue(year)}年${timeProgressStr} 已过${chalk.red(
      dayOfYear
    )}天, 剩余${chalk.green(remainingDays)}天`
  )
  console.log(`\n时间进度条: ${timeProgressBar}\n`)
}

// getTimeNode()
