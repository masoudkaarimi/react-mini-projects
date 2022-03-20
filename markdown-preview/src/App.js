import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { data } from './data';

function App() {
	const [markdown, setMarkdown] = useState(data);

	return (
		<main>
			<section className='markdown'>
				<textarea className='input' value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
				<article className='result'>
					<ReactMarkdown
						components={{
							code({ node, inline, className, children, ...props }) {
								const match = /language-(\w+)/.exec(className || '');
								return !inline && match ? (
									<SyntaxHighlighter
										children={String(children).replace(/\n$/, '')}
										style={oneDark}
										language={match[1]}
										PreTag='div'
										{...props}
									/>
								) : (
									<code className={className} {...props}>
										{children}
									</code>
								);
							},
						}}
						remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
						rehypePlugins={[rehypeRaw]}>
						{markdown}
					</ReactMarkdown>
				</article>
			</section>
		</main>
	);
}

export default App;
