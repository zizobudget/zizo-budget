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
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">Zizo Budgetplanerare</h1>

      <div className="grid grid-cols-2 gap-4">
        <label>Inkomst (kr):</label>
        <input type="number" className="border p-2 rounded" value={income} onChange={(e) => setIncome(e.target.value)} />

        <label>Hyra:</label>
        <input type="number" className="border p-2 rounded" value={expenses.hyra} onChange={(e) => setExpenses({ ...expenses, hyra: e.target.value })} />

        <label>El:</label>
        <input type="number" className="border p-2 rounded" value={expenses.el} onChange={(e) => setExpenses({ ...expenses, el: e.target.value })} />

        <label>Mat:</label>
        <input type="number" className="border p-2 rounded" value={expenses.mat} onChange={(e) => setExpenses({ ...expenses, mat: e.target.value })} />

        <label>Transport:</label>
        <input type="number" className="border p-2 rounded" value={expenses.transport} onChange={(e) => setExpenses({ ...expenses, transport: e.target.value })} />

        <label>Nöje:</label>
        <input type="number" className="border p-2 rounded" value={expenses.noje} onChange={(e) => setExpenses({ ...expenses, noje: e.target.value })} />

        <label>Övrigt:</label>
        <input type="number" className="border p-2 rounded" value={expenses.ovrigt} onChange={(e) => setExpenses({ ...expenses, ovrigt: e.target.value })} />

        <label>Sparmål (kr):</label>
        <input type="number" className="border p-2 rounded" value={savingsGoal} onChange={(e) => setSavingsGoal(e.target.value)} />

        <label>Antal månader för att nå målet:</label>
        <input type="number" className="border p-2 rounded" value={months} onChange={(e) => setMonths(e.target.value)} />
      </div>

      <div className="p-4 bg-gray-100 rounded shadow">
        <p><strong>Totala utgifter:</strong> {totalExpenses} kr</p>
        <p><strong>Kvar efter utgifter:</strong> {remaining} kr</p>
        <p><strong>Behövligt sparande per månad:</strong> {monthlySavingsNeeded.toFixed(2)} kr</p>
        <p><strong>Maxbelopp att spendera (för att nå målet):</strong> {maxSpending.toFixed(2)} kr</p>
        <p className={savingsPossible ? "text-green-600" : "text-red-600 font-bold"}>
          {savingsPossible ? "✅ Du kan nå ditt mål med nuvarande budget." : "❌ Du behöver justera dina utgifter för att nå målet."}
        </p>
      </div>
    </div>
  );
}