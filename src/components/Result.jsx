import { formatter } from "../util/investment"

export default function Result({ annualData, result }) {
  console.log(result)
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Year</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result?.map((data, idx) => {
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              {idx > 0 ? (
                <td>{data.totalInterest}</td>
              ) : (
                <td>{formatter.format(data.interest)}</td>
              )}
              {idx > 0 ? (
                <td>{data.investedCaptial}</td>
              ) : (
                <td>{formatter.format(data.valueEndOfYear - data.interest)}</td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
