import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function dateFormatter(date: string) {
  const publishedDateRelativeNow = formatDistanceToNow(new Date(date), {
    locale: ptBR,
    addSuffix: true,
  })

  return publishedDateRelativeNow
}
