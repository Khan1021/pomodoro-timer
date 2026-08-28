import PearlButton from './PearlButton'

function Controls(props) {
    return (
        <>
            <PearlButton label={props.isRunning ? 'Pause' : 'Start'} onClick={props.onToggleRunning} />

            <PearlButton label="Reset" disabled={props.isResetDisabled} onClick={props.onReset} />
        </>
    )
}

export default Controls