import React, { useState } from 'react';

const translations = {
  sv: {
    currency: 'Valuta',
    language: 'Språk',
    income: 'INKOMSTER',
    addIncome: '+ Lägg till inkomst',
    expense: 'UTGIFTER',
    addExpense: '+ Lägg till utgift',
    result: 'RESULTAT',
    totalIncome: 'Total inkomst',
    totalExpense: 'Total utgift',
    afterExpenses: 'Efter utgifter',
    warning: 'Varning: Din budget går minus. Se över dina utgifter!'
  },
  en: {
    currency: 'Currency',
    language: 'Language',
    income: 'INCOME',
    addIncome: '+ Add Income',
    expense: 'EXPENSES',
    addExpense: '+ Add Expense',
    result: 'RESULT',
    totalIncome: 'Total income',
    totalExpense: 'Total expense',
    afterExpenses: 'After expenses',
    warning: 'Warning: Your budget is negative. Review your spending!'
  },
  fr: {
    currency: 'Devise',
    language: 'Langue',
    income: 'REVENUS',
    addIncome: '+ Ajouter un revenu',
    expense: 'DÉPENSES',
    addExpense: '+ Ajouter une dépense',
    result: 'RÉSULTAT',
    totalIncome: 'Revenu total',
    totalExpense: 'Dépenses totales',
    afterExpenses: 'Après dépenses',
    warning: 'Avertissement : votre budget est négatif. Vérifiez vos dépenses !'
  },
  es: {
    currency: 'Moneda',
    language: 'Idioma',
    income: 'INGRESOS',
    addIncome: '+ Agregar ingreso',
    expense: 'GASTOS',
    addExpense: '+ Agregar gasto',
    result: 'RESULTADO',
    totalIncome: 'Ingreso total',
    totalExpense: 'Gasto total',
    afterExpenses: 'Después de gastos',
    warning: 'Advertencia: su presupuesto es negativo. ¡Revise sus gastos!'
  },
  ar: {
    currency: 'عملة',
    language: 'اللغة',
    income: 'الدخل',
    addIncome: '+ إضافة دخل',
    expense: 'المصروفات',
    addExpense: '+ إضافة مصروف',
    result: 'النتيجة',
    totalIncome: 'إجمالي الدخل',
    totalExpense: 'إجمالي المصروفات',
    afterExpenses: 'بعد المصروفات',
    warning: 'تحذير: الميزانية سالبة. راجع مصروفاتك!'
  },
  zh: {
    currency: '货币',
    language: '语言',
    income: '收入',
    addIncome: '+ 添加收入',
    expense: '支出',
    addExpense: '+ 添加支出',
    result: '结果',
    totalIncome: '总收入',
    totalExpense: '总支出',
    afterExpenses: '支出后',
    warning: '警告：您的预算为负。请检查您的支出！'
  },
  ru: {
    currency: 'Валюта',
    language: 'Язык',
    income: 'ДОХОДЫ',
    addIncome: '+ Добавить доход',
    expense: 'РАСХОДЫ',
    addExpense: '+ Добавить расход',
    result: 'РЕЗУЛЬТАТ',
    totalIncome: 'Общий доход',
    totalExpense: 'Общие расходы',
    afterExpenses: 'После расходов',
    warning: 'Внимание: ваш бюджет отрицательный. Проверьте расходы!'
  },
};

const Row = ({ label, value, onChange }) => (
  <div style={{ marginBottom: 5 }}>
    <input
      style={{ width: 140, marginRight: 10 }}
      placeholder="Rubrik"
      value={label}
      onChange={(e) => onChange(e, 'label')}
    />
    <input
      type="number"
      placeholder="Belopp"
      value={value}
      onChange={(e) => onChange(e, 'value')}
    />
  </div>
);

export default function BudgetApp() {
  const [language, setLanguage] = useState('sv');
  const [currency, setCurrency] = useState('SEK');
  const t = translations[language];

  const [incomes, setIncomes] = useState([
    { label: 'Lön', value: '' },
    { label: 'Bidrag', value: '' },
    { label: 'Övriga inkomster', value: '' },
  ]);

  const [expenses, setExpenses] = useState([
    { label: 'Hyra', value: '' },
    { label: 'El', value: '' },
    { label: 'Mat', value: '' },
    { label: 'Transport', value: '' },
    { label: 'Övrigt', value: '' },
  ]);

  const handleIncomeChange = (i, e, field) => {
    const newIncomes = [...incomes];
    newIncomes[i][field] = e.target.value;
    setIncomes(newIncomes);
  };

  const handleExpenseChange = (i, e, field) => {
    const newExpenses = [...expenses];
    newExpenses[i][field] = e.target.value;
    setExpenses(newExpenses);
  };

  const addIncome = () => setIncomes([...incomes, { label: '', value: '' }]);
  const addExpense = () => setExpenses([...expenses, { label: '', value: '' }]);

  const incomeTotal = incomes.reduce((sum, i) => sum + parseFloat(i.value || 0), 0);
  const expenseTotal = expenses.reduce((sum, i) => sum + parseFloat(i.value || 0), 0);
  const result = incomeTotal - expenseTotal;

  return (
    <div style={{ fontFamily: 'Arial', padding: 20, maxWidth: 600, margin: 'auto' }}>
      <div style={{ marginBottom: 20 }}>
        <label><strong>{t.language}:</strong> </label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="sv">🇸🇪 Svenska</option>
          <option value="en">🇬🇧 English</option>
          <option value="fr">🇫🇷 Français</option>
          <option value="es">🇪🇸 Español</option>
          <option value="ar">🇸🇦 العربية</option>
          <option value="zh">🇨🇳 中文</option>
          <option value="ru">🇷🇺 Русский</option>
        </select>

        <span style={{ marginLeft: 20 }}>
          <label><strong>{t.currency}:</strong> </label>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="SEK">SEK</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="CNY">CNY</option>
          </select>
        </span>
      </div>

      <h3 style={{ background: '#c4f0c5', padding: 5 }}>{t.income}</h3>
      {incomes.map((item, i) => (
        <Row
          key={i}
          label={item.label}
          value={item.value}
          onChange={(e, field) => handleIncomeChange(i, e, field)}
        />
      ))}
      <button onClick={addIncome}>{t.addIncome}</button>

      <h3 style={{ background: '#c4f0c5', padding: 5, marginTop: 20 }}>{t.expense}</h3>
      {expenses.map((item, i) => (
        <Row
          key={i}
          label={item.label}
          value={item.value}
          onChange={(e, field) => handleExpenseChange(i, e, field)}
        />
      ))}
      <button onClick={addExpense}>{t.addExpense}</button>

      <h3 style={{ background: '#e8f4f8', padding: 5, marginTop: 20 }}>{t.result}</h3>
      <p><strong>{t.totalIncome}:</strong> {incomeTotal} {currency}</p>
      <p><strong>{t.totalExpense}:</strong> {expenseTotal} {currency}</p>
      <p style={{ color: result < 0 ? 'red' : 'green' }}>
        <strong>{t.afterExpenses}:</strong> {result} {currency}
      </p>

      {result < 0 && (
        <div style={{ background: '#f8d7da', padding: 10, marginTop: 10 }}>
          <strong>{t.warning}</strong>
        </div>
      )}
    </div>
  );
}
