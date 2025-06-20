"use client";

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

// Custom VANA Moksha Testnet chain definition
export const mokshaTestnet = {
  id: 14800,
  name: "VANA - Moksha",
  network: "vana-moksha",
  nativeCurrency: {
    name: "VANA",
    symbol: "VANA",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [process.env.NEXT_PUBLIC_RPC_URL || "https://rpc.moksha.vana.org"],
    },
    public: {
      http: [process.env.NEXT_PUBLIC_RPC_URL || "https://rpc.moksha.vana.org"],
    },
  },
  blockExplorers: {
    default: {
      url: "https://moksha.vanascan.io",
      name: "VANAScan",
    },
    etherscan: {
      url: "https://moksha.vanascan.io",
      name: "VANAScan",
    },
  },
  testnet: true,
};

const config = getDefaultConfig({
  appName: 'solid-nextjs',
  projectId: 'example_project_id_123456', // Valor de ejemplo, reemplaza por el tuyo en producción
  chains: [mokshaTestnet],
  ssr: false,
});
const queryClient = new QueryClient();

export default function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={{
            lightMode: lightTheme(),
            darkMode: darkTheme(),
          }}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}