import React, { memo } from 'react'
//sasdece bir kere render edilecek yerde bizi gereksiz renderden kurtarır
function Memoization() {
    console.log("memoization rendered")
    return (
        <div>Memoization</div>
    )
}

export default memo(Memoization)