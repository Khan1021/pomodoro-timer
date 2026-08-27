

function SessionInfo(props) {
    const sessionColours = {
        'Work': '#E2B4BD',
        'Short Break': '#F7D6D0',
        'Long Break': '#FFF5F5'
    }

    return (
        <>
            <div style={{ color: sessionColours[props.modeLabels] }}>
                <div id="modeLabels">
                    <h3>{props.modeLabels}</h3>
                </div>
                <h3>{props.positionInCycle}</h3>
                <h2>{props.totalWorkSessions}</h2>
            </div>
        </>
    )
}

export default SessionInfo