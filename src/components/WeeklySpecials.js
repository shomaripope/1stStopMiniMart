import React, { Component } from 'react';

class WeeklySpecials extends Component {
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
                            <td>PIZZA MONDAY! <br />
                            $1.50 / slice (varieties of flavors) every Monday</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>TACO TUESDAY! <br />
                            Comes with lettuce, tomato, onion, philly meat, & cheese with the side of Tortilla Chip and Salsa. $5.00 / serving</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>SEAFOOD WEDNESDAY! <br />
                            Different kinds of Seafoods (Shrimp, Scallops, Crabs, etc.). Prices may vary. *****</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>PICAPICA THURSDAY! <br />
                            Varieties of Chicken Tenders, Mozzarella Sticks, Chicken Chunks; all comes with Fries. $5.00 </td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>TGI-FRIYAYS! <br />
                            Drink-drinks with pica for $8.99 / Vegan Friday: Variety of Salad. Prices varies.</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>MEATLOVERS SATURDAYS! <br />
                            Varieties of meat (Grilled Steak, Grilled Chicken, Pork Barbeques). Prices may vary.</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td> SWEET SUNDAYS <br />
                            Sweet Potato Pie, Lemon Cake, Ref Cake, Fruit Salad, etc. Prices may vary. ********</td>
                        </tr>
                    </tbody>
                </table>
        );
    }
}

export default WeeklySpecials;