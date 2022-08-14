import { SearchFormContainer, TextArea } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <TextArea>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </TextArea>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}