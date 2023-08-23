import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard";

export function Orders() {
    const queueOrders = [
        { tableNumber: 2, itemCount: 2 },
        { tableNumber: 3, itemCount: 4 },
    ];

    // Calcular o total de itens em fila
    const totalQueueItems = queueOrders.reduce((total, order) => total + order.itemCount, 0);

    return (
        <Container>
            <OrdersBoard statusOrder="Fila de espera" orders={queueOrders} icon="⏰" totalItems={totalQueueItems} />
            <OrdersBoard statusOrder="Em produção" orders={queueOrders} icon="👩‍🍳" totalItems={totalQueueItems} />
            <OrdersBoard statusOrder="Pedido pronto para servir" orders={queueOrders} icon="✅" totalItems={totalQueueItems} />
        </Container>
    );
}
