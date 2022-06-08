const Daily = () => {
    return ( 
        <main className="content adder">
            <div className="inner">
                <h1>Planer Dnia</h1>
                <table className="daily">
                    <thead>
                        <tr>
                            <td></td>
                            <td>Poniedziałek</td>
                            <td>Wtorek</td>
                            <td>Środa</td>
                            <td>Czwartek</td>
                            <td>Piątek</td>
                            <td>Sobota</td>
                            <td>Niedziela</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1:00</td>
                            <td rowSpan={12}></td>
                        </tr>
                        <tr>
                            <td>2:00</td>
                            <td rowSpan={12}></td>
                        </tr>
                        <tr>
                            <td>3:00</td>
                            <td rowSpan={12}></td>
                        </tr>
                        <tr>
                            <td>4:00</td>
                            <td rowSpan={12}></td>
                        </tr>
                        <tr>
                            <td>5:00</td>
                            <td rowSpan={12}></td>
                        </tr>
                        <tr>
                            <td>6:00</td>
                            <td rowSpan={12}></td>
                        </tr>
                        <tr>
                            <td>7:00</td>
                            <td rowSpan={12}></td>
                        </tr>
                        <tr>
                            <td>8:00</td>
                            <td rowSpan={12}></td>
                        </tr>
                        <tr>
                            <td>9:00</td>
                            <td rowSpan={12}></td>
                        </tr>
                        <tr>
                            <td>10:00</td>
                            <td rowSpan={12}></td>
                        </tr>
                        <tr>
                            <td>11:00</td>
                            <td rowSpan={12}></td>
                        </tr>
                        <tr>
                            <td>12:00</td>
                            <td rowSpan={12}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="decor"></div>
        </main>
     );
}
 
export default Daily;