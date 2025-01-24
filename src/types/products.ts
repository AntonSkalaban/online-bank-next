export interface CardTemplate {
  paymentSystem: "Visa" | "MasterCard";
  name: string;
  period: number;
  currency: string;
  isVirtual: boolean;
}

export interface UserCard extends CardTemplate {
  id: string;
  cardNumber: string;
  expirationDate: string;
  balance: number;
  ownerId: string;
}

export interface CreditTemplate {
  creditType: string; // Тип кредита, например "Потребительский", "Ипотека", "Автокредит"
  currency: string; // Валюта кредита
  interestRate: number; // Процентная ставка по кредиту
  loanTerm: number; // Срок кредита в месяцах
  maxLoanAmount: number; // Максимальная сумма кредита
}

export interface UserCredit extends CreditTemplate {
  id: string; // Уникальный идентификатор кредита пользователя
  creditNumber: string; // Номер кредитного договора
  loanAmount: number; // Сумма выданного кредита
  remainingAmount: number; // Остаток долга по кредиту
  startDate: string; // Дата выдачи кредита
  endDate: string; // Дата погашения кредита (плановая)
  ownerId?: string; // Идентификатор пользователя, которому принадлежит кредит
  monthlyPayment: number; // Сумма ежемесячного платежа
}
