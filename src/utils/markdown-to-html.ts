import marked from 'marked'

export const markdownToHtml = (markdown: string) => {
  const content = marked(markdown)

  return content
}
