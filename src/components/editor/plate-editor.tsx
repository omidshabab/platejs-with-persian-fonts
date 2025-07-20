'use client';

import * as React from 'react';

import { Plate, usePlateEditor } from 'platejs/react';

import { EditorKit } from '@/components/editor/editor-kit';
import { SettingsDialog } from '@/components/editor/settings-dialog';
import { Editor, EditorContainer } from '@/components/ui/editor';

export function PlateEditor() {
  const editor = usePlateEditor({
    plugins: EditorKit,
    value,
  });

  return (
    <Plate editor={editor}>
      <EditorContainer>
        <Editor variant="demo" className="font-estedad" />
      </EditorContainer>

      <SettingsDialog />
    </Plate>
  );
}

const value = [
  {
    children: [{ text: 'به محیط آزمایشی پلیت خوش آمدید!' }],
    type: 'h1',
  },
  {
    children: [
      { text: 'یک ویرایشگر متن مدرن را تجربه کنید که با ' },
      { children: [{ text: 'اسلیت' }], type: 'a', url: 'https://slatejs.org' },
      { text: ' و ' },
      { children: [{ text: 'ری‌اکت' }], type: 'a', url: 'https://reactjs.org' },
      {
        text: ' ساخته شده است. این محیط آزمایشی تنها بخشی از قابلیت‌های پلیت را نمایش می‌دهد. ',
      },
      {
        children: [{ text: 'مستندات را ببینید' }],
        type: 'a',
        url: '/docs',
      },
      { text: ' تا بیشتر کشف کنید.' },
    ],
    type: 'p',
  },
  // Suggestions & Comments Section
  {
    children: [{ text: 'ویرایش مشارکتی' }],
    type: 'h2',
  },
  {
    children: [
      { text: 'محتوا را به راحتی بازبینی و اصلاح کنید. از ' },
      {
        children: [
          {
            suggestion: true,
            suggestion_playground1: {
              id: 'playground1',
              createdAt: Date.now(),
              type: 'insert',
              userId: 'alice',
            },
            text: 'پیشنهادها',
          },
        ],
        type: 'a',
        url: '/docs/suggestion',
      },
      {
        suggestion: true,
        suggestion_playground1: {
          id: 'playground1',
          createdAt: Date.now(),
          type: 'insert',
          userId: 'alice',
        },
        text: ' ',
      },
      {
        suggestion: true,
        suggestion_playground1: {
          id: 'playground1',
          createdAt: Date.now(),
          type: 'insert',
          userId: 'alice',
        },
        text: 'مانند این متن افزوده شده',
      },
      { text: ' یا برای ' },
      {
        suggestion: true,
        suggestion_playground2: {
          id: 'playground2',
          createdAt: Date.now(),
          type: 'remove',
          userId: 'bob',
        },
        text: 'علامت‌گذاری متن برای حذف',
      },
      { text: '. تغییرات را با ' },
      {
        children: [
          { comment: true, comment_discussion4: true, text: 'نظرات' },
        ],
        type: 'a',
        url: '/docs/comment',
      },
      {
        comment: true,
        comment_discussion4: true,
        text: ' روی بخش‌های مختلف متن گفتگو کنید',
      },
      { text: '. حتی می‌توانید ' },
      {
        comment: true,
        comment_discussion6: true,
        suggestion: true,
        suggestion_playground3: {
          id: 'playground3',
          createdAt: Date.now(),
          type: 'insert',
          userId: 'charlie',
        },
        text: 'حاشیه‌نویسی‌های همپوشان',
      },
      { text: ' داشته باشید!' },
    ],
    type: 'p',
  },
];
