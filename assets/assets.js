import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo5 from './logo5.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo5,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'פרוייקט API צד לקוח',
        description: 'עיצוב אתרי אינטרנט',
        bgImage: '/work-1.png',
    },
    {
        title: 'ניווט מבוסס GPS',
        description: 'אפליקציית מובייל',
        bgImage: '/work-2.png',
    },
    {
        title: 'אתר לעסק צילום',
        description: 'עיצוב אתרי אינטרנט',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX DESIGN',
        description: 'עיצוב קמפיין רשת',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'אתרי אינטרנט', description: 'הקמת אתרי אינטרנט בטכנולגיית וורדפרס או בקוד, שירותי דומיין ואחסון', link: '' },
    { icon: assets.mobile_icon, title: 'אפליקציות מובייל', description: 'בניית אפליקציות מובייל לאנדרואיד או IOS', link: '' },
    { icon: assets.ui_icon, title: 'חווית משתמש', description: 'עיצוב UX/UI בדגש על חוויית משתמש', link: '' },
    { icon: assets.graphics_icon, title: 'עיצוב גרפי', description: 'פתרונות גרפיים לקמפיינים ממוקדים ברשתות החברתיות', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'טכנולוגיות', description: 'Azure, WordPress, Next-Js, ADDS, Office-365' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'השכלה', description: 'B.A מערכות תוכנה' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'פרוייקטים', description: 'רשימת פרוייקטים ניתן למצוא בקובץ הרזומה' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];