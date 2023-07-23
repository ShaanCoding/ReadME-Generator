import MarkdownEditor from "@uiw/react-markdown-editor"

interface IPreviewPageProps {
  output: string
}

const PreviewPage: React.FC<IPreviewPageProps> = ({ output }) => {
  return <MarkdownEditor.Markdown source={output} />
}

export default PreviewPage
