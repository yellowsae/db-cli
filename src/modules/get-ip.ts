import axios from 'axios'
import chalk from 'chalk'

// node
import os from 'os'

const IPV4: string = "https://api.ipify.org";
const IPV6: string = "https://api6.ipify.org";


export default function getIP(options: any) {
  const { internal } = options
  if (internal) {
    getExternalIp({})
  } else {
    getInternalIp()
  }
}


// 获取内网 IP 
export function getInternalIp(name = 'WLAN') {
  const interfaces = os.networkInterfaces()
  for (let devName in interfaces) {
    const iface = interfaces[name] || interfaces[devName]
    for (let i = 0; i < iface!.length; i++) {
      const alias = iface![i]
      if (devName === 'WLAN' && alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        console.log(`🌏 ${chalk.white('ip')}: ${chalk.green(alias.address)}`)
        console.log(`🌏 ${chalk.white('mac')}: ${chalk.green(alias.mac)}`)
        console.log(`🌏 ${chalk.white('netmask')}: ${chalk.green(alias.netmask)}`)
      }
    }
  }
}


// 获取公网IP 
export async function getExternalIp({
  ipv6 = false,
  timeout = 5000,
}) {
  const url = ipv6 ? IPV6 : IPV4

  const { data } = await axios.get(url, {
    timeout
  })
  console.log(`\n 🌏 ${chalk.white('ip')}: ${chalk.green(data)} \n`)
}

