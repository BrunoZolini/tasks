import logo from '../../assets/logo.svg';
import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <img src={logo} alt="Logo" />
      <S.Heading>Tasks</S.Heading>
    </S.Container>
  );
}
