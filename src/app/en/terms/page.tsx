import FooterEnHome from '@/components/footer/footer-en.component';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import fs from 'fs';
import path from 'path';

/*
class TermsPageEn extends Component {
  render(): ReactNode {
    this.return ();
  }
}
*/

const TermsPageEn = (): JSX.Element => {
  const filePath = path.join(process.cwd(), './public/markdown/terms-en.md');
  const markdownContent = fs.readFileSync(filePath, 'utf8');

  return (
    <div className="relative">
      <div className="w-full main-container py-14 md:px-0 px-8">
        <div className="text-zinc-900">
          <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {markdownContent}
          </Markdown>
        </div>
      </div>
      <FooterEnHome />
    </div>
  );
}

export default TermsPageEn;