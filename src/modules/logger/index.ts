export class ActionsLogger{
    logKeyInput = (e: KeyboardEvent) => {
        console.log('Key pressed', e);
    };

    logMouseClick = (e: MouseEvent) => {
        console.log('Mouse clicked', e);
    };

    init = () => {
        document.addEventListener('keydown', this.logKeyInput);
        document.addEventListener('click', this.logMouseClick);
        console.log('ActionsLogger initialized');
    };
}