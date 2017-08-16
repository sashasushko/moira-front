// @flow
export const Statuses = {
    NODATA: 'NODATA',
    WARN: 'WARN',
    ERROR: 'ERROR',
    OK: 'OK',
};

export const StatusesCaptions = {
    OK: 'OK',
    NODATA: 'NODATA',
    WARN: 'WARN',
    ERROR: 'ERROR',
};

export const StatusesColors = {
    OK: '#00bfa5',
    NODATA: '#9e9e9e',
    WARN: '#ffc107',
    ERROR: '#ff5722',
};

export type Status = $Keys<typeof Statuses>;

export function getStatusColor(status: Status): string {
    return StatusesColors[status];
}

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
