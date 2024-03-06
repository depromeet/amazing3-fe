import { Comment } from '@/components';

import { CommentBottomSheetLayout } from './CommentBottomSheetLayout';
import { EmptyComments } from './EmptyComments';

interface CommentsBottomSheetProps {
  goalId: number;
  open: boolean;
  onClose: VoidFunction;
}

// TODO: api 로직 추가 후 제거
const data = {
  totalComments: 2,
  isMyGoal: true,
  comments: [
    {
      id: 1,
      isMyComment: false,
      user: {
        url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/8ee0540f-4c8f-4d9e-80f4-671e60c292e8',
        nickname: '산타할아버지',
        username: 'BANDIBOODI-6',
      },
      content: '멋지다! 너의 목표1',
      createdAt: '2024-02-29T07:34:58.356Z',
    },
    {
      id: 2,
      isMyComment: false,
      user: {
        url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/8ee0540f-4c8f-4d9e-80f4-671e60c292e8',
        nickname: '산타할아버지',
        username: 'BANDIBOODI-6',
      },
      content: '멋지다! 너의 목표2',
      createdAt: '2024-02-29T07:34:58.356Z',
    },
    {
      id: 3,
      isMyComment: false,
      user: {
        url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/8ee0540f-4c8f-4d9e-80f4-671e60c292e8',
        nickname: '산타할아버지',
        username: 'BANDIBOODI-6',
      },
      content: '멋지다! 너의 목표3',
      createdAt: '2024-02-29T07:34:58.356Z',
    },
    {
      id: 4,
      isMyComment: false,
      user: {
        url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/8ee0540f-4c8f-4d9e-80f4-671e60c292e8',
        nickname: '산타할아버지',
        username: 'BANDIBOODI-6',
      },
      content: '멋지다! 너의 목표4',
      createdAt: '2024-02-29T07:34:58.356Z',
    },
    {
      id: 5,
      isMyComment: false,
      user: {
        url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/8ee0540f-4c8f-4d9e-80f4-671e60c292e8',
        nickname: '산타할아버지',
        username: 'BANDIBOODI-6',
      },
      content: '멋지다! 너의 목표5',
      createdAt: '2024-02-29T07:34:58.356Z',
    },
    {
      id: 6,
      isMyComment: false,
      user: {
        url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/8ee0540f-4c8f-4d9e-80f4-671e60c292e8',
        nickname: '산타할아버지',
        username: 'BANDIBOODI-6',
      },
      content: '멋지다! 너의 목표6',
      createdAt: '2024-02-29T07:34:58.356Z',
    },
    {
      id: 7,
      isMyComment: false,
      user: {
        url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/8ee0540f-4c8f-4d9e-80f4-671e60c292e8',
        nickname: '산타할아버지',
        username: 'BANDIBOODI-6',
      },
      content: '멋지다! 너의 목표7',
      createdAt: '2024-02-29T07:34:58.356Z',
    },
    {
      id: 8,
      isMyComment: false,
      user: {
        url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/8ee0540f-4c8f-4d9e-80f4-671e60c292e8',
        nickname: '산타할아버지',
        username: 'BANDIBOODI-6',
      },
      content: '멋지다! 너의 목표8',
      createdAt: '2024-02-29T07:34:58.356Z',
    },
    {
      id: 9,
      isMyComment: false,
      user: {
        url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/8ee0540f-4c8f-4d9e-80f4-671e60c292e8',
        nickname: '산타할아버지',
        username: 'BANDIBOODI-6',
      },
      content: '멋지다! 너의 목표9',
      createdAt: '2024-02-29T07:34:58.356Z',
    },
    {
      id: 10,
      isMyComment: false,
      user: {
        url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/8ee0540f-4c8f-4d9e-80f4-671e60c292e8',
        nickname: '산타할아버지',
        username: 'BANDIBOODI-6',
      },
      content: '멋지다! 너의 목표10',
      createdAt: '2024-02-29T07:34:58.356Z',
    },
  ],
};

export const CommentsBottomSheet = ({ goalId, ...props }: CommentsBottomSheetProps) => {
  return (
    <CommentBottomSheetLayout title="댓글" total={data.totalComments} goalId={goalId} {...props}>
      {data.totalComments ? (
        <>
          {data.comments.map((comment) => (
            <div className="flex flex-col gap-3xs mb-3xs" key={comment.id}>
              <Comment {...comment} isDeletable={data.isMyGoal || comment.isMyComment} />
              <div className="h-[1px] bg-gray-20" />
            </div>
          ))}
        </>
      ) : (
        <EmptyComments />
      )}
    </CommentBottomSheetLayout>
  );
};
