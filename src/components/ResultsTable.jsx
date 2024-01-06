import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function ResultsTable({ userData }) {
  const annualData = calculateInvestmentResults(userData);

  const initialInvestment =
    annualData && annualData[0]
      ? annualData[0].valueEndOfYear -
        annualData[0].interest -
        annualData[0].annualInvestment
      : 0;

  let content;
  if (userData.duration <= 0) {
    content = <p className="center">Duration must be one or more years.</p>;
  } else {
    content = annualData.map((investmentData) => {
      const totalInterest =
        investmentData.valueEndOfYear -
        investmentData.annualInvestment * investmentData.year -
        initialInvestment;

      return (
        <tr key={investmentData.year}>
          <td>{investmentData.year}</td>
          <td>{formatter.format(investmentData.interest)}</td>
          <td>{formatter.format(investmentData.valueEndOfYear)}</td>
          <td>{formatter.format(totalInterest)}</td>
        </tr>
      );
    });
  }

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Interest</th>
            <th>Value End Of Year</th>
            <th>Total Interest</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </>
  );
}
