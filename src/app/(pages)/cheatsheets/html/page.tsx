import { Metadata } from 'next';
import HtmlCheatSheet from './HtmlCheatSheet'; // Import the client-side component

// Define metadata for the page
export const metadata: Metadata = {
  title: 'HTML Cheat Sheet',
  description: 'Learn the essential HTML tags and attributes to create and structure web pages efficiently.',
};

// Export default component for this page
export default function HtmlCheatSheetPage() {
  return <HtmlCheatSheet />;
}
