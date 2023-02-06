import { formatCurrency } from '../../utils/formatCurrency';

import { Order, OrderStatus } from '../../types/Order';

import closeIcon from '../../assets/images/close-icon.svg';

import { ModalBody, Overlay, OrderDetails, Actions } from './styles';
import { useEffect } from 'react';

interface OrderModalProps {
  visible: boolean
  order: Order | null
  onClose: () => void
}

interface OrderStatusInterface {
  icon: string;
  statusText: string
}

const orderStatusDetails: Record<OrderStatus, OrderStatusInterface> = {
  DONE: {
    icon: '✅',
    statusText: 'Pronto!'
  },
  IN_PRODUCTION: {
    icon: '👩‍🍳',
    statusText: 'Em preparação'
  },
  WAITING: {
    icon: '🕑',
    statusText: 'Fila de espera',
  }
};

export function OrderModal({ visible, order, onClose }: OrderModalProps) {
  if (!visible || !order) return null;

  const total = order.products.reduce((acc, { product, quantity }) => {
    return acc + (product.price * quantity);
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>
            Status do pedido
          </small>

          <div>
            <span>{orderStatusDetails[order.status].icon}</span>
            <strong>{orderStatusDetails[order.status].statusText}</strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => {
              return (
                <div className="item" key={_id}>
                  <img
                    src={`http://localhost:3001/uploads/${product.imagePath}`}
                    alt={product.name}
                    width="56"
                    height="28.51"
                  />

                  <span className="quantity">{quantity}x</span>

                  <div className="product-details">
                    <strong>{product.name}</strong>
                    <span>{formatCurrency(product.price)}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button type="button" className="primary">
            <span>👩‍🍳</span>
            <strong>Iniciar produção</strong>
          </button>

          <button type="button" className="secondary">
            Cancelar pedido
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
