import React, { useState } from 'react';

const translations = {
  en: {
    income: 'Income',
    expenses: 'Expenses',
    goal: 'Savings Goal',
    months: 'Months',
    calculate: 'Calculate',
    result: 'Monthly Savings Required:',
    warning: '⚠️ You will not reach your goal at this rate.',
    ok: '✅ You are on track!',
  },
  sv: {
    income: 'Inkomst',
    expenses: 'Utgifter',
    goal: 'Sparmål',
    months: 'Månader',
    calculate: 'Beräkna',
    result: 'Månatligt sparande som krävs:',
    warning: '⚠️ Du kommer inte att nå ditt mål i tid.',
    ok: '✅ Du är på rätt spår!',
  },
  fr: {
    income: 'Revenu',
    expenses: 'Dépenses',
    goal: 'Objectif d’épargne',
    months: 'Mois',
    calculate: 'Calculer',
    result: 'Épargne mensuelle requise :',
    warning: '⚠️ Vous n’atteindrez pas votre objectif à ce rythme.',
    ok: '✅ Vous êtes sur la bonne voie !',
  },
  ar: {
    income: 'الدخل',
    expenses: 'المصروفات',
    goal: 'الهدف من التوفير',
    months: 'أشهر',
    calculate: 'احسب',
    result: 'الادخار الشهري المطلوب:',
    warning: '⚠️ لن تصل إلى هدفك بهذا المعدل.',
    ok: '✅ أنت على المسار الصحيح!',
  },
  es: {
    income: 'Ingresos',
    expenses: 'Gastos',
    goal: 'Meta de ahorro',
    months: 'Meses',
    calculate: 'Calcular',
    result: 'Ahorro mensual requerido:',
    warning: '⚠️ No alcanzarás tu meta a este ritmo.',
    ok: '✅ ¡Vas por buen camino!',
  },
  zh: {
    income: '收入',
    expenses: '支出',
    goal: '储蓄目标',
    months: '月份',
    calculate: '计算',
    result: '每月所需储蓄金额：',
    warning: '⚠️ 按照目前的情况，你将无法实现目标。',
    ok: '✅ 你正朝着目标前进！',
  },
  ru: {
    income: 'Доход',
    expenses: 'Расходы',
    goal: 'Цель накоплений',
    months: 'Месяцы',
    calculate: 'Рассчитать',
    result: 'Необходимые ежемесячные сбережения:',
    warning: '⚠️ Вы не достигнете своей цели при таком темпе.',
    ok: '✅ Вы на правильном пути!',
  },
};

export default function BudgetApp() {
  const [language, setLanguage] = useState('sv');
  const t = translations[language];

  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [goal, setGoal] = useState('');
  const [months, setMonths] = useState('');
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState('');

  const handleCalculate = () => {
    const inc = parseFloat(income) || 0;
    const exp = parseFloat(expenses) || 0;
    const g = parseFloat(goal) || 0;
    const m = parseInt(months) || 1;

    const savingsPerMonth = g / m;
    setResult(savingsPerMonth.toFixed(2));

    const remaining = inc - exp - savingsPerMonth;
    setMessage(remaining < 0 ? t.warning : t.ok);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: 20, fontFamily: 'Arial' }}>
      <div style={{ marginBottom: 20 }}>
        <label>🌐 Språk / Language: </label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="sv">Svenska</option>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="ar">العربية</option>
          <option value="es">Español</option>
          <option value="zh">中文</option>
          <option value="ru">Русский</option>
        </select>
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>{t.income}: </label>
        <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>{t.expenses}: </label>
        <input type="number" value={expenses} onChange={(e) => setExpenses(e.target.value)} />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>{t.goal}: </label>
        <input type="number" value={goal} onChange={(e) => setGoal(e.target.value)} />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>{t.months}: </label>
        <input type="number" value={months} onChange={(e) => setMonths(e.target.value)} />
      </div>

      <button onClick={handleCalculate} style={{ marginTop: 10 }}>{t.calculate}</button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <strong>{t.result} {result}</strong>
          <div style={{ color: message.includes('⚠️') ? 'red' : 'green', marginTop: 10 }}>{message}</div>
        </div>
      )}
    </div>
  );
}
