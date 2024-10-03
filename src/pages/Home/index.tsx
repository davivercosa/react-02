import {
  HomeContainer,
  InfoContent,
  InfoTitle,
  InfoItems,
  InfoItemsContainer,
  Item,
} from "./styles";

import info from "../../assets/info.png";
import cart from "../../assets/cart.png";
import coffee from "../../assets/coffee.png";
import watch from "../../assets/watch.png";
import box from "../../assets/box.png";

export function Home() {
  return (
    <HomeContainer>
      <div>
        <InfoContent>
          <InfoTitle>
            <h1>Find the perfect coffee for any time of the day</h1>
            <span>
              With Coffee Delivery, you get your coffee wherever you are,
              anytime
            </span>
          </InfoTitle>
          <img src={info} alt="Info" />
        </InfoContent>
        <InfoItemsContainer>
          <InfoItems>
            <Item>
              <img src={cart} alt="Cart" />
              <span>Compra simples e segura</span>
            </Item>
            <Item>
              <img src={watch} alt="Watch" />
              <span>Entrega rápida e rastreada</span>
            </Item>
          </InfoItems>
          <InfoItems>
            <Item>
              <img src={box} alt="Box" />
              <span>Embalagem mantém o vafé intacto</span>
            </Item>
            <Item>
              <img src={coffee} alt="Coffee" />
              <span>O café chega fresquinho até você</span>
            </Item>
          </InfoItems>
        </InfoItemsContainer>
      </div>
      <div>
        <h2>Nossos Cafés</h2>
      </div>
    </HomeContainer>
  );
}
