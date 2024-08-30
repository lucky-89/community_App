// /pages/GroupDetail.js
import React, { useState, useEffect } from 'react';
import Group from '../componants/Group';
import '../App.css';

function GroupDetail() {
  const [group, setGroup] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API
    const mockGroupData = {
      id: 1,
      name: 'React Developers',
      description: 'A group for React enthusiasts.',
      posts: [
        { user: 'Lucky', content: 'React is awesome!' },
        { user: 'Priyanshu', content: 'Just started learning React!' },
      ],
      events: [
        {
          title: 'React Meetup',
          date: '2024-08-01',
          location: 'Mumbai',
          description: 'A meetup for React developers.',
        },
        {
          title: 'React Workshop',
          date: '2024-08-15',
          location: 'Delhi',
          description: 'A workshop on React best practices.',
        },
      ],
    };

    setGroup(mockGroupData);
  }, []);

  if (!group) return <div>Loading...</div>;

  return (
    <div className="groupDetail">
      <Group group={group} />
    </div>
  );
}

export default GroupDetail;

