import {FC} from "react";
import {numberTransformer} from "../../utils/numberTransformer.ts";

type PropsType = {
    budget: number,
    revenue: number
}

export const BudgetComponent: FC<PropsType> = ({budget, revenue}) => {
    if (budget > 0 && revenue > 0)
        return (
            <>
                <hr/>
                <div>
                    <p>Budget: {numberTransformer(budget)}</p>
                    <p>Revenue: {numberTransformer(revenue)}</p>
                </div>
            </>
        );
    return null;
};