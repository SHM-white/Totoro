import './globals.css';
import Image from 'next/image';
import AnnouncementContent from '../dialog/post.md';
import MizukiImage from '../dialog/img/9eb3106ab7b40921628e09b93091db0a1789460279.png';
import AnnouncementDialog from '../components/AnnouncementDialog';

function AnnouncementImage({ alt = '' }) {
  return <Image src={MizukiImage} alt={alt} sizes="(max-width: 720px) 80vw, 640px" />;
}

const announcementComponents = { img: AnnouncementImage };

export const metadata = {
  title: 'Totoro Sunrun',
  description: 'Next.js full-stack Totoro Sunrun workspace',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <AnnouncementDialog>
          <AnnouncementContent components={announcementComponents} />
        </AnnouncementDialog>
      </body>
    </html>
  );
}
