import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const Card = ({ children }: Props) => {
    return (
        <div className="card" id="list1" style={{ borderRadius: ".15rem" }}>
            {children}
        </div>
    )
}

export default Card;