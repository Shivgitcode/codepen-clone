import DOMPurify from 'dompurify';
import { useAppContext } from '../../context/contextProvider';

export default function Display() {
  const { data } = useAppContext();

  const sanitizedHTML = DOMPurify.sanitize(data.html);
  const cssContent = data.css;

  const iframeContent = `
    <html>
      <head>
        <style>${cssContent}</style>
      </head>
      <body>${sanitizedHTML}</body>
      <script>${data.js}</script>
    </html>
  `;
  
  return (
    <div className="w-full h-full">
      <iframe
        title="display-frame"
        className="w-full h-full"
        style={{ border: 'none' }}
        srcDoc={iframeContent}
      />
    </div>
  );
}
