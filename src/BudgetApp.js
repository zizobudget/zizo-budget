import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';

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

export default function ZizoBudget() {
  const [language, setLanguage] = useState('sv');
  const t = translations[language];

  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [goal, setGoal] = useState(0);
  const [months, setMonths] = useState(1);
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState('');

  const handleCalculate = () => {
    const savingsPerMonth = goal && months ? goal / months : 0;
    setResult(savingsPerMonth);

    const remaining = income - expenses - savingsPerMonth;
    if (remaining < 0) {
      setMessage(t.warning);
    } else {
      setMessage(t.ok);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="flex justify-end items-center space-x-2 mb-4">
        <Globe className="w-5 h-5" />
        <select
          className="border rounded px-2 py-1"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="sv">Svenska</option>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="ar">العربية</option>
          <option value="es">Español</option>
          <option value="zh">中文</option>
          <option value="ru">Русский</option>
        </select>
      </div>

      <Card>
        <CardContent className="space-y-4 p-4">
          <div>
            <label>{t.income}</label>
            <Input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} />
          </div>
          <div>
            <label>{t.expenses}</label>
            <Input type="number" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))} />
          </div>
          <div>
            <label>{t.goal}</label>
            <Input type="number" value={goal} onChange={(e) => setGoal(Number(e.target.value))} />
          </div>
          <div>
            <label>{t.months}</label>
            <Input type="number" value={months} onChange={(e) => setMonths(Number(e.target.value))} />
          </div>
          <Button onClick={handleCalculate}>{t.calculate}</Button>

          {result !== null && (
            <div className="mt-4 font-bold">
              {t.result} {result.toFixed(2)}
              <div className="mt-2 text-red-600 font-semibold">{message}</div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
