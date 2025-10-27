/**
 * Ladle Global Provider
 * Wraps all stories with necessary context and styles
 */

import type { GlobalProvider } from '@ladle/react';
import '../styles/tailwind.css';

export const Provider: GlobalProvider = ({ children }) => {
  return <div className="bg-off-white p-8">{children}</div>;
};
