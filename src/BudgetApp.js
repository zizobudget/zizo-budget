import { useState } from "react";

export default function BudgetApp() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState({
    hyra: 0,
    el: 0,
    mat: 0,
    transport: 0,
    noje: 0,
    ovrigt: 0,
  });
  const [savingsGoal, setSavingsGoal] = useState(0);
  const [months, setMonths] = useState(1);

  const totalExpenses = Object.values(expenses).reduce((a, b) => a + Number(b), 0);
  const remaining = income - totalExpenses;
  const monthlySavingsNeeded = savingsGoal / months;
  const maxSpending = remaining - monthlySavingsNeeded;
  const savingsPossible = remaining >= monthlySavingsNeeded;

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '1rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Zizo Budgetplanerare</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <label>Inkomst (kr):</label>
        <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} />

        <label>Hyra:</label>
        <input type="number" value={expenses.hyra} onChange={(e) => setExpenses({ ...expenses, hyra: e.target.value })} />

        <label>El:</label>
        <input type="number" value={expenses.el} onChange={(e) => setExpenses({ ...expenses, el: e.target.value })} />

        <label>Mat:</label>
        <input type="number" value={expenses.mat} onChange={(e) => setExpenses({ ...expenses, mat: e.target.value })} />

        <label>Transport:</label>
        <input type="number" value={expenses.transport} onChange={(e) => setExpenses({ ...expenses, transport: e.target.value })} />

        <label>Nöje:</label>
        <input type="number" value={expenses.noje} onChange={(e) => setExpenses({ ...expenses, noje: e.target.value })} />

        <label>Övrigt:</label>
        <input type="number" value={expenses.ovrigt} onChange={(e) => setExpenses({ ...expenses, ovrigt: e.target.value })} />

        <label>Sparmål (kr):</label>
        <input type="number" value={savingsGoal} onChange={(e) => setSavingsGoal(e.target.value)} />

        <label>Antal månader:</label>
        <input type="number" value={months} onChange={(e) => setMonths(e.target.value)} />
      </div>

      <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f1f1f1' }}>
        <p><strong>Totala utgifter:</strong> {totalExpenses} kr</p>
        <p><strong>Kvar efter utgifter:</strong> {remaining} kr</p>
        <p><strong>Spara per månad:</strong> {monthlySavingsNeeded.toFixed(2)} kr</p>
        <p><strong>Max att spendera:</strong> {maxSpending.toFixed(2)} kr</p>
        <p style={{ color: savingsPossible ? 'green' : 'red' }}>
          {savingsPossible ? '✅ Du kan nå ditt mål!' : '❌ Justera dina utgifter'}
        </p>
      </div>
    </div>
  );
}
