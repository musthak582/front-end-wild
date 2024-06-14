'use client'
import { useEffect, useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css'; // Import the Highlight.js theme
import { jsCodeBlocks } from '../../../../../constants/data/jscode';
const JavaScriptCheatSheet = () => {
  // State to track the currently selected section
  const [selectedSection, setSelectedSection] = useState(jsCodeBlocks[0].id);
  useEffect(() => {
    // Highlight the code block whenever the selected section changes
    const codeBlocks = document.querySelectorAll<HTMLElement>('pre code');
    codeBlocks.forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [selectedSection]);



  return (
    <div className="w-full flex flex-col bg-white py-[60px] px-16">
      <div className={`w-full bg-zinc-100 flex flex-col items-center justify-center gap-6 py-4`}>
        <h2 className='text-3xl text-center font-extrabold text-slate-900 '>JavaScript Cheat Sheet</h2>
        <p className='text-[20px] text-slate-700 text-center'>Understand the basics of JavaScript to start making interactive websites.</p>
      </div>
      <div className='w-full flex flex-row bg-white'>
        {/* side bar */}
        <div className='w-[400px] h-[600px] overflow-auto  py-2 bg-white'>
          <nav className='flex flex-col'>
            {
              jsCodeBlocks.map((section) => (
                <button
                  className={`block w-full border-l-2  border-blue-100 text-left px-4 py-1 ${selectedSection === section.id ? ' font-semibold text-[#FFC500] border-[#FFC500] ' : ' text-slate-700 hover:border-l-[#FFC500]'
                    }`}
                  onClick={() => setSelectedSection(section.id)}
                  key={section.id}
                >
                  {section.label}
                </button>
              ))
            }
          </nav>
        </div>

        {/* code block */}
        <div className="flex w-full h-[600px] flex-col overflow-auto">
          {jsCodeBlocks.map((section) => (
            selectedSection === section.id && (
              <div key={section.id} className='h-full bg-[#1E1E1E]'>
                <pre>
                  <code className="language-js text-[18px]">
                    {section.content}
                  </code>
                </pre>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default JavaScriptCheatSheet;
