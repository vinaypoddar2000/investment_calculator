import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({input}) {
    const resultsData = calculateInvestmentResults(input);
    let totalInterest = 0;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((yearlyData) => {
                    totalInterest += yearlyData.interest;
                    const totalAmountedInvested = yearlyData.valueEndOfYear - totalInterest;

                    return <tr key={yearlyData.year}>
                        <td>{yearlyData.year}</td>
                        <td>{formatter.format(yearlyData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearlyData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountedInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}