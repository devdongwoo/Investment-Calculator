import Input from "./Input"

const TYPE = "number"
const MIN = "0"
const LABEL_NAME = [
  {
    NAME: "initialInvestment",
    CONTENT: "INITIAL INVESTMENT"
  },
  {
    NAME: "annualInvestment",
    CONTENT: "ANNUAL INVESTMENT"
  },
  {
    NAME: "expectedReturn",
    CONTENT: "EXPECTED RETURN"
  },
  {
    NAME: "duration",
    CONTENT: "DURATION"
  }
]

export default function UserInput({ onSelect }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          type={TYPE}
          min={MIN}
          name={LABEL_NAME[0].NAME}
          content={LABEL_NAME[0].CONTENT}
          onSelect={onSelect}
        />
        <Input
          type={TYPE}
          min={MIN}
          name={LABEL_NAME[1].NAME}
          content={LABEL_NAME[1].CONTENT}
          onSelect={onSelect}
        />
      </div>
      <div className="input-group">
        <Input
          type={TYPE}
          min={MIN}
          name={LABEL_NAME[2].NAME}
          content={LABEL_NAME[2].CONTENT}
          onSelect={onSelect}
        />
        <Input
          type={TYPE}
          min={MIN}
          name={LABEL_NAME[3].NAME}
          content={LABEL_NAME[3].CONTENT}
          onSelect={onSelect}
        />
      </div>
    </div>
  )
}
