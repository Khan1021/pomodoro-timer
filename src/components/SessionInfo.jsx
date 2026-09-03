
import { useState, useEffect, useRef } from 'react'

function SessionInfo(props) {
    const [isVisible, setIsVisible] = useState(true)
    const isFirstRender = useRef(true)

    const sessionColours = {
        light: {
            'Work': '#E2B4BD',
            'Short Break': '#F7D6D0',
            'Long Break': '#FFF5F5'
        },
        dark: {
            'Work': 'oklab(96% 0.180 37.585)',
            'Short Break': 'oklab(51.373% 0.234 98.371)',
            'Long Break': 'oklab(79.255% 0.149 154.725)'
        }
    }

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        setIsVisible(false)

        const timeoutId = setTimeout(() => {
            setIsVisible(true)
        }, 300)

        return () => clearTimeout(timeoutId)
    }, [props.modeLabels])


    return (
        <>
            <div style={{ color: sessionColours[props.modeLabels] }}>
                <div id="modeLabels">
                    <h3 className={isVisible ? 'visible' : ''}>{props.modeLabels}</h3>
                </div>
                <h3>{props.positionInCycle}</h3>
                <h2>{props.totalWorkSessions}</h2>
            </div>
        </>
    )
}

export default SessionInfo