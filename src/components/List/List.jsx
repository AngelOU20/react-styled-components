import { Box, Btn } from "../UI";
import { lista } from "../../info";
import { Card } from "../";

export const List = () => {
  return (
    <Box>
      {lista.cargos.map((cargo) => (
        <Card key={cargo.id} {...cargo} />
      ))}
      <Btn>Ver más</Btn>
    </Box>
  );
};
