

function SessionInfo(props) {
    return (
        <>
            <h3>{props.modeLabels}</h3>
            <h3>{props.positionInCycle}</h3>
            <h2>{props.totalWorkSessions}</h2>
        </>
    )
}

export default SessionInfo