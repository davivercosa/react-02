import { Intro } from "./components/intro";
import {
  CoffeeCard,
  CoffeeList,
  HomeContainer,
  Subtitle,
  Tag,
  Tags,
  Title,
  Content,
  Action,
  ActionButton,
  Cart,
  CoffeeCardFooter,
  ItemPrice,
  StyledImage,
} from "./styles";

import expresso from "../../assets/Type=Expresso.png";
import { useTheme } from "styled-components";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";

export function Home() {
  const theme = useTheme();

  return (
    <HomeContainer>
      <Intro></Intro>

      <CoffeeList>
        <CoffeeCard>
          <StyledImage src={expresso} alt="Café Expresso"></StyledImage>
          <Tags>
            <Tag>Tradicional</Tag>
            <Tag>Quente</Tag>
            <Tag>Quente</Tag>
          </Tags>
          <Content>
            <Title>Expresso Tradicional</Title>
            <Subtitle>
              O tradicional café feito com água quente e grãos moídos
            </Subtitle>
          </Content>
          <CoffeeCardFooter>
            <ItemPrice>
              R$ <span>9,90</span>
            </ItemPrice>
            <Action>
              <ActionButton>
                <Minus color={theme.purple} size={14} />
                <span>1</span>
                <Plus color={theme.purple} size={14} />
              </ActionButton>
              <Cart>
                <ShoppingCart
                  size={22}
                  color={theme["base-card"]}
                  weight="fill"
                />
              </Cart>
            </Action>
          </CoffeeCardFooter>
        </CoffeeCard>
      </CoffeeList>

      {/* <CoffeeList></CoffeeList> */}
    </HomeContainer>
  );
}
