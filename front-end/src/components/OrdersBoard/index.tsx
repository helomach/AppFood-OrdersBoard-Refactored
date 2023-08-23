import { Board, OrdersContainer } from "./styles";

export function OrdersBoard(props: any) {
    return (
        <Board>
            <header>
                <span>{props.icon}</span>
                <strong>{props.statusOrder}</strong>
                <span>({props.totalItems} itens)</span>
            </header>
            <OrdersContainer>
                {props.orders.map((order: any, index: number) => (
                    <button type="button" key={index}>
                        <strong>Mesa {order.tableNumber}</strong>
                        <span>{order.itemCount} itens</span>
                    </button>
                ))}
            </OrdersContainer>
        </Board>
    );
}