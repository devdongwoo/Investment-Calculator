import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"
import { calculateInvestmentResults, formatter } from "./util/investment"

let annualData

function deriveAnnualData(annualData) {
  let newAnnualData = [...annualData]

  for (let i = 0; i < newAnnualData.length; i++) {
    let prev = Number(newAnnualData[i - 1]?.originTotal)
    let cur = Number(newAnnualData[i]?.interest)
    if (i >= 1) {
      if (i === 1) {
        prev = Number(newAnnualData[i - 1]?.interest)
      }
      const prevCurPlus = prev + cur
      newAnnualData[i]["originTotal"] = prevCurPlus
    }
  }

  // total interest, invested capital format형식으로 넣어줌
  for (const item in newAnnualData) {
    if (item >= 1) {
      newAnnualData[item]["totalInterest"] = formatter.format(
        newAnnualData[item]["originTotal"]
      )

      newAnnualData[item]["investedCaptial"] = formatter.format(
        newAnnualData[item]["valueEndOfYear"] -
          newAnnualData[item]["originTotal"]
      )
    }
  }

  return newAnnualData
}

function App() {
  const [_, setInputDatas] = useState({})

  function handleInputData(e) {
    setInputDatas((prevDatas) => {
      const inputDatas = {
        ...prevDatas,
        [e.target.id]: Number(e.target.value)
      }
      annualData = calculateInvestmentResults({ ...inputDatas })

      return inputDatas
    })
  }

  let result

  if (annualData) {
    result = deriveAnnualData(annualData)
  }

  return (
    <main>
      <Header />
      <UserInput onSelect={handleInputData} />
      <Result result={result} />
    </main>
  )
}

export default App
