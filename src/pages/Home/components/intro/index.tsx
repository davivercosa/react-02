import {
  IntroConteiner,
  Content,
  Title,
  Items,
  Item,
  SpanTitle,
  SpanSubTitle,
} from "./styles";

import info from "../../../../assets/info.png";
import cart from "../../../../assets/cart.png";
import coffee from "../../../../assets/coffee.png";
import watch from "../../../../assets/watch.png";
import box from "../../../../assets/box.png";

export function Intro() {
  return (
    <IntroConteiner>
      <Content>
        <Title>
          <SpanTitle>
            Encontre o café perfeito para qualquer hora do dia
          </SpanTitle>
          <SpanSubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </SpanSubTitle>
        </Title>
        <Items>
          <Item>
            <img src={cart} alt="Cart" />
            <span>Compra simples e segura</span>
          </Item>
          <Item>
            <img src={box} alt="Box" />
            <span>Embalagem mantém o vafé intacto</span>
          </Item>
          <Item>
            <img src={watch} alt="Watch" />
            <span>Entrega rápida e rastreada</span>
          </Item>
          <Item>
            <img src={coffee} alt="Coffee" />
            <span>O café chega fresquinho até você</span>
          </Item>
        </Items>
      </Content>
      <img src={info} alt="Info" />
    </IntroConteiner>
  );
}
