import PearlButton from './PearlButton'

function Controls(props) {
    return (
        <>
            <div className="playback-controls">
                <PearlButton label={props.isRunning ? 'Pause' : 'Start'} onClick={props.onToggleRunning} theme={props.theme} />

                <PearlButton label="Reset" disabled={props.isResetDisabled} onClick={props.onReset} theme={props.theme} />
            </div>

            {/*dark mode toggle button*/}
            <div className="theme-toggle">
                <PearlButton
                    label={props.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                    onClick={props.onToggleTheme}
                    theme={props.theme}>
                </PearlButton>
            </div>
        </>
    )
}

export default Controls