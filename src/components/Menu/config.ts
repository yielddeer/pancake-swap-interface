import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://yielddeer.farm/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://yielddeer.farm/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://yielddeer.farm/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/yielddeer',
      },
      {
        label: 'Blog',
        href: 'https://yieldder.medium.com/',
      },
    ],
  },
]

export default config
