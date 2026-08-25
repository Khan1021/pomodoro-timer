function Controls(props) {
    return (
        <>
            <button onClick={props.onToggleRunning}>{props.isRunning ? 'Pause' : 'Start'}</button>

            <button disabled={props.isResetDisabled} onClick={props.onReset}>Reset</button>
        </>
    )
}

export default Controls