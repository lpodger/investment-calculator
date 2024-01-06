export default function UserInput({ onChange, userData }) {
  return (
    <form id="user-input">
      <label className="input-group">
        Initial Investment
        <input
          type="number"
          required
          value={userData.initialInvestment}
          onChange={(event) =>
            onChange("initialInvestment", event.target.value)
          }
        />
      </label>
      <label>
        Annual Investment
        <input
          type="number"
          required
          value={userData.annualInvestment}
          onChange={(event) =>
            onChange("annualInvestment", event.target.value)
          }
        />
      </label>
      <label>
        Expected Return
        <input
          type="number"
          required
          value={userData.expectedReturn}
          onChange={(event) =>
            onChange("expectedReturn", event.target.value)
          }
        />
      </label>
      <label>
        Duration
        <input
          type="number"
          required
          value={userData.duration}
          onChange={(event) =>
            onChange("duration", event.target.value)
          }
        />
      </label>
    </form>
  );
}
