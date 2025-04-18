import { Center, Heading, StackSeparator, VStack } from "@chakra-ui/react";
import { useState } from "react";
import CartItem, { ItemData } from "../components/CartItem.tsx";
import TotalFooter from "../components/TotalFooter.tsx";
import CustomerDetails from "../components/CustomerDetails.tsx";
import { Products } from "../data.ts";

function HostedCheckout() {
  const [items] = useState<ItemData[]>(Products);
  return (
    <>
      <Center h={"120vh"} color="black">
        <VStack separator={<StackSeparator/>}>
          <Heading>Hosted Checkout Example</Heading>
          {items.map((elem, index) => {
            return (
              <CartItem key={elem.id || index} data={elem} mode={"checkout"} />
            );
          })}
          <TotalFooter total={30} mode={"checkout"} />
          <CustomerDetails
            data={items}
            endpoint={"/checkout/hosted"}
            mode={"checkout"}
          />
        </VStack>
      </Center>
    </>
  );
}

export default HostedCheckout;
