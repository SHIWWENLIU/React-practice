import { useState } from 'react';

import AboutTab from './AboutTab';
import ContactTab from './ContactTab';
import PostsTab from './PostsTab';
import TabButton from './TabButton';

type Tab = 'about' | 'posts' | 'contact';

const Demo = () => {
  const [tab, setTab] = useState<Tab>('about');

  const selectTab = (tab: Tab) => {
    setTab(tab);
  };

  return (
    <div>
      <div className='ml-8 px-4 flex flex-col items-center space-x-4'>
        <TabButton
          title='About'
          onClick={() => selectTab('about')}
        />
        <TabButton
          title='Posts'
          onClick={() => selectTab('posts')}
        />
        <TabButton
          title='Contact'
          onClick={() => selectTab('contact')}
        />
      </div>

      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </div>
  );
};

export default Demo;