import FooterPtHome from '@/components/footer/footer-pt';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import fs from 'fs';
import path from 'path';

const TermsPagePt = (): JSX.Element => {
  const filePath = path.join(process.cwd(), './public/markdown/terms-pt.md');
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
      <FooterPtHome />
    </div>
  );
}

export default TermsPagePt;