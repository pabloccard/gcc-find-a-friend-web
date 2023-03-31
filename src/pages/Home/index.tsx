import * as S from './styles'
import logo from '@/assets/icons/logo-company.svg'
import dogs from '@/assets/images/dogs.svg'
import search from '@/assets/icons/search.svg'

export function Home() {
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeState() {
    // TO DO
  }

  function handleChangeCity() {
    // TO DO
  }

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <img src={logo} alt="Find a friend" />
        </S.Header>

        <S.Hero>
          <h1>
            Leve <br /> a felicidade <br /> para o seu lar
          </h1>
          <img src={dogs} alt="Cachorros com semblantes contentes" />
        </S.Hero>

        <S.Footer>
          <p>
            Encontre o animal de estimação ideal <br /> para seu estilo de vida!
          </p>

          <S.SearchForm>
            <span>Busque um amigo:</span>
            <S.CitySelect name="" id="">
              <option value="">PE</option>
            </S.CitySelect>

            <S.StateSelect htmlFor="state">
              <select name="" id="state">
                <option value="1">Recife</option>
                <option value="2">Goiatuba</option>
                <option value="3">Morrinhos</option>
              </select>
            </S.StateSelect>

            <button>
              <img src={search} alt="" />
            </button>
          </S.SearchForm>
        </S.Footer>
      </S.Content>
    </S.Container>
  )
}
