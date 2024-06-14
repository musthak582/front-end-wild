import { Metadata } from 'next';
import ReactCheatSheet from './ReactCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'React Cheat Sheet',
  description: 'Learn the simple ideas of React, such as components and state, to start building dynamic web apps.',
};

// Export default component for this page
export default function ReactCheatSheetPage() {
  return <ReactCheatSheet />;
}
