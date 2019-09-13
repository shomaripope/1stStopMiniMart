import React, { Component } from 'react';

class WeeklyEvents extends Component {
    render() {
        return (
                <table>
                    <tbody>
                        <tr>
                        <th>Day</th>
                        <th>Event</th>
                        </tr>
                        <tr>
                            <td>Monday</td>
                            <td>MUNDANE MONDAYS! <br />
                            Normal Day</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>TBD TUESDAYS! <br />
                            Normal Day</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>ROCK ON WEDNESDAYS! <br />
                            VR, Consoles and Music!</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>CARD GAME THURSDAYS! <br />
                            Spades, Poker, Etc.!</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>ALL-OUT FRIYAYS! <br />
                            Anything Goes...! Activities Will Varry!</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>DRIVE-IN SATURDAYS! <br />
                            Burn Out & Movie Night On The Lawn!</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>SOUL SUNDAYS <br />
                            Barbeque & Sports On Big Screen Projector!</td>
                        </tr>
                    </tbody>
                </table>
        );
    }
}

export default WeeklyEvents;