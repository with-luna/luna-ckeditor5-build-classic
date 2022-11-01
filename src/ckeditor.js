/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Mention from '@ckeditor/ckeditor5-mention/src/mention.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import {
    Emoji, EmojiActivity, EmojiFlags, EmojiFood, EmojiNature, EmojiObjects, EmojiPeople, EmojiSmileys,
    EmojiPlaces, EmojiSymbols
} from 'luna-emoji/src';

import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Image, ImageToolbar, ImageCaption, ImageStyle, LinkImage,

	Alignment,
	Autoformat,
	BlockQuote,
	Bold,
	Code,
	CodeBlock,
	Essentials,
	Indent,
	IndentBlock,
	Italic,
	Link,
	List,
	Mention,
	Paragraph,
	PasteFromOffice,
	Strikethrough,
	Subscript,
	Superscript,
	TextTransformation,
	TodoList,
	Underline,

	Emoji,
	EmojiSmileys,
	EmojiPeople,
	EmojiNature,
	EmojiPlaces,
	EmojiFood,
	EmojiActivity,
	EmojiObjects,
	EmojiSymbols,
	EmojiFlags,

	SpecialCharacters,
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'underline',
			'alignment',
			'emoji',
			'|',
			'bulletedList',
			'numberedList',
			'todoList',
			'|',
			'outdent',
			'indent',
			'|',
			'link',
			'blockQuote',
			'strikethrough',
			'code',
			'codeBlock',
			'subscript',
			'superscript',
			'|',
			'undo',
			'redo'
		]
	},
	language: 'en'
};

export default Editor;
