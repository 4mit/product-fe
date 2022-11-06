import { useState, useEffect } from 'react';

// import hljs from 'highlight.js';
// import 'highlight.js/styles/github.css';

import { useQuill } from 'react-quilljs';
// import 'quill/dist/quill.snow.css';
// import 'highlight.js/styles/darcula.css';

// import { RichTextEditor } from '@mantine/rte';

const initialValue =
  'Click here and start writing your Post \nClick here and start writing your Post';

// hljs.configure({
//   languages: ['javascript'],
// });

function QuillEditor({ onChange }) {
  const { Quill, quillRef, quill, editorRef, editor } = useQuill({
    modules: {
      syntax: {
        highlight: (text) => hljs.highlightAuto(text).value,
      },
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6] }],
        [{ font: [8, 10, 12, 14, 16, 18] }],
        [{ size: [8, 10, 12, 14, 16, 18] }],
        [
          'bold',
          'italic',
          'underline',
          'strike',
          'blockquote',
          'code-block',
          'direction',
        ],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        ['clean'],
      ],
      clipboard: {
        matchVisual: true,
      },
    },
    formats: [
      'header',
      'font',
      'size',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'code-block',
      'list',
      'bullet',
      'indent',
      'link',
      'image',
      'video',
    ],
    placeholder: initialValue,
    theme: 'snow',
  });
  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        // console.log('Text change!');
        console.log(quill.getContents()); // Get text only
        console.log(quill.getContents()); // Get delta contents
        console.log(quill.root.innerHTML); // Get innerHTML using quill
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
        onChange(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  return (
    <div>
      <div className="flex flex-col">
        <div
          style={{ width: '100%', border: '1px solid red' }}
          id="scrolling-container"
          className="w-full"
        >
          <div ref={quillRef} style={{ minHeight: 500 }} />
        </div>
      </div>
    </div>
  );
}
export default QuillEditor;
