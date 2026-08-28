import PearlButton from './PearlButton'

function Controls(props) {
    return (
        <>
            <PearlButton label={props.isRunning ? 'Pause' : 'Start'} onClick={props.onToggleRunning} />

            <PearlButton label="Reset" disabled={props.isResetDisabled} onClick={props.onReset} />

            {/*dark mode toggle button*/}
            <PearlButton
                label={props.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                onClick={props.onToggleTheme}>
            </PearlButton>
        </>
    )
}

export default Controls