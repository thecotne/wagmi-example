import { useAccount } from 'wagmi'

import { Account } from './components/Account'
import { Connect } from './components/Connect'
import { NetworkSwitcher } from './components/NetworkSwitcher'
import { useDelegateRegistrySetDelegate, usePrepareDelegateRegistrySetDelegate } from './generated'

export function App() {
  const { isConnected } = useAccount()


  const { data, isLoading, isSuccess, write } = useDelegateRegistrySetDelegate({
    address: "0x469788fE6E9E9681C6ebF3bF78e7Fd26Fc015446"
  })

  

  return (
    <>
      <h1>wagmi + Vite</h1>

      <Connect />

      {isConnected && (
        <>
          <Account />
          <NetworkSwitcher />
        </>
      )}

      <div>
        <button onClick={() => write?.({
          args: [
            "0x737461726b6e65742e6574680000000000000000000000000000000000000000",
            "0x02Fff89B7AEC1d1902032446C91e690C415A0B3b"
          ]
        })}>setDelegate</button>
        {isLoading && <div>Check Wallet</div>}
        {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
      </div>
    </>
  )
}
