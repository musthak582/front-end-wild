import { Metadata } from 'next';
import CssCheatSheet from './CssCheatSheet'; // Importing the component

// Define metadata for the page
export const metadata: Metadata = {
  title: 'CSS Cheat Sheet',
  description: 'A comprehensive CSS cheat sheet for quick reference and learning.',
};

// Export default component for this page
export default function CssCheatSheetPage() {
  return <CssCheatSheet />;
}
