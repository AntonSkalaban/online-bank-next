export type ProductsType = "card" | "credit";
export type PaymentSystem = "Visa" | "MasterCard";

export enum PaymentSystemEnum {
  visa = "Visa",
  mastercard = "MasterCard",
}
export interface CardTemplate {
  paymentSystem: PaymentSystemEnum;
  name: string;
  period: number;
  currency: string;
  isVirtual: boolean;
}

export interface UserCard extends CardTemplate {
  id: string;
  cardNumber: string;
  creationDate: string;
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

export interface UserCredit extends Omit<CreditTemplate, "maxLoanAmount"> {
  id: string; // Уникальный идентификатор кредита пользователя
  creditNumber: string; // Номер кредитного договора
  loanAmount: number; // Сумма выданного кредита
  remainingAmount: number; // Остаток долга по кредиту
  startDate: string; // Дата выдачи кредита
  ownerId?: string; // Идентификатор пользователя, которому принадлежит кредит
  monthlyPayment: number; // Сумма ежемесячного платежа
}
