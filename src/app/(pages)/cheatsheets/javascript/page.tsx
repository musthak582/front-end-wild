import { Metadata } from 'next';
import JavaScriptCheatSheet from './JavaScriptCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'JavaScript Cheat Sheet',
  description: 'Understand the basics of JavaScript to start making interactive websites.',
};

// Export default component for this page
export default function JavaScriptCheatSheetPage() {
  return <JavaScriptCheatSheet />;
}
