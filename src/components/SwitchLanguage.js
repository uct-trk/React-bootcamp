import React from 'react'
import { useSite } from '../context'
function SwitchLanguage() {
    const { language, dispatch } = useSite()

    const switchLang = () => {
        dispatch({
            type: "UPDATE_LANG",
        })
    }
    return (
        <div>
            Mevcut Dil = {language} <br />
            <button onClick={switchLang}>
                Dil değiştir
            </button>
        </div>
    )
}

export default SwitchLanguage