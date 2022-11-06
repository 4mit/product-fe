import { FacebookShareButton, FacebookIcon } from 'next-share';
import { TelegramShareButton, TelegramIcon } from 'next-share';
import { TwitterShareButton, TwitterIcon } from 'next-share';
import { WhatsappShareButton, WhatsappIcon } from 'next-share';
import { LinkedinShareButton, LinkedinIcon } from 'next-share';
const ShareArticle = () => {
    return (
      <div className="flex flex-row items-center">
        <FacebookShareButton
          url={'https://github.com/next-share'}
          quote={
            'next-share is a social share buttons for your next React apps.'
          }
          hashtag={'#nextshare'}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TelegramShareButton
          url={'https://github.com/next-share'}
          title={
            'next-share is a social share buttons for your next React apps.'
          }
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <TwitterShareButton
          url={'https://github.com/next-share'}
          title={
            'next-share is a social share buttons for your next React apps.'
          }
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton
          url={'https://github.com/next-share'}
          title={
            'next-share is a social share buttons for your next React apps.'
          }
          separator=":: "
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <LinkedinShareButton url={'https://github.com/next-share'}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    );
};

export default ShareArticle;