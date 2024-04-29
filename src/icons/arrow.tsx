import React from 'react';
import type { SVGProps } from 'react';

export function MakiArrow({ color, className }: { color: string, className: string }) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 15 15" className={className}><path fill={color} d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"></path></svg>);
}