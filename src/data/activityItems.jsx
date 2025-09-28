
// src/data/activityItems.js
// Defines the icons on the far-left Activity Bar.
// `fileId` links an icon to a file in fileStructure.js
import { Home, User, Briefcase, Mail, Github, Settings } from 'lucide-react';

export const activityItems = [
  { id: 'home', icon: Home, fileId: 'home' },
  { id: 'about', icon: User, fileId: 'about' },
  { id: 'projects', icon: Briefcase, fileId: 'projects' },
  { id: 'contact', icon: Mail, fileId: 'contact' },
  { id: 'github', icon: Github, fileId: 'github' },
];

export const bottomActivityItems = [
    { id: 'settings', icon: Settings },
]