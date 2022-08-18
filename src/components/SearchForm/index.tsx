import { SearchFormContainer, TextArea } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface SearchFormProps {
  fetchPosts: (query?: string) => void;
}

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm({ fetchPosts }: SearchFormProps) {

  const { register, handleSubmit, reset } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleFetchPosts(data: SearchFormInput) {
    fetchPosts(data.query)
    reset()
  }


  return (
    <SearchFormContainer onSubmit={handleSubmit(handleFetchPosts)}>
      <TextArea>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </TextArea>
      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchFormContainer>
  )
}