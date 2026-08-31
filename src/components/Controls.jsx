import PearlButton from './PearlButton'

function Controls(props) {
    return (
        <>
            <PearlButton label={props.isRunning ? 'Pause' : 'Start'} onClick={props.onToggleRunning} theme={props.theme} />

            <PearlButton label="Reset" disabled={props.isResetDisabled} onClick={props.onReset} theme={props.theme} />

            {/*dark mode toggle button*/}
            <PearlButton
                label={props.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                onClick={props.onToggleTheme}
                theme={props.theme}>
            </PearlButton>
        </>
    )
}

export default Controls