// @flow
export const States = {
    OK: 'OK',
    NODATA: 'NODATA',
    WARNING: 'WARNING',
    ERROR: 'ERROR',
};

export const StatesCaptions = {
    OK: 'OK',
    NODATA: 'NODATA',
    WARNING: 'WARNING',
    ERROR: 'ERROR',
};

export const StatesColors = {
    OK: '#00bfa5',
    NODATA: '#9e9e9e',
    WARNING: '#ffc107',
    ERROR: '#ff5722',
};

export type State = $Keys<typeof States>;

// State;
// getCaption();
// getColor();

// export function getStateCaption(state: State) {

// }

// export default {
//     OK: new State('OK', 'green', 'Okay');
// };

// import States from './States';

// States.OK.getCaption();

// this.setState({
//     state: States.OK,
// })

// this.state.state.getCaption();
// getStateCaption(this.state.state);

// var a = Statuses.OK;

// getStatusCaption(status: Status): string {
//     switch (status) {
//         case 'OK':
//             return 'Ok';
//         case 'Warning':
//             return 'Warning';
//         default
//             return (status: empty);
//     }
// }
