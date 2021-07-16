export function formatDate(date: string | Date) {
  const dateObj = date.toLocaleString('pt-BR')
  const formattedDate =
    typeof dateObj === 'string' ? new Date(dateObj) : dateObj

  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(formattedDate)
}
