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

function SpecialCharactersEmoji( editor ) {
    editor.plugins.get( 'SpecialCharacters' ).addItems( 'Emoji', 
	[
	  {
		"title": ":grinning_face:",
		"character": "😀"
	  },
	  {
		"title": ":beaming_face_with_smiling_eyes:",
		"character": "😁"
	  },
	  {
		"title": ":face_with_tears_of_joy:",
		"character": "😂"
	  },
	  {
		"title": ":rolling_on_the_floor_laughing:",
		"character": "🤣"
	  },
	  {
		"title": ":grinning_face_with_big_eyes:",
		"character": "😃"
	  },
	  {
		"title": ":grinning_face_with_smiling_eyes:",
		"character": "😄"
	  },
	  {
		"title": ":grinning_face_with_sweat:",
		"character": "😅"
	  },
	  {
		"title": ":grinning_squinting_face:",
		"character": "😆"
	  },
	  {
		"title": ":winking_face:",
		"character": "😉"
	  },
	  {
		"title": ":smiling_face_with_smiling_eyes:",
		"character": "😊"
	  },
	  {
		"title": ":face_savoring_food:",
		"character": "😋"
	  },
	  {
		"title": ":smiling_face_with_sunglasses:",
		"character": "😎"
	  },
	  {
		"title": ":smiling_face_with_heart-eyes:",
		"character": "😍"
	  },
	  {
		"title": ":face_blowing_a_kiss:",
		"character": "😘"
	  },
	  {
		"title": ":kissing_face:",
		"character": "😗"
	  },
	  {
		"title": ":kissing_face_with_smiling_eyes:",
		"character": "😙"
	  },
	  {
		"title": ":kissing_face_with_closed_eyes:",
		"character": "😚"
	  },
	  {
		"title": ":smiling_face:",
		"character": "☺"
	  },
	  {
		"title": ":slightly_smiling_face:",
		"character": "🙂"
	  },
	  {
		"title": ":hugging_face:",
		"character": "🤗"
	  },
	  {
		"title": ":star-struck:",
		"character": "🤩"
	  },
	  {
		"title": ":thinking_face:",
		"character": "🤔"
	  },
	  {
		"title": ":face_with_raised_eyebrow:",
		"character": "🤨"
	  },
	  {
		"title": ":neutral_face:",
		"character": "😐"
	  },
	  {
		"title": ":expressionless_face:",
		"character": "😑"
	  },
	  {
		"title": ":face_without_mouth:",
		"character": "😶"
	  },
	  {
		"title": ":face_with_rolling_eyes:",
		"character": "🙄"
	  },
	  {
		"title": ":smirking_face:",
		"character": "😏"
	  },
	  {
		"title": ":persevering_face:",
		"character": "😣"
	  },
	  {
		"title": ":sad_but_relieved_face:",
		"character": "😥"
	  },
	  {
		"title": ":face_with_open_mouth:",
		"character": "😮"
	  },
	  {
		"title": ":zipper-mouth_face:",
		"character": "🤐"
	  },
	  {
		"title": ":hushed_face:",
		"character": "😯"
	  },
	  {
		"title": ":sleepy_face:",
		"character": "😪"
	  },
	  {
		"title": ":tired_face:",
		"character": "😫"
	  },
	  {
		"title": ":sleeping_face:",
		"character": "😴"
	  },
	  {
		"title": ":relieved_face:",
		"character": "😌"
	  },
	  {
		"title": ":face_with_tongue:",
		"character": "😛"
	  },
	  {
		"title": ":winking_face_with_tongue:",
		"character": "😜"
	  },
	  {
		"title": ":squinting_face_with_tongue:",
		"character": "😝"
	  },
	  {
		"title": ":drooling_face:",
		"character": "🤤"
	  },
	  {
		"title": ":unamused_face:",
		"character": "😒"
	  },
	  {
		"title": ":downcast_face_with_sweat:",
		"character": "😓"
	  },
	  {
		"title": ":pensive_face:",
		"character": "😔"
	  },
	  {
		"title": ":confused_face:",
		"character": "😕"
	  },
	  {
		"title": ":upside-down_face:",
		"character": "🙃"
	  },
	  {
		"title": ":money-mouth_face:",
		"character": "🤑"
	  },
	  {
		"title": ":astonished_face:",
		"character": "😲"
	  },
	  {
		"title": ":slightly_frowning_face:",
		"character": "🙁"
	  },
	  {
		"title": ":confounded_face:",
		"character": "😖"
	  },
	  {
		"title": ":disappointed_face:",
		"character": "😞"
	  },
	  {
		"title": ":worried_face:",
		"character": "😟"
	  },
	  {
		"title": ":face_with_steam_from_nose:",
		"character": "😤"
	  },
	  {
		"title": ":crying_face:",
		"character": "😢"
	  },
	  {
		"title": ":loudly_crying_face:",
		"character": "😭"
	  },
	  {
		"title": ":frowning_face_with_open_mouth:",
		"character": "😦"
	  },
	  {
		"title": ":anguished_face:",
		"character": "😧"
	  },
	  {
		"title": ":fearful_face:",
		"character": "😨"
	  },
	  {
		"title": ":weary_face:",
		"character": "😩"
	  },
	  {
		"title": ":exploding_head:",
		"character": "🤯"
	  },
	  {
		"title": ":grimacing_face:",
		"character": "😬"
	  },
	  {
		"title": ":anxious_face_with_sweat:",
		"character": "😰"
	  },
	  {
		"title": ":face_screaming_in_fear:",
		"character": "😱"
	  },
	  {
		"title": ":flushed_face:",
		"character": "😳"
	  },
	  {
		"title": ":zany_face:",
		"character": "🤪"
	  },
	  {
		"title": ":dizzy_face:",
		"character": "😵"
	  },
	  {
		"title": ":pouting_face:",
		"character": "😡"
	  },
	  {
		"title": ":angry_face:",
		"character": "😠"
	  },
	  {
		"title": ":face_with_symbols_on_mouth:",
		"character": "🤬"
	  },
	  {
		"title": ":face_with_medical_mask:",
		"character": "😷"
	  },
	  {
		"title": ":face_with_thermometer:",
		"character": "🤒"
	  },
	  {
		"title": ":face_with_head-bandage:",
		"character": "🤕"
	  },
	  {
		"title": ":nauseated_face:",
		"character": "🤢"
	  },
	  {
		"title": ":face_vomiting:",
		"character": "🤮"
	  },
	  {
		"title": ":sneezing_face:",
		"character": "🤧"
	  },
	  {
		"title": ":smiling_face_with_halo:",
		"character": "😇"
	  },
	  {
		"title": ":cowboy_hat_face:",
		"character": "🤠"
	  },
	  {
		"title": ":lying_face:",
		"character": "🤥"
	  },
	  {
		"title": ":shushing_face:",
		"character": "🤫"
	  },
	  {
		"title": ":face_with_hand_over_mouth:",
		"character": "🤭"
	  },
	  {
		"title": ":face_with_monocle:",
		"character": "🧐"
	  },
	  {
		"title": ":nerd_face:",
		"character": "🤓"
	  },
	  {
		"title": ":smiling_face_with_horns:",
		"character": "😈"
	  },
	  {
		"title": ":angry_face_with_horns:",
		"character": "👿"
	  },
	  {
		"title": ":clown_face:",
		"character": "🤡"
	  },
	  {
		"title": ":ogre:",
		"character": "👹"
	  },
	  {
		"title": ":goblin:",
		"character": "👺"
	  },
	  {
		"title": ":skull:",
		"character": "💀"
	  },
	  {
		"title": ":skull_and_crossbones:",
		"character": "☠"
	  },
	  {
		"title": ":ghost:",
		"character": "👻"
	  },
	  {
		"title": ":alien:",
		"character": "👽"
	  },
	  {
		"title": ":alien_monster:",
		"character": "👾"
	  },
	  {
		"title": ":robot_face:",
		"character": "🤖"
	  },
	  {
		"title": ":pile_of_poo:",
		"character": "💩"
	  },
	  {
		"title": ":grinning_cat_face:",
		"character": "😺"
	  },
	  {
		"title": ":grinning_cat_face_with_smiling_eyes:",
		"character": "😸"
	  },
	  {
		"title": ":cat_face_with_tears_of_joy:",
		"character": "😹"
	  },
	  {
		"title": ":smiling_cat_face_with_heart-eyes:",
		"character": "😻"
	  },
	  {
		"title": ":cat_face_with_wry_smile:",
		"character": "😼"
	  },
	  {
		"title": ":kissing_cat_face:",
		"character": "😽"
	  },
	  {
		"title": ":weary_cat_face:",
		"character": "🙀"
	  },
	  {
		"title": ":crying_cat_face:",
		"character": "😿"
	  },
	  {
		"title": ":pouting_cat_face:",
		"character": "😾"
	  },
	  {
		"title": ":see-no-evil_monkey:",
		"character": "🙈"
	  },
	  {
		"title": ":hear-no-evil_monkey:",
		"character": "🙉"
	  },
	  {
		"title": ":speak-no-evil_monkey:",
		"character": "🙊"
	  },
	  {
		"title": ":baby:",
		"character": "👶"
	  },
	  {
		"title": ":child:",
		"character": "🧒"
	  },
	  {
		"title": ":boy:",
		"character": "👦"
	  },
	  {
		"title": ":girl:",
		"character": "👧"
	  },
	  {
		"title": ":person:",
		"character": "🧑"
	  },
	  {
		"title": ":person_blond_hair:",
		"character": "👱"
	  },
	  {
		"title": ":man:",
		"character": "👨"
	  },
	  {
		"title": ":man_blond_hair:",
		"character": "👱‍♂️"
	  },
	  {
		"title": ":man_beard:",
		"character": "🧔"
	  },
	  {
		"title": ":woman:",
		"character": "👩"
	  },
	  {
		"title": ":woman_blond_hair:",
		"character": "👱‍♀️"
	  },
	  {
		"title": ":older_person:",
		"character": "🧓"
	  },
	  {
		"title": ":old_man:",
		"character": "👴"
	  },
	  {
		"title": ":old_woman:",
		"character": "👵"
	  },
	  {
		"title": ":man_health_worker:",
		"character": "👨‍⚕️"
	  },
	  {
		"title": ":woman_health_worker:",
		"character": "👩‍⚕️"
	  },
	  {
		"title": ":man_student:",
		"character": "👨‍🎓"
	  },
	  {
		"title": ":woman_student:",
		"character": "👩‍🎓"
	  },
	  {
		"title": ":man_teacher:",
		"character": "👨‍🏫"
	  },
	  {
		"title": ":woman_teacher:",
		"character": "👩‍🏫"
	  },
	  {
		"title": ":man_judge:",
		"character": "👨‍⚖️"
	  },
	  {
		"title": ":woman_judge:",
		"character": "👩‍⚖️"
	  },
	  {
		"title": ":man_farmer:",
		"character": "👨‍🌾"
	  },
	  {
		"title": ":woman_farmer:",
		"character": "👩‍🌾"
	  },
	  {
		"title": ":man_cook:",
		"character": "👨‍🍳"
	  },
	  {
		"title": ":woman_cook:",
		"character": "👩‍🍳"
	  },
	  {
		"title": ":man_mechanic:",
		"character": "👨‍🔧"
	  },
	  {
		"title": ":woman_mechanic:",
		"character": "👩‍🔧"
	  },
	  {
		"title": ":man_factory_worker:",
		"character": "👨‍🏭"
	  },
	  {
		"title": ":woman_factory_worker:",
		"character": "👩‍🏭"
	  },
	  {
		"title": ":man_office_worker:",
		"character": "👨‍💼"
	  },
	  {
		"title": ":woman_office_worker:",
		"character": "👩‍💼"
	  },
	  {
		"title": ":man_scientist:",
		"character": "👨‍🔬"
	  },
	  {
		"title": ":woman_scientist:",
		"character": "👩‍🔬"
	  },
	  {
		"title": ":man_technologist:",
		"character": "👨‍💻"
	  },
	  {
		"title": ":woman_technologist:",
		"character": "👩‍💻"
	  },
	  {
		"title": ":man_singer:",
		"character": "👨‍🎤"
	  },
	  {
		"title": ":woman_singer:",
		"character": "👩‍🎤"
	  },
	  {
		"title": ":man_artist:",
		"character": "👨‍🎨"
	  },
	  {
		"title": ":woman_artist:",
		"character": "👩‍🎨"
	  },
	  {
		"title": ":man_pilot:",
		"character": "👨‍✈️"
	  },
	  {
		"title": ":woman_pilot:",
		"character": "👩‍✈️"
	  },
	  {
		"title": ":man_astronaut:",
		"character": "👨‍🚀"
	  },
	  {
		"title": ":woman_astronaut:",
		"character": "👩‍🚀"
	  },
	  {
		"title": ":man_firefighter:",
		"character": "👨‍🚒"
	  },
	  {
		"title": ":woman_firefighter:",
		"character": "👩‍🚒"
	  },
	  {
		"title": ":police_officer:",
		"character": "👮"
	  },
	  {
		"title": ":man_police_officer:",
		"character": "👮‍♂️"
	  },
	  {
		"title": ":woman_police_officer:",
		"character": "👮‍♀️"
	  },
	  {
		"title": ":detective:",
		"character": "🕵"
	  },
	  {
		"title": ":man_detective:",
		"character": "🕵️‍♂️"
	  },
	  {
		"title": ":woman_detective:",
		"character": "🕵️‍♀️"
	  },
	  {
		"title": ":guard:",
		"character": "💂"
	  },
	  {
		"title": ":man_guard:",
		"character": "💂‍♂️"
	  },
	  {
		"title": ":woman_guard:",
		"character": "💂‍♀️"
	  },
	  {
		"title": ":construction_worker:",
		"character": "👷"
	  },
	  {
		"title": ":man_construction_worker:",
		"character": "👷‍♂️"
	  },
	  {
		"title": ":woman_construction_worker:",
		"character": "👷‍♀️"
	  },
	  {
		"title": ":prince:",
		"character": "🤴"
	  },
	  {
		"title": ":princess:",
		"character": "👸"
	  },
	  {
		"title": ":person_wearing_turban:",
		"character": "👳"
	  },
	  {
		"title": ":man_wearing_turban:",
		"character": "👳‍♂️"
	  },
	  {
		"title": ":woman_wearing_turban:",
		"character": "👳‍♀️"
	  },
	  {
		"title": ":man_with_chinese_cap:",
		"character": "👲"
	  },
	  {
		"title": ":woman_with_headscarf:",
		"character": "🧕"
	  },
	  {
		"title": ":man_in_tuxedo:",
		"character": "🤵"
	  },
	  {
		"title": ":bride_with_veil:",
		"character": "👰"
	  },
	  {
		"title": ":pregnant_woman:",
		"character": "🤰"
	  },
	  {
		"title": ":breast-feeding:",
		"character": "🤱"
	  },
	  {
		"title": ":baby_angel:",
		"character": "👼"
	  },
	  {
		"title": ":santa_claus:",
		"character": "🎅"
	  },
	  {
		"title": ":mrs._claus:",
		"character": "🤶"
	  },
	  {
		"title": ":man_tipping_hand:",
		"character": "💁‍♂️"
	  },
	  {
		"title": ":woman_tipping_hand:",
		"character": "💁‍♀️"
	  },
	  {
		"title": ":family_woman_woman_boy_boy:",
		"character": "👩‍👩‍👦‍👦"
	  },
	  {
		"title": ":family_woman_woman_girl_girl:",
		"character": "👩‍👩‍👧‍👧"
	  },
	  {
		"title": ":family_man_boy:",
		"character": "👨‍👦"
	  },
	  {
		"title": ":family_man_boy_boy:",
		"character": "👨‍👦‍👦"
	  },
	  {
		"title": ":family_man_girl:",
		"character": "👨‍👧"
	  },
	  {
		"title": ":family_man_girl_boy:",
		"character": "👨‍👧‍👦"
	  },
	  {
		"title": ":family_man_girl_girl:",
		"character": "👨‍👧‍👧"
	  },
	  {
		"title": ":family_woman_boy:",
		"character": "👩‍👦"
	  },
	  {
		"title": ":family_woman_boy_boy:",
		"character": "👩‍👦‍👦"
	  },
	  {
		"title": ":family_woman_girl:",
		"character": "👩‍👧"
	  },
	  {
		"title": ":family_woman_girl_boy:",
		"character": "👩‍👧‍👦"
	  },
	  {
		"title": ":family_woman_girl_girl:",
		"character": "👩‍👧‍👧"
	  },
	  {
		"title": ":flexed_biceps:",
		"character": "💪"
	  },
	  {
		"title": ":backhand_index_pointing_left:",
		"character": "👈"
	  },
	  {
		"title": ":backhand_index_pointing_right:",
		"character": "👉"
	  },
	  {
		"title": ":backhand_index_pointing_up:",
		"character": "👆"
	  },
	  {
		"title": ":middle_finger:",
		"character": "🖕"
	  },
	  {
		"title": ":backhand_index_pointing_down:",
		"character": "👇"
	  },
	  {
		"title": ":crossed_fingers:",
		"character": "🤞"
	  },
	  {
		"title": ":vulcan_salute:",
		"character": "🖖"
	  },
	  {
		"title": ":sign_of_the_horns:",
		"character": "🤘"
	  },
	  {
		"title": ":call_me_hand:",
		"character": "🤙"
	  },
	  {
		"title": ":hand_with_fingers_splayed:",
		"character": "🖐"
	  },
	  {
		"title": ":raised_hand:",
		"character": "✋"
	  },
	  {
		"title": ":ok_hand:",
		"character": "👌"
	  },
	  {
		"title": ":thumbs_up:",
		"character": "👍"
	  },
	  {
		"title": ":thumbs_down:",
		"character": "👎"
	  },
	  {
		"title": ":raised_fist:",
		"character": "✊"
	  },
	  {
		"title": ":oncoming_fist:",
		"character": "👊"
	  },
	  {
		"title": ":left-facing_fist:",
		"character": "🤛"
	  },
	  {
		"title": ":right-facing_fist:",
		"character": "🤜"
	  },
	  {
		"title": ":raised_back_of_hand:",
		"character": "🤚"
	  },
	  {
		"title": ":waving_hand:",
		"character": "👋"
	  },
	  {
		"title": ":love-you_gesture:",
		"character": "🤟"
	  },
	  {
		"title": ":writing_hand:",
		"character": "✍"
	  },
	  {
		"title": ":clapping_hands:",
		"character": "👏"
	  },
	  {
		"title": ":open_hands:",
		"character": "👐"
	  },
	  {
		"title": ":raising_hands:",
		"character": "🙌"
	  },
	  {
		"title": ":palms_up_together:",
		"character": "🤲"
	  },
	  {
		"title": ":folded_hands:",
		"character": "🙏"
	  },
	  {
		"title": ":handshake:",
		"character": "🤝"
	  },
	  {
		"title": ":nail_polish:",
		"character": "💅"
	  },
	  {
		"title": ":ear:",
		"character": "👂"
	  },
	  {
		"title": ":nose:",
		"character": "👃"
	  },
	  {
		"title": ":footprints:",
		"character": "👣"
	  },
	  {
		"title": ":eyes:",
		"character": "👀"
	  },
	  {
		"title": ":eye:",
		"character": "👁"
	  },
	  {
		"title": ":eye_in_speech_bubble:",
		"character": "👁️‍🗨️"
	  },
	  {
		"title": ":brain:",
		"character": "🧠"
	  },
	  {
		"title": ":tongue:",
		"character": "👅"
	  },
	  {
		"title": ":mouth:",
		"character": "👄"
	  },
	  {
		"title": ":kiss_mark:",
		"character": "💋"
	  },
	  {
		"title": ":heart_with_arrow:",
		"character": "💘"
	  },
	  {
		"title": ":heart_with_ribbon:",
		"character": "💝"
	  },
	  {
		"title": ":sparkling_heart:",
		"character": "💖"
	  },
	  {
		"title": ":growing_heart:",
		"character": "💗"
	  },
	  {
		"title": ":beating_heart:",
		"character": "💓"
	  },
	  {
		"title": ":revolving_hearts:",
		"character": "💞"
	  },
	  {
		"title": ":two_hearts:",
		"character": "💕"
	  },
	  {
		"title": ":love_letter:",
		"character": "💌"
	  },
	  {
		"title": ":heavy_heart_exclamation:",
		"character": "❣"
	  },
	  {
		"title": ":broken_heart:",
		"character": "💔"
	  },
	  {
		"title": ":red_heart:",
		"character": "❤"
	  },
	  {
		"title": ":orange_heart:",
		"character": "🧡"
	  },
	  {
		"title": ":yellow_heart:",
		"character": "💛"
	  },
	  {
		"title": ":green_heart:",
		"character": "💚"
	  },
	  {
		"title": ":blue_heart:",
		"character": "💙"
	  },
	  {
		"title": ":purple_heart:",
		"character": "💜"
	  },
	  {
		"title": ":black_heart:",
		"character": "🖤"
	  },
	  {
		"title": ":heart_decoration:",
		"character": "💟"
	  },
	  {
		"title": ":zzz:",
		"character": "💤"
	  },
	  {
		"title": ":anger_symbol:",
		"character": "💢"
	  },
	  {
		"title": ":bomb:",
		"character": "💣"
	  },
	  {
		"title": ":collision:",
		"character": "💥"
	  },
	  {
		"title": ":sweat_droplets:",
		"character": "💦"
	  },
	  {
		"title": ":dashing_away:",
		"character": "💨"
	  },
	  {
		"title": ":dizzy:",
		"character": "💫"
	  },
	  {
		"title": ":speech_balloon:",
		"character": "💬"
	  },
	  {
		"title": ":left_speech_bubble:",
		"character": "🗨"
	  },
	  {
		"title": ":right_anger_bubble:",
		"character": "🗯"
	  },
	  {
		"title": ":thought_balloon:",
		"character": "💭"
	  },
	  {
		"title": ":hole:",
		"character": "🕳"
	  },
	  {
		"title": ":glasses:",
		"character": "👓"
	  },
	  {
		"title": ":sunglasses:",
		"character": "🕶"
	  },
	  {
		"title": ":necktie:",
		"character": "👔"
	  },
	  {
		"title": ":t-shirt:",
		"character": "👕"
	  },
	  {
		"title": ":jeans:",
		"character": "👖"
	  },
	  {
		"title": ":scarf:",
		"character": "🧣"
	  },
	  {
		"title": ":gloves:",
		"character": "🧤"
	  },
	  {
		"title": ":coat:",
		"character": "🧥"
	  },
	  {
		"title": ":socks:",
		"character": "🧦"
	  },
	  {
		"title": ":dress:",
		"character": "👗"
	  },
	  {
		"title": ":kimono:",
		"character": "👘"
	  },
	  {
		"title": ":bikini:",
		"character": "👙"
	  },
	  {
		"title": ":woman’s_clothes:",
		"character": "👚"
	  },
	  {
		"title": ":purse:",
		"character": "👛"
	  },
	  {
		"title": ":handbag:",
		"character": "👜"
	  },
	  {
		"title": ":clutch_bag:",
		"character": "👝"
	  },
	  {
		"title": ":shopping_bags:",
		"character": "🛍"
	  },
	  {
		"title": ":backpack:",
		"character": "🎒"
	  },
	  {
		"title": ":man’s_shoe:",
		"character": "👞"
	  },
	  {
		"title": ":running_shoe:",
		"character": "👟"
	  },
	  {
		"title": ":high-heeled_shoe:",
		"character": "👠"
	  },
	  {
		"title": ":woman’s_sandal:",
		"character": "👡"
	  },
	  {
		"title": ":woman’s_boot:",
		"character": "👢"
	  },
	  {
		"title": ":crown:",
		"character": "👑"
	  },
	  {
		"title": ":woman’s_hat:",
		"character": "👒"
	  },
	  {
		"title": ":top_hat:",
		"character": "🎩"
	  },
	  {
		"title": ":graduation_cap:",
		"character": "🎓"
	  },
	  {
		"title": ":billed_cap:",
		"character": "🧢"
	  },
	  {
		"title": ":rescue_worker’s_helmet:",
		"character": "⛑"
	  },
	  {
		"title": ":prayer_beads:",
		"character": "📿"
	  },
	  {
		"title": ":lipstick:",
		"character": "💄"
	  },
	  {
		"title": ":ring:",
		"character": "💍"
	  },
	  {
		"title": ":gem_stone:",
		"character": "💎"
	  },
	  {
		"title": ":monkey_face:",
		"character": "🐵"
	  },
	  {
		"title": ":monkey:",
		"character": "🐒"
	  },
	  {
		"title": ":gorilla:",
		"character": "🦍"
	  },
	  {
		"title": ":dog_face:",
		"character": "🐶"
	  },
	  {
		"title": ":dog:",
		"character": "🐕"
	  },
	  {
		"title": ":poodle:",
		"character": "🐩"
	  },
	  {
		"title": ":wolf_face:",
		"character": "🐺"
	  },
	  {
		"title": ":fox_face:",
		"character": "🦊"
	  },
	  {
		"title": ":cat_face:",
		"character": "🐱"
	  },
	  {
		"title": ":cat:",
		"character": "🐈"
	  },
	  {
		"title": ":lion_face:",
		"character": "🦁"
	  },
	  {
		"title": ":tiger_face:",
		"character": "🐯"
	  },
	  {
		"title": ":tiger:",
		"character": "🐅"
	  },
	  {
		"title": ":leopard:",
		"character": "🐆"
	  },
	  {
		"title": ":horse_face:",
		"character": "🐴"
	  },
	  {
		"title": ":horse:",
		"character": "🐎"
	  },
	  {
		"title": ":unicorn_face:",
		"character": "🦄"
	  },
	  {
		"title": ":zebra:",
		"character": "🦓"
	  },
	  {
		"title": ":deer:",
		"character": "🦌"
	  },
	  {
		"title": ":cow_face:",
		"character": "🐮"
	  },
	  {
		"title": ":ox:",
		"character": "🐂"
	  },
	  {
		"title": ":water_buffalo:",
		"character": "🐃"
	  },
	  {
		"title": ":cow:",
		"character": "🐄"
	  },
	  {
		"title": ":pig_face:",
		"character": "🐷"
	  },
	  {
		"title": ":pig:",
		"character": "🐖"
	  },
	  {
		"title": ":boar:",
		"character": "🐗"
	  },
	  {
		"title": ":pig_nose:",
		"character": "🐽"
	  },
	  {
		"title": ":ram:",
		"character": "🐏"
	  },
	  {
		"title": ":ewe:",
		"character": "🐑"
	  },
	  {
		"title": ":goat:",
		"character": "🐐"
	  },
	  {
		"title": ":camel:",
		"character": "🐪"
	  },
	  {
		"title": ":two-hump_camel:",
		"character": "🐫"
	  },
	  {
		"title": ":giraffe:",
		"character": "🦒"
	  },
	  {
		"title": ":elephant:",
		"character": "🐘"
	  },
	  {
		"title": ":rhinoceros:",
		"character": "🦏"
	  },
	  {
		"title": ":mouse_face:",
		"character": "🐭"
	  },
	  {
		"title": ":mouse:",
		"character": "🐁"
	  },
	  {
		"title": ":rat:",
		"character": "🐀"
	  },
	  {
		"title": ":hamster_face:",
		"character": "🐹"
	  },
	  {
		"title": ":rabbit_face:",
		"character": "🐰"
	  },
	  {
		"title": ":rabbit:",
		"character": "🐇"
	  },
	  {
		"title": ":chipmunk:",
		"character": "🐿"
	  },
	  {
		"title": ":hedgehog:",
		"character": "🦔"
	  },
	  {
		"title": ":bat:",
		"character": "🦇"
	  },
	  {
		"title": ":bear_face:",
		"character": "🐻"
	  },
	  {
		"title": ":koala:",
		"character": "🐨"
	  },
	  {
		"title": ":panda_face:",
		"character": "🐼"
	  },
	  {
		"title": ":paw_prints:",
		"character": "🐾"
	  },
	  {
		"title": ":turkey:",
		"character": "🦃"
	  },
	  {
		"title": ":chicken:",
		"character": "🐔"
	  },
	  {
		"title": ":rooster:",
		"character": "🐓"
	  },
	  {
		"title": ":hatching_chick:",
		"character": "🐣"
	  },
	  {
		"title": ":baby_chick:",
		"character": "🐤"
	  },
	  {
		"title": ":front-facing_baby_chick:",
		"character": "🐥"
	  },
	  {
		"title": ":bird:",
		"character": "🐦"
	  },
	  {
		"title": ":penguin:",
		"character": "🐧"
	  },
	  {
		"title": ":dove:",
		"character": "🕊"
	  },
	  {
		"title": ":eagle:",
		"character": "🦅"
	  },
	  {
		"title": ":duck:",
		"character": "🦆"
	  },
	  {
		"title": ":owl:",
		"character": "🦉"
	  },
	  {
		"title": ":frog_face:",
		"character": "🐸"
	  },
	  {
		"title": ":crocodile:",
		"character": "🐊"
	  },
	  {
		"title": ":turtle:",
		"character": "🐢"
	  },
	  {
		"title": ":lizard:",
		"character": "🦎"
	  },
	  {
		"title": ":snake:",
		"character": "🐍"
	  },
	  {
		"title": ":dragon_face:",
		"character": "🐲"
	  },
	  {
		"title": ":dragon:",
		"character": "🐉"
	  },
	  {
		"title": ":sauropod:",
		"character": "🦕"
	  },
	  {
		"title": ":t-rex:",
		"character": "🦖"
	  },
	  {
		"title": ":spouting_whale:",
		"character": "🐳"
	  },
	  {
		"title": ":whale:",
		"character": "🐋"
	  },
	  {
		"title": ":dolphin:",
		"character": "🐬"
	  },
	  {
		"title": ":fish:",
		"character": "🐟"
	  },
	  {
		"title": ":tropical_fish:",
		"character": "🐠"
	  },
	  {
		"title": ":blowfish:",
		"character": "🐡"
	  },
	  {
		"title": ":shark:",
		"character": "🦈"
	  },
	  {
		"title": ":octopus:",
		"character": "🐙"
	  },
	  {
		"title": ":spiral_shell:",
		"character": "🐚"
	  },
	  {
		"title": ":crab:",
		"character": "🦀"
	  },
	  {
		"title": ":shrimp:",
		"character": "🦐"
	  },
	  {
		"title": ":squid:",
		"character": "🦑"
	  },
	  {
		"title": ":snail:",
		"character": "🐌"
	  },
	  {
		"title": ":butterfly:",
		"character": "🦋"
	  },
	  {
		"title": ":bug:",
		"character": "🐛"
	  },
	  {
		"title": ":ant:",
		"character": "🐜"
	  },
	  {
		"title": ":honeybee:",
		"character": "🐝"
	  },
	  {
		"title": ":lady_beetle:",
		"character": "🐞"
	  },
	  {
		"title": ":cricket:",
		"character": "🦗"
	  },
	  {
		"title": ":spider:",
		"character": "🕷"
	  },
	  {
		"title": ":spider_web:",
		"character": "🕸"
	  },
	  {
		"title": ":scorpion:",
		"character": "🦂"
	  },
	  {
		"title": ":bouquet:",
		"character": "💐"
	  },
	  {
		"title": ":cherry_blossom:",
		"character": "🌸"
	  },
	  {
		"title": ":white_flower:",
		"character": "💮"
	  },
	  {
		"title": ":rosette:",
		"character": "🏵"
	  },
	  {
		"title": ":rose:",
		"character": "🌹"
	  },
	  {
		"title": ":wilted_flower:",
		"character": "🥀"
	  },
	  {
		"title": ":hibiscus:",
		"character": "🌺"
	  },
	  {
		"title": ":sunflower:",
		"character": "🌻"
	  },
	  {
		"title": ":blossom:",
		"character": "🌼"
	  },
	  {
		"title": ":tulip:",
		"character": "🌷"
	  },
	  {
		"title": ":seedling:",
		"character": "🌱"
	  },
	  {
		"title": ":evergreen_tree:",
		"character": "🌲"
	  },
	  {
		"title": ":deciduous_tree:",
		"character": "🌳"
	  },
	  {
		"title": ":palm_tree:",
		"character": "🌴"
	  },
	  {
		"title": ":cactus:",
		"character": "🌵"
	  },
	  {
		"title": ":sheaf_of_rice:",
		"character": "🌾"
	  },
	  {
		"title": ":herb:",
		"character": "🌿"
	  },
	  {
		"title": ":shamrock:",
		"character": "☘"
	  },
	  {
		"title": ":four_leaf_clover:",
		"character": "🍀"
	  },
	  {
		"title": ":maple_leaf:",
		"character": "🍁"
	  },
	  {
		"title": ":fallen_leaf:",
		"character": "🍂"
	  },
	  {
		"title": ":leaf_fluttering_in_wind:",
		"character": "🍃"
	  },
	  {
		"title": ":grapes:",
		"character": "🍇"
	  },
	  {
		"title": ":melon:",
		"character": "🍈"
	  },
	  {
		"title": ":watermelon:",
		"character": "🍉"
	  },
	  {
		"title": ":tangerine:",
		"character": "🍊"
	  },
	  {
		"title": ":lemon:",
		"character": "🍋"
	  },
	  {
		"title": ":banana:",
		"character": "🍌"
	  },
	  {
		"title": ":pineapple:",
		"character": "🍍"
	  },
	  {
		"title": ":red_apple:",
		"character": "🍎"
	  },
	  {
		"title": ":green_apple:",
		"character": "🍏"
	  },
	  {
		"title": ":pear:",
		"character": "🍐"
	  },
	  {
		"title": ":peach:",
		"character": "🍑"
	  },
	  {
		"title": ":cherries:",
		"character": "🍒"
	  },
	  {
		"title": ":strawberry:",
		"character": "🍓"
	  },
	  {
		"title": ":kiwi_fruit:",
		"character": "🥝"
	  },
	  {
		"title": ":tomato:",
		"character": "🍅"
	  },
	  {
		"title": ":coconut:",
		"character": "🥥"
	  },
	  {
		"title": ":avocado:",
		"character": "🥑"
	  },
	  {
		"title": ":eggplant:",
		"character": "🍆"
	  },
	  {
		"title": ":potato:",
		"character": "🥔"
	  },
	  {
		"title": ":carrot:",
		"character": "🥕"
	  },
	  {
		"title": ":ear_of_corn:",
		"character": "🌽"
	  },
	  {
		"title": ":hot_pepper:",
		"character": "🌶"
	  },
	  {
		"title": ":cucumber:",
		"character": "🥒"
	  },
	  {
		"title": ":broccoli:",
		"character": "🥦"
	  },
	  {
		"title": ":mushroom:",
		"character": "🍄"
	  },
	  {
		"title": ":peanuts:",
		"character": "🥜"
	  },
	  {
		"title": ":chestnut:",
		"character": "🌰"
	  },
	  {
		"title": ":bread:",
		"character": "🍞"
	  },
	  {
		"title": ":croissant:",
		"character": "🥐"
	  },
	  {
		"title": ":baguette_bread:",
		"character": "🥖"
	  },
	  {
		"title": ":pretzel:",
		"character": "🥨"
	  },
	  {
		"title": ":pancakes:",
		"character": "🥞"
	  },
	  {
		"title": ":cheese_wedge:",
		"character": "🧀"
	  },
	  {
		"title": ":meat_on_bone:",
		"character": "🍖"
	  },
	  {
		"title": ":poultry_leg:",
		"character": "🍗"
	  },
	  {
		"title": ":cut_of_meat:",
		"character": "🥩"
	  },
	  {
		"title": ":bacon:",
		"character": "🥓"
	  },
	  {
		"title": ":hamburger:",
		"character": "🍔"
	  },
	  {
		"title": ":french_fries:",
		"character": "🍟"
	  },
	  {
		"title": ":pizza:",
		"character": "🍕"
	  },
	  {
		"title": ":hot_dog:",
		"character": "🌭"
	  },
	  {
		"title": ":sandwich:",
		"character": "🥪"
	  },
	  {
		"title": ":taco:",
		"character": "🌮"
	  },
	  {
		"title": ":burrito:",
		"character": "🌯"
	  },
	  {
		"title": ":stuffed_flatbread:",
		"character": "🥙"
	  },
	  {
		"title": ":egg:",
		"character": "🥚"
	  },
	  {
		"title": ":black_flag:",
		"character": "🏴"
	  },
	  {
		"title": ":white_flag:",
		"character": "🏳"
	  },
	  {
		"title": ":rainbow_flag:",
		"character": "🏳️‍🌈"
	  },
	  {
		"title": ":flag_ascension_island:",
		"character": "🇦🇨"
	  },
	  {
		"title": ":flag_andorra:",
		"character": "🇦🇩"
	  },
	  {
		"title": ":flag_united_arab_emirates:",
		"character": "🇦🇪"
	  },
	  {
		"title": ":flag_afghanistan:",
		"character": "🇦🇫"
	  },
	  {
		"title": ":flag_antigua_&amp;_barbuda:",
		"character": "🇦🇬"
	  },
	  {
		"title": ":flag_anguilla:",
		"character": "🇦🇮"
	  },
	  {
		"title": ":flag_albania:",
		"character": "🇦🇱"
	  },
	  {
		"title": ":flag_armenia:",
		"character": "🇦🇲"
	  },
	  {
		"title": ":flag_angola:",
		"character": "🇦🇴"
	  },
	  {
		"title": ":flag_antarctica:",
		"character": "🇦🇶"
	  },
	  {
		"title": ":flag_argentina:",
		"character": "🇦🇷"
	  },
	  {
		"title": ":flag_american_samoa:",
		"character": "🇦🇸"
	  },
	  {
		"title": ":flag_austria:",
		"character": "🇦🇹"
	  },
	  {
		"title": ":flag_australia:",
		"character": "🇦🇺"
	  },
	  {
		"title": ":flag_aruba:",
		"character": "🇦🇼"
	  },
	  {
		"title": ":flag_åland_islands:",
		"character": "🇦🇽"
	  },
	  {
		"title": ":flag_azerbaijan:",
		"character": "🇦🇿"
	  },
	  {
		"title": ":flag_bosnia_&amp;_herzegovina:",
		"character": "🇧🇦"
	  },
	  {
		"title": ":flag_barbados:",
		"character": "🇧🇧"
	  },
	  {
		"title": ":flag_bangladesh:",
		"character": "🇧🇩"
	  },
	  {
		"title": ":flag_belgium:",
		"character": "🇧🇪"
	  },
	  {
		"title": ":flag_burkina_faso:",
		"character": "🇧🇫"
	  },
	  {
		"title": ":flag_bulgaria:",
		"character": "🇧🇬"
	  },
	  {
		"title": ":flag_bahrain:",
		"character": "🇧🇭"
	  },
	  {
		"title": ":flag_burundi:",
		"character": "🇧🇮"
	  },
	  {
		"title": ":flag_benin:",
		"character": "🇧🇯"
	  },
	  {
		"title": ":flag_st._barthélemy:",
		"character": "🇧🇱"
	  },
	  {
		"title": ":flag_bermuda:",
		"character": "🇧🇲"
	  },
	  {
		"title": ":flag_brunei:",
		"character": "🇧🇳"
	  },
	  {
		"title": ":flag_bolivia:",
		"character": "🇧🇴"
	  },
	  {
		"title": ":flag_caribbean_netherlands:",
		"character": "🇧🇶"
	  },
	  {
		"title": ":flag_brazil:",
		"character": "🇧🇷"
	  },
	  {
		"title": ":flag_bahamas:",
		"character": "🇧🇸"
	  },
	  {
		"title": ":flag_bhutan:",
		"character": "🇧🇹"
	  },
	  {
		"title": ":flag_bouvet_island:",
		"character": "🇧🇻"
	  },
	  {
		"title": ":flag_botswana:",
		"character": "🇧🇼"
	  },
	  {
		"title": ":flag_belarus:",
		"character": "🇧🇾"
	  },
	  {
		"title": ":flag_belize:",
		"character": "🇧🇿"
	  },
	  {
		"title": ":flag_canada:",
		"character": "🇨🇦"
	  },
	  {
		"title": ":flag_cocos_(keeling)_islands:",
		"character": "🇨🇨"
	  },
	  {
		"title": ":flag_congo_-_kinshasa:",
		"character": "🇨🇩"
	  },
	  {
		"title": ":flag_central_african_republic:",
		"character": "🇨🇫"
	  },
	  {
		"title": ":flag_congo_-_brazzaville:",
		"character": "🇨🇬"
	  },
	  {
		"title": ":flag_switzerland:",
		"character": "🇨🇭"
	  },
	  {
		"title": ":flag_côte_d’ivoire:",
		"character": "🇨🇮"
	  },
	  {
		"title": ":flag_cook_islands:",
		"character": "🇨🇰"
	  },
	  {
		"title": ":flag_chile:",
		"character": "🇨🇱"
	  },
	  {
		"title": ":flag_cameroon:",
		"character": "🇨🇲"
	  },
	  {
		"title": ":flag_china:",
		"character": "🇨🇳"
	  },
	  {
		"title": ":flag_colombia:",
		"character": "🇨🇴"
	  },
	  {
		"title": ":flag_clipperton_island:",
		"character": "🇨🇵"
	  },
	  {
		"title": ":flag_costa_rica:",
		"character": "🇨🇷"
	  },
	  {
		"title": ":flag_cuba:",
		"character": "🇨🇺"
	  },
	  {
		"title": ":flag_cape_verde:",
		"character": "🇨🇻"
	  },
	  {
		"title": ":flag_curaçao:",
		"character": "🇨🇼"
	  },
	  {
		"title": ":flag_christmas_island:",
		"character": "🇨🇽"
	  },
	  {
		"title": ":flag_cyprus:",
		"character": "🇨🇾"
	  },
	  {
		"title": ":flag_czechia:",
		"character": "🇨🇿"
	  },
	  {
		"title": ":flag_germany:",
		"character": "🇩🇪"
	  },
	  {
		"title": ":flag_diego_garcia:",
		"character": "🇩🇬"
	  },
	  {
		"title": ":flag_djibouti:",
		"character": "🇩🇯"
	  },
	  {
		"title": ":flag_denmark:",
		"character": "🇩🇰"
	  },
	  {
		"title": ":flag_dominica:",
		"character": "🇩🇲"
	  },
	  {
		"title": ":flag_dominican_republic:",
		"character": "🇩🇴"
	  },
	  {
		"title": ":flag_algeria:",
		"character": "🇩🇿"
	  },
	  {
		"title": ":flag_ceuta_&amp;_melilla:",
		"character": "🇪🇦"
	  },
	  {
		"title": ":flag_ecuador:",
		"character": "🇪🇨"
	  },
	  {
		"title": ":flag_estonia:",
		"character": "🇪🇪"
	  },
	  {
		"title": ":flag_egypt:",
		"character": "🇪🇬"
	  },
	  {
		"title": ":flag_western_sahara:",
		"character": "🇪🇭"
	  },
	  {
		"title": ":flag_eritrea:",
		"character": "🇪🇷"
	  },
	  {
		"title": ":flag_spain:",
		"character": "🇪🇸"
	  },
	  {
		"title": ":flag_ethiopia:",
		"character": "🇪🇹"
	  },
	  {
		"title": ":flag_european_union:",
		"character": "🇪🇺"
	  },
	  {
		"title": ":flag_finland:",
		"character": "🇫🇮"
	  },
	  {
		"title": ":flag_fiji:",
		"character": "🇫🇯"
	  },
	  {
		"title": ":flag_falkland_islands:",
		"character": "🇫🇰"
	  },
	  {
		"title": ":flag_micronesia:",
		"character": "🇫🇲"
	  },
	  {
		"title": ":flag_faroe_islands:",
		"character": "🇫🇴"
	  },
	  {
		"title": ":flag_france:",
		"character": "🇫🇷"
	  },
	  {
		"title": ":flag_gabon:",
		"character": "🇬🇦"
	  },
	  {
		"title": ":flag_united_kingdom:",
		"character": "🇬🇧"
	  },
	  {
		"title": ":flag_grenada:",
		"character": "🇬🇩"
	  },
	  {
		"title": ":flag_georgia:",
		"character": "🇬🇪"
	  },
	  {
		"title": ":flag_french_guiana:",
		"character": "🇬🇫"
	  },
	  {
		"title": ":flag_guernsey:",
		"character": "🇬🇬"
	  },
	  {
		"title": ":flag_ghana:",
		"character": "🇬🇭"
	  },
	  {
		"title": ":flag_gibraltar:",
		"character": "🇬🇮"
	  },
	  {
		"title": ":flag_greenland:",
		"character": "🇬🇱"
	  },
	  {
		"title": ":flag_gambia:",
		"character": "🇬🇲"
	  },
	  {
		"title": ":flag_guinea:",
		"character": "🇬🇳"
	  },
	  {
		"title": ":flag_guadeloupe:",
		"character": "🇬🇵"
	  },
	  {
		"title": ":flag_equatorial_guinea:",
		"character": "🇬🇶"
	  },
	  {
		"title": ":flag_greece:",
		"character": "🇬🇷"
	  },
	  {
		"title": ":flag_south_georgia_&amp;_south_sandwich_islands:",
		"character": "🇬🇸"
	  },
	  {
		"title": ":flag_guatemala:",
		"character": "🇬🇹"
	  },
	  {
		"title": ":flag_guam:",
		"character": "🇬🇺"
	  },
	  {
		"title": ":flag_guinea-bissau:",
		"character": "🇬🇼"
	  },
	  {
		"title": ":flag_guyana:",
		"character": "🇬🇾"
	  },
	  {
		"title": ":flag_hong_kong_sar_china:",
		"character": "🇭🇰"
	  },
	  {
		"title": ":flag_heard_&amp;_mcdonald_islands:",
		"character": "🇭🇲"
	  },
	  {
		"title": ":flag_honduras:",
		"character": "🇭🇳"
	  },
	  {
		"title": ":flag_croatia:",
		"character": "🇭🇷"
	  },
	  {
		"title": ":flag_haiti:",
		"character": "🇭🇹"
	  },
	  {
		"title": ":flag_hungary:",
		"character": "🇭🇺"
	  },
	  {
		"title": ":flag_canary_islands:",
		"character": "🇮🇨"
	  },
	  {
		"title": ":flag_indonesia:",
		"character": "🇮🇩"
	  },
	  {
		"title": ":flag_ireland:",
		"character": "🇮🇪"
	  },
	  {
		"title": ":flag_israel:",
		"character": "🇮🇱"
	  },
	  {
		"title": ":flag_isle_of_man:",
		"character": "🇮🇲"
	  },
	  {
		"title": ":flag_india:",
		"character": "🇮🇳"
	  },
	  {
		"title": ":flag_british_indian_ocean_territory:",
		"character": "🇮🇴"
	  },
	  {
		"title": ":flag_iraq:",
		"character": "🇮🇶"
	  },
	  {
		"title": ":flag_iran:",
		"character": "🇮🇷"
	  },
	  {
		"title": ":flag_iceland:",
		"character": "🇮🇸"
	  },
	  {
		"title": ":flag_italy:",
		"character": "🇮🇹"
	  },
	  {
		"title": ":flag_jersey:",
		"character": "🇯🇪"
	  },
	  {
		"title": ":flag_jamaica:",
		"character": "🇯🇲"
	  },
	  {
		"title": ":flag_jordan:",
		"character": "🇯🇴"
	  },
	  {
		"title": ":flag_japan:",
		"character": "🇯🇵"
	  },
	  {
		"title": ":flag_kenya:",
		"character": "🇰🇪"
	  },
	  {
		"title": ":flag_kyrgyzstan:",
		"character": "🇰🇬"
	  },
	  {
		"title": ":flag_cambodia:",
		"character": "🇰🇭"
	  },
	  {
		"title": ":flag_kiribati:",
		"character": "🇰🇮"
	  },
	  {
		"title": ":flag_comoros:",
		"character": "🇰🇲"
	  },
	  {
		"title": ":flag_st._kitts_&amp;_nevis:",
		"character": "🇰🇳"
	  },
	  {
		"title": ":flag_north_korea:",
		"character": "🇰🇵"
	  },
	  {
		"title": ":flag_south_korea:",
		"character": "🇰🇷"
	  },
	  {
		"title": ":flag_kuwait:",
		"character": "🇰🇼"
	  },
	  {
		"title": ":flag_cayman_islands:",
		"character": "🇰🇾"
	  },
	  {
		"title": ":flag_kazakhstan:",
		"character": "🇰🇿"
	  },
	  {
		"title": ":flag_laos:",
		"character": "🇱🇦"
	  },
	  {
		"title": ":flag_lebanon:",
		"character": "🇱🇧"
	  },
	  {
		"title": ":flag_st._lucia:",
		"character": "🇱🇨"
	  },
	  {
		"title": ":flag_liechtenstein:",
		"character": "🇱🇮"
	  },
	  {
		"title": ":flag_sri_lanka:",
		"character": "🇱🇰"
	  },
	  {
		"title": ":flag_liberia:",
		"character": "🇱🇷"
	  },
	  {
		"title": ":flag_lesotho:",
		"character": "🇱🇸"
	  },
	  {
		"title": ":flag_lithuania:",
		"character": "🇱🇹"
	  },
	  {
		"title": ":flag_luxembourg:",
		"character": "🇱🇺"
	  },
	  {
		"title": ":flag_latvia:",
		"character": "🇱🇻"
	  },
	  {
		"title": ":flag_libya:",
		"character": "🇱🇾"
	  },
	  {
		"title": ":flag_morocco:",
		"character": "🇲🇦"
	  },
	  {
		"title": ":flag_monaco:",
		"character": "🇲🇨"
	  },
	  {
		"title": ":flag_moldova:",
		"character": "🇲🇩"
	  },
	  {
		"title": ":flag_montenegro:",
		"character": "🇲🇪"
	  },
	  {
		"title": ":flag_st._martin:",
		"character": "🇲🇫"
	  },
	  {
		"title": ":flag_madagascar:",
		"character": "🇲🇬"
	  },
	  {
		"title": ":flag_marshall_islands:",
		"character": "🇲🇭"
	  },
	  {
		"title": ":flag_macedonia:",
		"character": "🇲🇰"
	  },
	  {
		"title": ":flag_mali:",
		"character": "🇲🇱"
	  },
	  {
		"title": ":flag_myanmar_(burma):",
		"character": "🇲🇲"
	  },
	  {
		"title": ":flag_mongolia:",
		"character": "🇲🇳"
	  },
	  {
		"title": ":flag_macau_sar_china:",
		"character": "🇲🇴"
	  },
	  {
		"title": ":flag_northern_mariana_islands:",
		"character": "🇲🇵"
	  },
	  {
		"title": ":flag_martinique:",
		"character": "🇲🇶"
	  },
	  {
		"title": ":flag_mauritania:",
		"character": "🇲🇷"
	  },
	  {
		"title": ":flag_montserrat:",
		"character": "🇲🇸"
	  },
	  {
		"title": ":flag_malta:",
		"character": "🇲🇹"
	  },
	  {
		"title": ":flag_mauritius:",
		"character": "🇲🇺"
	  },
	  {
		"title": ":flag_maldives:",
		"character": "🇲🇻"
	  },
	  {
		"title": ":flag_malawi:",
		"character": "🇲🇼"
	  },
	  {
		"title": ":flag_mexico:",
		"character": "🇲🇽"
	  },
	  {
		"title": ":flag_malaysia:",
		"character": "🇲🇾"
	  },
	  {
		"title": ":flag_mozambique:",
		"character": "🇲🇿"
	  },
	  {
		"title": ":flag_namibia:",
		"character": "🇳🇦"
	  },
	  {
		"title": ":flag_new_caledonia:",
		"character": "🇳🇨"
	  },
	  {
		"title": ":flag_niger:",
		"character": "🇳🇪"
	  },
	  {
		"title": ":flag_norfolk_island:",
		"character": "🇳🇫"
	  },
	  {
		"title": ":flag_nigeria:",
		"character": "🇳🇬"
	  },
	  {
		"title": ":flag_nicaragua:",
		"character": "🇳🇮"
	  },
	  {
		"title": ":flag_netherlands:",
		"character": "🇳🇱"
	  },
	  {
		"title": ":flag_norway:",
		"character": "🇳🇴"
	  },
	  {
		"title": ":flag_nepal:",
		"character": "🇳🇵"
	  },
	  {
		"title": ":flag_nauru:",
		"character": "🇳🇷"
	  },
	  {
		"title": ":flag_niue:",
		"character": "🇳🇺"
	  },
	  {
		"title": ":flag_new_zealand:",
		"character": "🇳🇿"
	  },
	  {
		"title": ":flag_oman:",
		"character": "🇴🇲"
	  },
	  {
		"title": ":flag_panama:",
		"character": "🇵🇦"
	  },
	  {
		"title": ":flag_peru:",
		"character": "🇵🇪"
	  },
	  {
		"title": ":flag_french_polynesia:",
		"character": "🇵🇫"
	  },
	  {
		"title": ":flag_papua_new_guinea:",
		"character": "🇵🇬"
	  },
	  {
		"title": ":flag_philippines:",
		"character": "🇵🇭"
	  },
	  {
		"title": ":flag_pakistan:",
		"character": "🇵🇰"
	  },
	  {
		"title": ":flag_poland:",
		"character": "🇵🇱"
	  },
	  {
		"title": ":flag_st._pierre_&amp;_miquelon:",
		"character": "🇵🇲"
	  },
	  {
		"title": ":flag_pitcairn_islands:",
		"character": "🇵🇳"
	  },
	  {
		"title": ":flag_puerto_rico:",
		"character": "🇵🇷"
	  },
	  {
		"title": ":flag_palestinian_territories:",
		"character": "🇵🇸"
	  },
	  {
		"title": ":flag_portugal:",
		"character": "🇵🇹"
	  },
	  {
		"title": ":flag_palau:",
		"character": "🇵🇼"
	  },
	  {
		"title": ":flag_paraguay:",
		"character": "🇵🇾"
	  },
	  {
		"title": ":flag_qatar:",
		"character": "🇶🇦"
	  },
	  {
		"title": ":flag_réunion:",
		"character": "🇷🇪"
	  },
	  {
		"title": ":flag_romania:",
		"character": "🇷🇴"
	  },
	  {
		"title": ":flag_serbia:",
		"character": "🇷🇸"
	  },
	  {
		"title": ":flag_russia:",
		"character": "🇷🇺"
	  },
	  {
		"title": ":flag_rwanda:",
		"character": "🇷🇼"
	  },
	  {
		"title": ":flag_saudi_arabia:",
		"character": "🇸🇦"
	  },
	  {
		"title": ":flag_solomon_islands:",
		"character": "🇸🇧"
	  },
	  {
		"title": ":flag_seychelles:",
		"character": "🇸🇨"
	  },
	  {
		"title": ":flag_sudan:",
		"character": "🇸🇩"
	  },
	  {
		"title": ":flag_sweden:",
		"character": "🇸🇪"
	  },
	  {
		"title": ":flag_singapore:",
		"character": "🇸🇬"
	  },
	  {
		"title": ":flag_st._helena:",
		"character": "🇸🇭"
	  },
	  {
		"title": ":flag_slovenia:",
		"character": "🇸🇮"
	  },
	  {
		"title": ":flag_svalbard_&amp;_jan_mayen:",
		"character": "🇸🇯"
	  },
	  {
		"title": ":flag_slovakia:",
		"character": "🇸🇰"
	  },
	  {
		"title": ":flag_sierra_leone:",
		"character": "🇸🇱"
	  },
	  {
		"title": ":flag_san_marino:",
		"character": "🇸🇲"
	  },
	  {
		"title": ":flag_senegal:",
		"character": "🇸🇳"
	  },
	  {
		"title": ":flag_somalia:",
		"character": "🇸🇴"
	  },
	  {
		"title": ":flag_suriname:",
		"character": "🇸🇷"
	  },
	  {
		"title": ":flag_south_sudan:",
		"character": "🇸🇸"
	  },
	  {
		"title": ":flag_são_tomé_&amp;_príncipe:",
		"character": "🇸🇹"
	  },
	  {
		"title": ":flag_el_salvador:",
		"character": "🇸🇻"
	  },
	  {
		"title": ":flag_sint_maarten:",
		"character": "🇸🇽"
	  },
	  {
		"title": ":flag_syria:",
		"character": "🇸🇾"
	  },
	  {
		"title": ":flag_swaziland:",
		"character": "🇸🇿"
	  },
	  {
		"title": ":flag_tristan_da_cunha:",
		"character": "🇹🇦"
	  },
	  {
		"title": ":flag_turks_&amp;_caicos_islands:",
		"character": "🇹🇨"
	  },
	  {
		"title": ":flag_chad:",
		"character": "🇹🇩"
	  },
	  {
		"title": ":flag_french_southern_territories:",
		"character": "🇹🇫"
	  },
	  {
		"title": ":flag_togo:",
		"character": "🇹🇬"
	  },
	  {
		"title": ":flag_thailand:",
		"character": "🇹🇭"
	  },
	  {
		"title": ":flag_tajikistan:",
		"character": "🇹🇯"
	  },
	  {
		"title": ":flag_tokelau:",
		"character": "🇹🇰"
	  },
	  {
		"title": ":flag_timor-leste:",
		"character": "🇹🇱"
	  },
	  {
		"title": ":flag_turkmenistan:",
		"character": "🇹🇲"
	  },
	  {
		"title": ":flag_tunisia:",
		"character": "🇹🇳"
	  },
	  {
		"title": ":flag_tonga:",
		"character": "🇹🇴"
	  },
	  {
		"title": ":flag_turkey:",
		"character": "🇹🇷"
	  },
	  {
		"title": ":flag_trinidad_&amp;_tobago:",
		"character": "🇹🇹"
	  },
	  {
		"title": ":flag_tuvalu:",
		"character": "🇹🇻"
	  },
	  {
		"title": ":flag_taiwan:",
		"character": "🇹🇼"
	  },
	  {
		"title": ":flag_tanzania:",
		"character": "🇹🇿"
	  },
	  {
		"title": ":flag_ukraine:",
		"character": "🇺🇦"
	  },
	  {
		"title": ":flag_uganda:",
		"character": "🇺🇬"
	  },
	  {
		"title": ":flag_u.s._outlying_islands:",
		"character": "🇺🇲"
	  },
	  {
		"title": ":flag_united_nations:",
		"character": "🇺🇳"
	  },
	  {
		"title": ":flag_united_states:",
		"character": "🇺🇸"
	  },
	  {
		"title": ":flag_uruguay:",
		"character": "🇺🇾"
	  },
	  {
		"title": ":flag_uzbekistan:",
		"character": "🇺🇿"
	  },
	  {
		"title": ":flag_vatican_city:",
		"character": "🇻🇦"
	  },
	  {
		"title": ":flag_st._vincent_&amp;_grenadines:",
		"character": "🇻🇨"
	  },
	  {
		"title": ":flag_venezuela:",
		"character": "🇻🇪"
	  },
	  {
		"title": ":flag_british_virgin_islands:",
		"character": "🇻🇬"
	  },
	  {
		"title": ":flag_u.s._virgin_islands:",
		"character": "🇻🇮"
	  },
	  {
		"title": ":flag_vietnam:",
		"character": "🇻🇳"
	  },
	  {
		"title": ":flag_vanuatu:",
		"character": "🇻🇺"
	  },
	  {
		"title": ":flag_wallis_&amp;_futuna:",
		"character": "🇼🇫"
	  },
	  {
		"title": ":flag_samoa:",
		"character": "🇼🇸"
	  },
	  {
		"title": ":flag_kosovo:",
		"character": "🇽🇰"
	  },
	  {
		"title": ":flag_yemen:",
		"character": "🇾🇪"
	  },
	  {
		"title": ":flag_mayotte:",
		"character": "🇾🇹"
	  },
	  {
		"title": ":flag_south_africa:",
		"character": "🇿🇦"
	  },
	  {
		"title": ":flag_zambia:",
		"character": "🇿🇲"
	  },
	  {
		"title": ":flag_zimbabwe:",
		"character": "🇿🇼"
	  },
	  {
		"title": ":flag_england:",
		"character": "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
	  },
	  {
		"title": ":flag_scotland:",
		"character": "🏴󠁧󠁢󠁳󠁣󠁴󠁿"
	  },
	  {
		"title": ":flag_wales:",
		"character": "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
	  }
	]);
}

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
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

	SpecialCharacters, SpecialCharactersEmoji, 
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'underline',
			'alignment',
			'specialCharacters',
			'|',
			'bulletedList',
			'numberedList',
			'todoList',
			'|',
			'outdent',
			'indent',
			'|',
			'link',
			'emoji',
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
