import { defineConfig } from '@wagmi/cli'
import {  react } from '@wagmi/cli/plugins'
import DelegateRegistryABI from './DelegateRegistryABI.json'

export default defineConfig({
  out: 'src/generated.ts',
  plugins: [react()],
  contracts: [
    {
      name: 'DelegateRegistry',
      abi: DelegateRegistryABI as any,
    },
  ],
})
