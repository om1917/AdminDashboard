import { ThemedLayoutV2, ThemedTitleV2 } from '@refinedev/antd'
import React from 'react'
import { header } from './header'

const Layout = ({children}: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
        Header={header}
        Title={(titleProps) => <ThemedTitleV2 {...titleProps} text="Refine"></ThemedTitleV2>}
    >
        {children}
    </ThemedLayoutV2>
  )
}

export default Layout