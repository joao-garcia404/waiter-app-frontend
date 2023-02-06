import logoImg from '../../assets/images/logo.svg';

import { HeaderContainer, Content } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <img src={logoImg} alt="Waiter-app logo" />
      </Content>
    </HeaderContainer>
  );
}

