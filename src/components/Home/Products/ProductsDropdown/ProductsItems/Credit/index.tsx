import { FC } from "react";
import Image from "next/image";

import Debt from "assets/svg/debt.svg";
import { UserCredit } from "types/products";

interface CreditProps {
  credit: UserCredit;
}

export const Credit: FC<CreditProps> = ({
  credit: { creditType, interestRate, remainingAmount, currency },
}) => {
  return (
    <div className="product">
      <div className="product__img-container">
        <Image className="product__img" src={Debt} alt="credit-image" />
      </div>
      <div className="product__info">
        <div className="product__row">
          <p className="body-big">
            {remainingAmount} {currency}
          </p>
        </div>
        <div className="product__row product__row_bottom">
          <p className="body-medium">{creditType}</p>
          <p className="body-medium">{interestRate}%</p>
        </div>
      </div>
    </div>
  );
};
