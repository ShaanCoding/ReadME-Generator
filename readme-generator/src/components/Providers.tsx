'use client'

import { FC } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
interface ProvidersProps {
    children: React.ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
    return <>
        <QueryClientProvider client={queryClient}>

            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </>
}

export default Providers