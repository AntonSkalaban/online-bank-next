import { UserCredit } from "types/products";

export const userCredits: UserCredit[] = [
  {
    id: "12345",
    creditNumber: "CR-20231027-001",
    creditType: "Потребительский",
    currency: "RUB",
    interestRate: 15.5,
    loanTerm: 24,
    maxLoanAmount: 500000,
    loanAmount: 200000,
    remainingAmount: 120000,
    startDate: "2023-10-27",
    endDate: "2025-10-27",
    ownerId: "user-abc-123",
    monthlyPayment: 9611.5,
  },
];
