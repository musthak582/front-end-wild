import { Metadata } from 'next';
import TypeScriptCheatSheet from './TypeScriptCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'TypeScript Cheat Sheet',
  description: 'Get to know the basics of TypeScript’s types and how they make JavaScript code more reliable and easier to manage.',
};

// Export default component for this page
export default function TypeScriptCheatSheetPage() {
  return <TypeScriptCheatSheet />;
}
