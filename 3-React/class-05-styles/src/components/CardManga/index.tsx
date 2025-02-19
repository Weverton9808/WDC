import { Container } from "./styles";

type Props = {
  link: string;
  title: string;
};

export function CardManga({ link, title }: Props) {
  return (
    <Container>
      <img src={link} />
      <figcaption>{title}</figcaption>
    </Container>
  );
}
