import axios from 'axios'
import chalk from 'chalk'


const IPV4: string = "https://api.ipify.org";
const IPV6: string = "https://api6.ipify.org";



export async function getExternalIp(
  userIPV6 = false,
  endpoint = ''
): Promise<string> {
  if (endpoint === '') {
    endpoint = userIPV6 ? IPV6 : IPV4
  }
  const { data } = await axios.get(
    endpoint
  )

  console.log(`\n 🌐 ip: ${chalk.green(data)} \n`);
  return data
}

getExternalIp()
