import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'xiaozhang',
          title: '   小张出品',
          href: 'https://www.bilibili.com/',
          blankTarget: true,
        },
        {
          key: 'eat',
          title: '    吃饱了打篮球’Git',
          href: 'https://gitee.com/eat-and-play-basketball',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <>zhang’GitHub<GithubOutlined/></>,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
