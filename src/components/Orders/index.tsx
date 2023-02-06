import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';

import { Container } from './styles';

const orders: Order[] = [
  {
    _id: '1',
    status: 'WAITING',
    table: '2',
    products: [
      {
        _id: '63dc6429fd6120b81fa7d973',
        quantity: 2,
        product: {
          name: 'Coca cola',
          imagePath: '1675387945510-coca-cola.png',
          price: 7,
        }
      },
      {
        _id: '63dc652dfd6120b81fa7d975',
        quantity: 3,
        product: {
          name: 'Pizza 4 queijos',
          imagePath: '1675388205585-quatro-queijos.png',
          price: 40,
        }
      }
    ]
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕑" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👩‍🍳" title="Em produção" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
}
